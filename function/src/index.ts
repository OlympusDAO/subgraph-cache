import { createClient } from "@urql/core";
import fetch from "cross-fetch";
import * as express from "express";
import { readFileSync } from "fs";

import { GENERATED_DIR } from "./constants";
import { addDays, getISO8601DateString } from "./helpers/date";
import { getEnv, getEnvNullable } from "./helpers/env";
import { logger } from "./helpers/logging";
import { getLatestFinishDate, sendPubSubMessage } from "./helpers/pubsub";
import { getRecords, getRecordsFetchStartDate } from "./records";
import { getEarliestTransactionDate, getLatestTransactionDate } from "./subgraph";
import { SubgraphConfig } from "./types/subgraphConfig";

export const run = async (req: express.Request, res: express.Response) => {
  logger.info("Received callback. Initiating handler.");

  await handler(
    getEnv("SUBGRAPH_URL"),
    getEnv("SUBGRAPH_OBJECT"),
    getEnv("SUBGRAPH_DATE_FIELD"),
    getEnv("JSON_SCHEMA_STRING"),
    getEnv("STORAGE_PREFIX"),
    getEnv("BUCKET_NAME"),
    getEnv("PUBSUB_TOPIC"),
    parseInt(getEnv("FUNCTION_TIMEOUT_SECONDS")),
    getEnv("PUBSUB_SUBSCRIPTION_ID"),
    getEnvNullable("FINAL_DATE_OVERRIDE"),
  );

  // It's not documented in the Pulumi documentation, but the function will timeout if `.end()` is missing.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res.status(200).send("OK");
};

export const handler = async (
  subgraphUrl: string,
  subgraphObject: string,
  subgraphDateField: string,
  jsonSchemaString: string,
  storagePrefix: string,
  bucketName: string,
  pubSubTopic: string,
  functionTimeoutSeconds: number,
  pubSubSubscriptionId: string,
  finalDateOverride?: string,
): Promise<void> => {
  const initialTimestamp = new Date().getTime();
  const shouldTerminate = (): boolean => {
    const BUFFER_MS = 10000;
    const currentTimestamp = new Date().getTime();

    // If the current time is > initialTimestamp + functionTimeoutSeconds*1000 - buffer, exit
    if (currentTimestamp > initialTimestamp + functionTimeoutSeconds * 1000 - BUFFER_MS) {
      logger.info(`Current timestamp ${currentTimestamp} is outside of buffer. Exiting.`);
      return true;
    }

    return false;
  };

  const jsonSchema = JSON.parse(jsonSchemaString);

  const client = createClient({
    url: subgraphUrl,
    fetch,
  });

  // Get the earliest date in the subgraph
  const [subgraphEarliestDateRaw, isTimestampInSeconds] = await getEarliestTransactionDate(
    client,
    jsonSchema,
    subgraphObject,
    subgraphDateField,
  );

  const subgraphEarliestDate: Date = addDays(subgraphEarliestDateRaw, 0, true); // Start of the same day
  logger.info(`Subgraph earliest date: ${getISO8601DateString(subgraphEarliestDate)}`);
  // Final date in the subgraph
  const subgraphFinalDate: Date = finalDateOverride
    ? new Date(finalDateOverride)
    : addDays(await getLatestTransactionDate(client, jsonSchema, subgraphObject, subgraphDateField), 1, true); // Midnight of the next day
  logger.info(`Subgraph final date: ${getISO8601DateString(subgraphFinalDate)}`);
  // Date up to which records have been cached
  const recordsFetchedUpToDate: Date | null = await getRecordsFetchStartDate(storagePrefix, bucketName);
  logger.info(
    `Records fetched up to date: ${recordsFetchedUpToDate ? getISO8601DateString(recordsFetchedUpToDate) : "null"}`,
  );

  const getFetchStartDate = async (): Promise<Date> => {
    // Check for PubSub messages
    const pubSubFinishDate: Date | null = await getLatestFinishDate(pubSubSubscriptionId);

    /**
     * If there is a finishDate in the PubSub messages, then we proceed from there
     * This is because there may have been a refresh of records
     *
     * We skip this if:
     * - Records have not been fetched up to the pubSubFinishDate
     * - No records exist
     */
    if (pubSubFinishDate && recordsFetchedUpToDate && recordsFetchedUpToDate >= pubSubFinishDate) {
      logger.info(
        `getFetchStartDate: Using finish date from PubSub message queue: ${getISO8601DateString(pubSubFinishDate)}`,
      );
      return pubSubFinishDate;
    }

    // If records exist, continue from where we left off
    if (recordsFetchedUpToDate) {
      logger.info(
        `getFetchStartDate: Using latest cached records date: ${getISO8601DateString(recordsFetchedUpToDate)}`,
      );
      return recordsFetchedUpToDate;
    }

    // Otherwise proceed from the start of the subgraph
    logger.info(`getFetchStartDate: Using subgraph start date: ${getISO8601DateString(subgraphEarliestDate)}`);
    return subgraphEarliestDate;
  };

  // Move one day prior to the start date, to catch any missing records
  const startDate = addDays(await getFetchStartDate(), -1, true);
  logger.info(`Transactions will be fetched from ${getISO8601DateString(startDate)}`);

  // Get and write records
  const fetchedUpTo: Date = await getRecords(
    client,
    jsonSchema,
    subgraphObject,
    subgraphDateField,
    storagePrefix,
    bucketName,
    startDate,
    subgraphFinalDate,
    isTimestampInSeconds,
    shouldTerminate,
  );

  /**
   * Publish the start and finish dates for what was fetched.
   */
  await sendPubSubMessage(pubSubTopic, startDate, fetchedUpTo);
};

// Run locally using `yarn execute`
if (require.main === module) {
  if (process.argv.length !== 3) {
    throw new Error(`Expected 1 argument, but received: ${process.argv.slice(2)}`);
  }

  const subgraphConfigFile = process.argv[2];
  const subgraphConfig = SubgraphConfig.fromJSON(JSON.parse(readFileSync(subgraphConfigFile).toString("utf-8")));
  const jsonSchemaString = readFileSync(
    `${GENERATED_DIR}/${subgraphConfig.getDirectory()}/${subgraphConfig.object}.jsonschema`,
  ).toString("utf-8");

  // The random alphanumeric strings will need to be changed if there is a re-deployment
  handler(
    subgraphConfig.getUrl(),
    subgraphConfig.object,
    subgraphConfig.dateField,
    jsonSchemaString,
    subgraphConfig.getDirectory(),
    "olympusdao-subgraph-cache-dev-47c613e",
    `projects/utility-descent-365911/topics/Treasury_Ethereum-TokenRecord-dev-52887b3`,
    60,
    `projects/utility-descent-365911/subscriptions/Treasury_Ethereum-TokenRecord-dev-b92e640`,
  );
}
