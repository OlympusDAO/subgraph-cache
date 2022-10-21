import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import { handler } from "./src";

const GCP_REGION = "us-central1";
const BUCKET_NAME = `olympusdao-subgraph-cache-${pulumi.getStack()}`;

/**
 * Define required resources
 */

// Create a bucket to store the cached results
const storageBucket = new gcp.storage.Bucket(BUCKET_NAME, {
    location: GCP_REGION,
    uniformBucketLevelAccess: true,
    versioning: { enabled: false },
});

// Export the DNS name of the bucket
export const storageBucketName = storageBucket.url;

// Create a function
const tokenHolderFunction = new gcp.cloudfunctions.HttpCallbackFunction("token-holders", {
    runtime: "nodejs14",
    region: GCP_REGION,
    callback: (_req: Express.Request, res: Express.Response) => {
        handler();
    },
});

export const functionUrl = tokenHolderFunction.httpsTriggerUrl;
