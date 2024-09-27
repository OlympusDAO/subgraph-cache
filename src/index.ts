import { createClient } from "@urql/core";
import fetch from "cross-fetch";
import { readFileSync } from "fs";

import { GENERATED_DIR } from "./constants";
import { addDays, getISO8601DateString } from "./helpers/date";
import { getLatestFinishDate, sendPubSubMessage } from "./helpers/pubsub";
import { getRecords, getRecordsFetchStartDate } from "./records";
import { getEarliestTransactionDate, getLatestTransactionDate } from "./subgraph";
import { SubgraphConfig } from "./types/subgraphConfig";

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
      console.log(`Current timestamp ${currentTimestamp} is outside of buffer. Exiting.`);
      return true;
    }

    return false;
  };

  const jsonSchema = JSON.parse(jsonSchemaString);

  console.log(`Bucket name: ${bucketName}`);
  const client = createClient({
    url: subgraphUrl,
    fetch,
  });

  // Get the earliest date in the subgraph
  const subgraphEarliestDate: Date = addDays(
    await getEarliestTransactionDate(client, jsonSchema, subgraphObject, subgraphDateField),
    0,
    true,
  ); // Start of the same day
  // Final date in the subgraph
  const subgraphFinalDate: Date = finalDateOverride
    ? new Date(finalDateOverride)
    : addDays(await getLatestTransactionDate(client, jsonSchema, subgraphObject, subgraphDateField), 1, true); // Midnight of the next day
  // Date up to which records have been cached
  const recordsFetchedUpToDate: Date | null = await getRecordsFetchStartDate(storagePrefix, bucketName);

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
      console.log(
        `getFetchStartDate: Using finish date from PubSub message queue: ${getISO8601DateString(pubSubFinishDate)}`,
      );
      return pubSubFinishDate;
    }

    // If records exist, continue from where we left off
    if (recordsFetchedUpToDate) {
      console.log(
        `getFetchStartDate: Using latest cached records date: ${getISO8601DateString(recordsFetchedUpToDate)}`,
      );
      return recordsFetchedUpToDate;
    }

    // Otherwise proceed from the start of the subgraph
    console.log(`getFetchStartDate: Using subgraph start date: ${getISO8601DateString(subgraphEarliestDate)}`);
    return subgraphEarliestDate;
  };

  // Move one day prior to the start date, to catch any missing records
  const startDate = addDays(await getFetchStartDate(), -1, true);
  console.log(`Transactions will be fetched from ${startDate.toISOString()}`);

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
    subgraphConfig.object,
    "olympusdao-subgraph-cache-dev-47c613e",
    `${subgraphConfig.object}-dev-d3a17c1`,
    60,
    `projects/utility-descent-365911/subscriptions/${subgraphConfig.object}-dev-ae9d6cb`,
  );
}
