import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { readFileSync } from "fs";

import { getSubgraphConfig, getSubgraphConfigFiles } from "./function/src/helpers/subgraphConfig";

const BUCKET_NAME_PREFIX = `olympus-subgraph-cache-${pulumi.getStack()}`;

const pulumiConfig = new pulumi.Config();

/**
 * Enable APIs
 */
// Ensure that the required APIs are enabled
// Requires the Compute Engine API to be manually enabled
// https://console.cloud.google.com/apis/api/compute.googleapis.com/overview
const enabledApisCloudFunctions = new gcp.projects.Service("cloud-functions", {
  project: gcp.config.project,
  service: "cloudfunctions.googleapis.com",
});

const enabledApisCloudScheduler = new gcp.projects.Service("cloud-scheduler", {
  project: gcp.config.project,
  service: "cloudscheduler.googleapis.com",
});

const enabledApisStorage = new gcp.projects.Service("storage", {
  project: gcp.config.project,
  service: "storage.googleapis.com",
});

const enabledApisArtifactRegistry = new gcp.projects.Service(
  "artifact-registry",
  {
    project: gcp.config.project,
    service: "artifactregistry.googleapis.com",
  },
);

const enabledApisCloudBuild = new gcp.projects.Service("cloud-build", {
  project: gcp.config.project,
  service: "cloudbuild.googleapis.com",
});

const enabledApisBigQuery = new gcp.projects.Service("bigquery", {
  project: gcp.config.project,
  service: "bigquery.googleapis.com",
});

const enabledApisPubSub = new gcp.projects.Service("pubsub", {
  project: gcp.config.project,
  service: "pubsub.googleapis.com",
});

/**
 * Record storage: GCS bucket
 */
// Create a bucket to store the cached results
const storageBucket = new gcp.storage.Bucket(BUCKET_NAME_PREFIX, {
  location: "US", // Get this from the provider instead?
  uniformBucketLevelAccess: true,
  versioning: { enabled: false },
}, {
  dependsOn: [enabledApisStorage],
});

// Export the DNS name of the bucket
export const storageBucketUrl = storageBucket.url;
export const storageBucketName = storageBucket.name;

/**
 * Create a BigQuery external table
 */
const bigQueryDataset = new gcp.bigquery.Dataset(BUCKET_NAME_PREFIX, {
  datasetId: BUCKET_NAME_PREFIX.replace(/-/g, "_"), // - is unsupported
}, {
  dependsOn: [enabledApisBigQuery],
});

export const bigQueryDatasetId = bigQueryDataset.datasetId;

// Define email notification channels
const notificationEmail = new gcp.monitoring.NotificationChannel("email", {
  type: "email",
  labels: {
    email_address: pulumiConfig.requireSecret("emailAddress"),
  },
});

