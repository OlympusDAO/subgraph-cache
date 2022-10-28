import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";
import { readFileSync } from "fs";

import { handler } from "./src/index";

const BUCKET_NAME_PREFIX = `olympusdao-subgraph-cache-${pulumi.getStack()}`;
const FUNCTION_PREFIX = `token-holders-transactions`;
const FUNCTION_NAME = `${FUNCTION_PREFIX}-${pulumi.getStack()}`;

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
 * PubSub topic
 */
const pubSubTopic = new gcp.pubsub.Topic(FUNCTION_NAME);

export const pubSubTopicName = pubSubTopic.name;

/**
 * Create a subscription to the PubSub topic defined above. This is so that the function can track up to which date it has cached, and can continue from there.
 *
 * This is configured as a pull subscription, as the Cloud Function will check these messages upon its normally-scheduled run.
 * Why not push? If there is any error (e.g. a timeout), it tends to create an ever-increasing number of messages,
 * which spawn functions.
 */
const expirationSeconds = 24 * 60 * 60;
const pubSubSubscription = new gcp.pubsub.Subscription(FUNCTION_NAME, {
  topic: pubSubTopicName,
  retainAckedMessages: false,
  expirationPolicy: { ttl: `${expirationSeconds}s` },
  messageRetentionDuration: `${expirationSeconds}s`,
});

export const pubSubSubscriptionName = pubSubSubscription.name;

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
      FUNCTION_PREFIX,
      storageBucketName.get(),
      pubSubTopicName.get(),
      functionTimeoutSeconds,
      pubSubSubscription.id.get(),
      pulumiConfig.get("finalDate"),
    );
    // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (<any>res).send("OK").end();
  },
});

export const functionUrl = tokenHolderFunction.httpsTriggerUrl;
export const functionName = tokenHolderFunction.function.name;

/**
 * Scheduling: Cloud Scheduler
 */
const schedulerJob = new gcp.cloudscheduler.Job(FUNCTION_NAME, {
  schedule: "0 * * * *", // Start of every hour
  timeZone: "UTC",
  httpTarget: {
    httpMethod: "GET",
    uri: functionUrl,
  },
});

export const schedulerJobName = schedulerJob.name;

/**
 * Create a dummy file in the storage bucket.
 *
 * We do this, otherwise the Hive partitioning will complain of no files being present.
 */
const dummyObject = new gcp.storage.BucketObject("dummy", {
  bucket: storageBucketName,
  content: "{}", // Empty file
  name: `${FUNCTION_PREFIX}/dt=2021-01-01/dummy.jsonl`,
});

/**
 * Create a BigQuery external table
 */
const bigQueryDataset = new gcp.bigquery.Dataset(BUCKET_NAME_PREFIX, {
  datasetId: BUCKET_NAME_PREFIX.replace(/-/g, "_"), // - is unsupported
});

export const bigQueryDatasetId = bigQueryDataset.datasetId;

// storageBucketUrl is not known until deploy-time, so we use a pulumi-provided function to utilise it
// Source: https://www.pulumi.com/docs/intro/concepts/inputs-outputs/#apply
const sourceUriPrefix = storageBucketUrl.apply(url => `${url}/${FUNCTION_PREFIX}/`);
const sourceUri = storageBucketUrl.apply(url => `${url}/${FUNCTION_PREFIX}/*`);

// For the moment, we generate a BigQuery schema file and store it locally
const bigQuerySchemaJson = readFileSync("bigquery_schema.json").toString("utf-8");

const bigQueryTable = new gcp.bigquery.Table(
  FUNCTION_PREFIX,
  {
    datasetId: bigQueryDatasetId,
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

export const bigQueryTableId = bigQueryTable.tableId;

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
        filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionName}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count" AND metric.labels.status != "ok"`,
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
        filter: pulumi.interpolate`resource.type = "cloud_function" AND resource.labels.function_name = "${functionName}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count"`,
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
                          "filter": "resource.type = \\"cloud_function\\" resource.labels.function_name = \\"${functionName}\\" metric.type = \\"cloudfunctions.googleapis.com/function/execution_count\\""
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
export const dashboardName = DASHBOARD_NAME;
