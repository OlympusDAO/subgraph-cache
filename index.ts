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
      storageBucket.name.get(),
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
  bucket: storageBucket.name,
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
 * Create an Alert Policy
 */
new gcp.monitoring.AlertPolicy(FUNCTION_NAME, {
  displayName: FUNCTION_NAME,
  conditions: [
    {
      displayName: "Function Status Not OK",
      conditionThreshold: {
        filter: `resource.type = "cloud_function" AND resource.labels.function_name = "${functionName}" AND metric.type = "cloudfunctions.googleapis.com/function/execution_count" AND metric.labels.status != "ok"`,
        aggregations: [
          {
            alignmentPeriod: "300s",
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
  notificationChannels: ["projects/utility-descent-365911/notificationChannels/13547536167280065674"], // Pre-defined, Discord webhook
});