// Iterate over each config file and publish the required resources
const configFiles: string[] = getSubgraphConfigFiles();
configFiles.forEach(configFile => {
  const subgraphConfig = getSubgraphConfig(configFile);
  const subgraphGeneratedFiles = `function/generated/${subgraphConfig.getDirectory()}`;

  const FUNCTION_PREFIX = subgraphConfig.getUniqueName();
  const FUNCTION_NAME = `${FUNCTION_PREFIX}-${pulumi.getStack()}`;
  console.log(`Processing subgraph object ${FUNCTION_PREFIX}`);

  /**
   * Function asset storage
   */
  // Create a GCS bucket to store the assets
  const functionBucket = new gcp.storage.Bucket(
    `${FUNCTION_PREFIX.toLowerCase()}-assets`,
    {
      location: "us-central1",
    },
    {
      dependsOn: [enabledApisStorage],
    },
  );

  // Archive the function code in the bucket
  const functionBucketObject = new gcp.storage.BucketObject(
    "function-code",
    {
      bucket: functionBucket.name,
      source: new pulumi.asset.AssetArchive({
        ".": new pulumi.asset.FileArchive("./function"),
      }),
    },
    {
      dependsOn: [functionBucket],
    },
  );

  /**
   * PubSub topic
   */
  const pubSubTopic = new gcp.pubsub.Topic(FUNCTION_NAME, {}, {
    dependsOn: [enabledApisPubSub],
  });
  module.exports[`${FUNCTION_PREFIX}-pubSubTopicName`] = pubSubTopic.name;
  module.exports[`${FUNCTION_PREFIX}-pubSubTopicId`] = pubSubTopic.id;

  /**
   * Create a subscription to the PubSub topic defined above. This is so that the function can track up to which date it has cached, and can continue from there.
   *
   * This is configured as a pull subscription, as the Cloud Function will check these messages upon its normally-scheduled run.
   * Why not push? If there is any error (e.g. a timeout), it tends to create an ever-increasing number of messages,
   * which spawn functions.
   */
  const expirationSeconds = 24 * 60 * 60;
  const pubSubSubscription = new gcp.pubsub.Subscription(FUNCTION_NAME, {
    topic: pubSubTopic.name,
    retainAckedMessages: false,
    expirationPolicy: { ttl: `${expirationSeconds}s` },
    messageRetentionDuration: `${expirationSeconds}s`,
  }, {
    dependsOn: [pubSubTopic],
  });

  module.exports[`${FUNCTION_PREFIX}-pubSubSubscriptionName`] = pubSubSubscription.name;

  // Grab the JSON schema
  const jsonSchemaString = readFileSync(
    `${subgraphGeneratedFiles}/${subgraphConfig.object}.jsonschema`,
  ).toString("utf-8");

  /**
   * Execution: Google Cloud Functions
   */
  const functionTimeoutSeconds = 540;
  const tokenHolderFunction = new gcp.cloudfunctions.Function(FUNCTION_NAME, {
    sourceArchiveBucket: functionBucket.name,
    sourceArchiveObject: functionBucketObject.name,
    triggerHttp: true,
    runtime: "nodejs18",
    entryPoint: "run",
    availableMemoryMb: 1024,
    timeout: functionTimeoutSeconds,
    environmentVariables: {
      SUBGRAPH_URL: subgraphConfig.getUrl(),
      SUBGRAPH_OBJECT: subgraphConfig.object,
      SUBGRAPH_DATE_FIELD: subgraphConfig.dateField,
      JSON_SCHEMA_STRING: jsonSchemaString,
      STORAGE_PREFIX: subgraphConfig.getDirectory(),
      BUCKET_NAME: storageBucketName,
      PUBSUB_TOPIC: pubSubTopic.name,
      FUNCTION_TIMEOUT_SECONDS: functionTimeoutSeconds,
      PUBSUB_SUBSCRIPTION_ID: pubSubSubscription.id,
      FINAL_DATE_OVERRIDE: pulumiConfig.get("finalDate"),
      GRAPH_PROTOCOL_API_KEY: pulumiConfig.requireSecret("graphProtocolApiKey"),
    },
  }, {
    dependsOn: [functionBucketObject, storageBucket, pubSubTopic, pubSubSubscription, enabledApisCloudFunctions, enabledApisCloudBuild],
  });

  module.exports[`${FUNCTION_PREFIX}-functionUrl`] = tokenHolderFunction.httpsTriggerUrl;
  module.exports[`${FUNCTION_PREFIX}-functionName`] = tokenHolderFunction.name;
  module.exports[`${FUNCTION_PREFIX}-storagePrefix`] = subgraphConfig.getDirectory();
  module.exports[`${FUNCTION_PREFIX}-bucketName`] = storageBucketName;

  /**
   * Scheduling: Cloud Scheduler
   */
  const schedulerJob = new gcp.cloudscheduler.Job(FUNCTION_NAME, {
    schedule: "0 * * * *", // Start of every hour
    timeZone: "UTC",
    httpTarget: {
      httpMethod: "GET",
      uri: tokenHolderFunction.httpsTriggerUrl,
      oidcToken: {
        serviceAccountEmail: tokenHolderFunction.serviceAccountEmail,
      },
    },
  }, {
    dependsOn: [tokenHolderFunction, enabledApisCloudScheduler],
  });

  // Allow Cloud Scheduler to invoke the Cloud Function
  new gcp.cloudfunctions.FunctionIamMember(
    "function-invoker",
    {
      project: tokenHolderFunction.project,
      region: tokenHolderFunction.region,
      cloudFunction: tokenHolderFunction.name,
      role: "roles/cloudfunctions.invoker",
      member: pulumi.interpolate`serviceAccount:${gcp.config.project}@appspot.gserviceaccount.com`,
    },
    {
      dependsOn: [tokenHolderFunction],
    },
  );

  module.exports[`${FUNCTION_PREFIX}-schedulerJobName`] = schedulerJob.name;

  /**
   * Create a dummy file in the storage bucket.
   *
   * We do this, otherwise the Hive partitioning will complain of no files being present.
   */
  const bigQueryDummyObjectName = `${subgraphConfig.getDirectory()}/dt=2021-01-01/dummy.jsonl`;
  const bigQueryDummyObject = new gcp.storage.BucketObject(bigQueryDummyObjectName, {
    bucket: storageBucketName,
    content: "{}", // Empty file
    name: bigQueryDummyObjectName,
  }, {
    dependsOn: [storageBucket],
  });
  module.exports[`${FUNCTION_PREFIX}-bigQueryDummyObjectName`] = bigQueryDummyObjectName;

  // storageBucketUrl is not known until deploy-time, so we use a pulumi-provided function to utilise it
  // Source: https://www.pulumi.com/docs/intro/concepts/inputs-outputs/#apply
  const bigQuerySourceUriPrefix = storageBucketUrl.apply(url => `${url}/${subgraphConfig.getDirectory()}/`);
  const bigQuerySourceUri = storageBucketUrl.apply(url => `${url}/${subgraphConfig.getDirectory()}/*`);
  module.exports[`${FUNCTION_PREFIX}-bigQuerySourceUri`] = bigQuerySourceUri;

  // For the moment, we generate a BigQuery schema file and store it locally
  const bigQuerySchemaJson = readFileSync(
    `${subgraphGeneratedFiles}/${subgraphConfig.object}_schema.json`,
  ).toString("utf-8");

  const bigQueryTable = new gcp.bigquery.Table(
    FUNCTION_PREFIX,
    {
      datasetId: bigQueryDataset.datasetId,
      tableId: FUNCTION_PREFIX,
      deletionProtection: false,
      externalDataConfiguration: {
        sourceFormat: "NEWLINE_DELIMITED_JSON",
        sourceUris: [bigQuerySourceUri],
        hivePartitioningOptions: {
          mode: "AUTO",
          sourceUriPrefix: bigQuerySourceUriPrefix,
        },
        autodetect: false,
        schema: bigQuerySchemaJson,
      },
    },
    { dependsOn: [bigQueryDummyObject, bigQueryDataset, storageBucket, enabledApisBigQuery] },
  );

  module.exports[`${FUNCTION_PREFIX}-bigQueryTableId`] = bigQueryTable.tableId;

  /**
   * Create Alert Policies
   */
  // Alert when functions crash
  const ALERT_POLICY_FUNCTION_ERROR = `${FUNCTION_NAME}-function-error`;
  const ALERT_POLICY_FUNCTION_ERROR_WINDOW_SECONDS = 15 * 60;
  new gcp.monitoring.AlertPolicy(ALERT_POLICY_FUNCTION_ERROR, {
    displayName: ALERT_POLICY_FUNCTION_ERROR,
    conditions: [
      {
        displayName: "Function Status Not OK",
        conditionThreshold: {
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${tokenHolderFunction.name}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count" AND metric.labels.status != "ok"`,
          aggregations: [
            {
              alignmentPeriod: `${ALERT_POLICY_FUNCTION_ERROR_WINDOW_SECONDS}s`,
              crossSeriesReducer: "REDUCE_NONE",
              perSeriesAligner: "ALIGN_SUM",
            },
          ],
          comparison: "COMPARISON_GT",
          duration: "0s",
          trigger: {
            count: 1,
          },
        },
      },
    ],
    alertStrategy: {
      autoClose: "604800s",
    },
    combiner: "OR",
    enabled: true,
    notificationChannels: [notificationEmail.id],
  }, {
    dependsOn: [tokenHolderFunction, notificationEmail],
  });

  // Alert when there are more executions than expected (1 every hour)
  const ALERT_POLICY_FUNCTION_EXECUTIONS = `${FUNCTION_NAME}-function-executions`;
  const ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS = 15 * 60;
  new gcp.monitoring.AlertPolicy(ALERT_POLICY_FUNCTION_EXECUTIONS, {
    displayName: ALERT_POLICY_FUNCTION_EXECUTIONS,
    conditions: [
      {
        displayName: `Function Executions > 1 / ${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS / 60} minutes`,
        conditionThreshold: {
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${tokenHolderFunction.name}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count"`,
          aggregations: [
            {
              alignmentPeriod: `${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s`,
              crossSeriesReducer: "REDUCE_NONE",
              perSeriesAligner: "ALIGN_SUM",
            },
          ],
          comparison: "COMPARISON_GT",
          duration: "0s",
          trigger: {
            count: 1,
          },
          thresholdValue: 1,
        },
      },
    ],
    alertStrategy: {
      autoClose: "604800s",
    },
    combiner: "OR",
    enabled: true,
    notificationChannels: [notificationEmail.id],
  }, {
    dependsOn: [tokenHolderFunction, notificationEmail],
  });

  // Alert when the GCS bucket network activity is greater than expected
  const ALERT_POLICY_GCS_NETWORK = `${FUNCTION_NAME}-gcs-activity`;
  const ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS = 15 * 60;
  const NETWORK_THRESHOLD_BYTES = 100000000;
  new gcp.monitoring.AlertPolicy(ALERT_POLICY_GCS_NETWORK, {
    displayName: ALERT_POLICY_GCS_NETWORK,
    conditions: [
      {
        displayName: `GCS Bucket Received > 100 MB / ${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS / 60} min`,
        conditionThreshold: {
          filter: pulumi.interpolate`resource.type = "gcs_bucket" AND resource.labels.bucket_name = "${storageBucketName}" AND metric.type = "storage.googleapis.com/network/received_bytes_count"`,
          aggregations: [
            {
              alignmentPeriod: `${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS}s`,
              crossSeriesReducer: "REDUCE_NONE",
              perSeriesAligner: "ALIGN_SUM",
            },
          ],
          comparison: "COMPARISON_GT",
          duration: "0s",
          trigger: {
            count: 1,
          },
          thresholdValue: NETWORK_THRESHOLD_BYTES,
        },
      },
      {
        displayName: `GCS Bucket Sent > 100 MB / ${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS / 60} min`,
        conditionThreshold: {
          filter: pulumi.interpolate`resource.type = "gcs_bucket" AND resource.labels.bucket_name = "${storageBucketName}" AND metric.type = "storage.googleapis.com/network/sent_bytes_count"`,
          aggregations: [
            {
              alignmentPeriod: `${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS}s`,
              crossSeriesReducer: "REDUCE_NONE",
              perSeriesAligner: "ALIGN_SUM",
            },
          ],
          comparison: "COMPARISON_GT",
          duration: "0s",
          trigger: {
            count: 1,
          },
          thresholdValue: NETWORK_THRESHOLD_BYTES,
        },
      },
    ],
    alertStrategy: {
      autoClose: "604800s",
    },
    combiner: "OR",
    enabled: true,
    notificationChannels: [notificationEmail.id],
  }, {
    dependsOn: [storageBucket, notificationEmail],
  });

  /**
   * Create a dashboard for monitoring activity
   */
  const DASHBOARD_NAME = `${FUNCTION_NAME}`;
  new gcp.monitoring.Dashboard(
    DASHBOARD_NAME,
    {
      dashboardJson: pulumi.interpolate`
      {
        "category": "CUSTOM",
        "displayName": "${DASHBOARD_NAME}",
        "mosaicLayout": {
          "columns": 12,
          "tiles": [
            {
              "height": 4,
              "widget": {
                "title": "Function Executions per ${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${ALERT_POLICY_FUNCTION_EXECUTIONS_WINDOW_SECONDS}s",
                            "crossSeriesReducer": "REDUCE_SUM",
                            "groupByFields": [
                              "metric.label.status"
                            ],
                            "perSeriesAligner": "ALIGN_SUM"
                          },
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${
                            tokenHolderFunction.name
                          }\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
                        }
                      }
                    }
                  ],
                  "thresholds": [],
                  "timeshiftDuration": "0s",
                  "yAxis": {
                    "label": "y1Axis",
                    "scale": "LINEAR"
                  }
                }
              },
              "width": 6,
              "xPos": 0,
              "yPos": 0
            },
            {
              "height": 4,
              "widget": {
                "title": "GCS Bucket Received Bytes per ${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS}s",
                            "crossSeriesReducer": "REDUCE_NONE",
                            "perSeriesAligner": "ALIGN_SUM"
                          },
                          "filter": "resource.type=\\"gcs_bucket\\" resource.label.bucket_name=\\"${storageBucketName}\\" metric.type=\\"storage.googleapis.com/network/received_bytes_count\\""
                        }
                      }
                    }
                  ],
                  "thresholds": [],
                  "timeshiftDuration": "0s",
                  "yAxis": {
                    "label": "y1Axis",
                    "scale": "LINEAR"
                  }
                }
              },
              "width": 6,
              "xPos": 6,
              "yPos": 0
            },
            {
              "height": 4,
              "widget": {
                "title": "GCS Bucket Sent Bytes per ${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS / 60} minutes",
                "xyChart": {
                  "chartOptions": {
                    "mode": "COLOR"
                  },
                  "dataSets": [
                    {
                      "minAlignmentPeriod": "${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS}s",
                      "plotType": "STACKED_AREA",
                      "targetAxis": "Y1",
                      "timeSeriesQuery": {
                        "apiSource": "DEFAULT_CLOUD",
                        "timeSeriesFilter": {
                          "aggregation": {
                            "alignmentPeriod": "${ALERT_POLICY_GCS_NETWORK_WINDOW_SECONDS}s",
                            "crossSeriesReducer": "REDUCE_NONE",
                            "perSeriesAligner": "ALIGN_SUM"
                          },
                          "filter": "resource.type=\\"gcs_bucket\\" resource.label.bucket_name=\\"${storageBucketName}\\" metric.type=\\"storage.googleapis.com/network/sent_bytes_count\\""
                        }
                      }
                    }
                  ],
                  "thresholds": [],
                  "timeshiftDuration": "0s",
                  "yAxis": {
                    "label": "y1Axis",
                    "scale": "LINEAR"
                  }
                }
              },
              "width": 6,
              "xPos": 6,
              "yPos": 4
            }
          ]
        }
      }`,
    },
    { dependsOn: [storageBucket, tokenHolderFunction] },
  );
  module.exports[`${FUNCTION_PREFIX}-dashboardName`] = DASHBOARD_NAME;
});
