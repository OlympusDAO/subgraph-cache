import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

import { handler } from "./src/index";

const GCP_REGION = "us-central1";
const BUCKET_NAME_PREFIX = `olympusdao-subgraph-cache-${pulumi.getStack()}`;

/**
 * Define required resources
 */

// Create a bucket to store the cached results
const storageBucket = new gcp.storage.Bucket(BUCKET_NAME_PREFIX, {
  location: GCP_REGION,
  uniformBucketLevelAccess: true,
  versioning: { enabled: false },
});

// Export the DNS name of the bucket
export const storageBucketUrl = storageBucket.url;

// Create a function
const pulumiConfig = new pulumi.Config();

const tokenHolderFunction = new gcp.cloudfunctions.HttpCallbackFunction("token-holders", {
  runtime: "nodejs14",
  region: GCP_REGION,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  callback: async (req: Express.Request, res: Express.Response) => {
    await handler(storageBucket.name.get(), pulumiConfig.get("finalDate"));
  },
});

export const functionUrl = tokenHolderFunction.httpsTriggerUrl;

// TODO set up scheduling
