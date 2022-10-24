import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

import { handler } from "./src/index";

const BUCKET_NAME_PREFIX = `olympusdao-subgraph-cache-${pulumi.getStack()}`;
const FUNCTION_PREFIX = `token-holders-transactions`;
const functionName = `${FUNCTION_PREFIX}-${pulumi.getStack()}`;

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
 * Execution: Google Cloud Functions
 */
// Create a function
const tokenHolderFunction = new gcp.cloudfunctions.HttpCallbackFunction(functionName, {
  runtime: "nodejs14",
  timeout: 540,
  availableMemoryMb: 1024,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  callback: async (req: Express.Request, res: Express.Response) => {
    console.log("Received callback. Initiating handler.");
    await handler(FUNCTION_PREFIX, storageBucket.name.get(), pulumiConfig.get("finalDate"));
  },
});

export const functionUrl = tokenHolderFunction.httpsTriggerUrl;

/**
 * Scheduling: Cloud Scheduler
 */
const schedulerJob = new gcp.cloudscheduler.Job(functionName, {
  schedule: "0 * * * *", // Start of every hour
  timeZone: "UTC",
  httpTarget: {
    httpMethod: "GET",
    uri: functionUrl,
  },
});

export const schedulerJobName = schedulerJob.name;

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

const bigQueryTable = new gcp.bigquery.Table(FUNCTION_PREFIX, {
  datasetId: bigQueryDatasetId,
  tableId: FUNCTION_PREFIX,
  externalDataConfiguration: {
    sourceFormat: "NEWLINE_DELIMITED_JSON",
    sourceUris: [sourceUri],
    hivePartitioningOptions: {
      mode: "AUTO",
      sourceUriPrefix: sourceUriPrefix,
    },
    autodetect: true,
  },
});

export const bigQueryTableId = bigQueryTable.tableId;
