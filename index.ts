import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { readFileSync } from "fs";

import { GENERATED_DIR } from "./src/constants";
import { getSubgraphConfig, getSubgraphConfigFiles, getSubgraphUrl } from "./src/helpers/subgraphConfig";
import { handler } from "./src/index";

const BUCKET_NAME_PREFIX = `olympusdao-subgraph-cache-${pulumi.getStack()}`;

const pulumiConfig = new pulumi.Config();

/**
 * Record storage: GCS bucket
 */
// Create a bucket to store the cached results
const storageBucket = new gcp.storage.Bucket(BUCKET_NAME_PREFIX, {
  location: "US", // Get this from the provider instead?
  uniformBucketLevelAccess: true,
  versioning: { enabled: false },
});

// Export the DNS name of the bucket
export const storageBucketUrl = storageBucket.url;
export const storageBucketName = storageBucket.name;

/**
 * Create a BigQuery external table
 */
const bigQueryDataset = new gcp.bigquery.Dataset(BUCKET_NAME_PREFIX, {
  datasetId: BUCKET_NAME_PREFIX.replace(/-/g, "_"), // - is unsupported
});

export const bigQueryDatasetId = bigQueryDataset.datasetId;

// Iterate over each config file and publish the required resources
const configFiles: string[] = getSubgraphConfigFiles();
configFiles.forEach(configFile => {
  const subgraphConfig = getSubgraphConfig(configFile);
  const FUNCTION_PREFIX = subgraphConfig.uniqueName || subgraphConfig.object;
  const FUNCTION_NAME = `${FUNCTION_PREFIX}-${pulumi.getStack()}`;
  console.log(`Processing subgraph object ${FUNCTION_PREFIX}`);

  /**
   * PubSub topic
   */
  const pubSubTopic = new gcp.pubsub.Topic(FUNCTION_NAME);
  module.exports[`${FUNCTION_PREFIX}-pubSubTopicName`] = pubSubTopic.name;

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
  });

  module.exports[`${FUNCTION_PREFIX}-pubSubSubscriptionName`] = pubSubSubscription.name;

  // Grab the JSON schema
  const jsonSchemaString = readFileSync(`${GENERATED_DIR}/${subgraphConfig.object}.jsonschema`).toString("utf-8");

  /**
   * Execution: Google Cloud Functions
   */
  const functionTimeoutSeconds = 540;
  const tokenHolderFunction = new gcp.cloudfunctions.HttpCallbackFunction(FUNCTION_NAME, {
    runtime: "nodejs14",
    timeout: functionTimeoutSeconds,
    availableMemoryMb: 1024,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    callback: async (req, res) => {
      console.log("Received callback. Initiating handler.");
      await handler(
        getSubgraphUrl(subgraphConfig),
        subgraphConfig.object,
        subgraphConfig.dateField,
        jsonSchemaString,
        FUNCTION_PREFIX,
        storageBucketName.get(),
        pubSubTopic.name.get(),
        functionTimeoutSeconds,
        pubSubSubscription.id.get(),
        pulumiConfig.get("finalDate"),
      );
      // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (<any>res).send("OK").end();
    },
  });

  module.exports[`${FUNCTION_PREFIX}-functionUrl`] = tokenHolderFunction.httpsTriggerUrl;
  module.exports[`${FUNCTION_PREFIX}-functionName`] = tokenHolderFunction.function.name;
  module.exports[`${FUNCTION_PREFIX}-bucketPrefix`] = subgraphConfig.object;

  /**
   * Scheduling: Cloud Scheduler
   */
  const schedulerJob = new gcp.cloudscheduler.Job(FUNCTION_NAME, {
    schedule: "0 * * * *", // Start of every hour
    timeZone: "UTC",
    httpTarget: {
      httpMethod: "GET",
      uri: tokenHolderFunction.httpsTriggerUrl,
    },
  });

  module.exports[`${FUNCTION_PREFIX}-schedulerJobName`] = schedulerJob.name;

  /**
   * Create a dummy file in the storage bucket.
   *
   * We do this, otherwise the Hive partitioning will complain of no files being present.
   */
  const dummyObjectName = `${FUNCTION_PREFIX}/dt=2021-01-01/dummy.jsonl`;
  const dummyObject = new gcp.storage.BucketObject(dummyObjectName, {
    bucket: storageBucketName,
    content: "{}", // Empty file
    name: dummyObjectName,
  });

  // storageBucketUrl is not known until deploy-time, so we use a pulumi-provided function to utilise it
  // Source: https://www.pulumi.com/docs/intro/concepts/inputs-outputs/#apply
  const sourceUriPrefix = storageBucketUrl.apply(url => `${url}/${FUNCTION_PREFIX}/`);
  const sourceUri = storageBucketUrl.apply(url => `${url}/${FUNCTION_PREFIX}/*`);

  // For the moment, we generate a BigQuery schema file and store it locally
  const bigQuerySchemaJson = readFileSync(`${GENERATED_DIR}/${subgraphConfig.object}_schema.json`).toString("utf-8");

  const bigQueryTable = new gcp.bigquery.Table(
    FUNCTION_PREFIX,
    {
      datasetId: bigQueryDataset.datasetId,
      tableId: FUNCTION_PREFIX,
      deletionProtection: false,
      externalDataConfiguration: {
        sourceFormat: "NEWLINE_DELIMITED_JSON",
        sourceUris: [sourceUri],
        hivePartitioningOptions: {
          mode: "AUTO",
          sourceUriPrefix: sourceUriPrefix,
        },
        autodetect: false,
        schema: bigQuerySchemaJson,
      },
    },
    { dependsOn: dummyObject },
  );

  module.exports[`${FUNCTION_PREFIX}-bigQueryTableId`] = bigQueryTable.tableId;

  /**
   * Create Alert Policies
   */
  const NOTIFICATION_CHANNEL_EMAIL_JEM = "projects/utility-descent-365911/notificationChannels/11383785782274723218";
  const NOTIFICATION_CHANNEL_DISCORD = "projects/utility-descent-365911/notificationChannels/13547536167280065674";

  // Alert when functions crash
  const ALERT_POLICY_FUNCTION_ERROR = `${FUNCTION_NAME}-function-error`;
  const ALERT_POLICY_FUNCTION_ERROR_WINDOW_SECONDS = 15 * 60;
  new gcp.monitoring.AlertPolicy(ALERT_POLICY_FUNCTION_ERROR, {
    displayName: ALERT_POLICY_FUNCTION_ERROR,
    conditions: [
      {
        displayName: "Function Status Not OK",
        conditionThreshold: {
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${tokenHolderFunction.function.name}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count" AND metric.labels.status != "ok"`,
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
    notificationChannels: [NOTIFICATION_CHANNEL_EMAIL_JEM, NOTIFICATION_CHANNEL_DISCORD],
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
          filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${tokenHolderFunction.function.name}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count"`,
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
    notificationChannels: [NOTIFICATION_CHANNEL_EMAIL_JEM, NOTIFICATION_CHANNEL_DISCORD],
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
    notificationChannels: [NOTIFICATION_CHANNEL_EMAIL_JEM, NOTIFICATION_CHANNEL_DISCORD],
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
                            tokenHolderFunction.function.name
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
