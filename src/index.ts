import { createClient } from "@urql/core";
import fetch from "cross-fetch";

import { getISO8601DateString } from "./helpers/date";
import { getLatestFinishDate, sendPubSubMessage } from "./helpers/pubsub";
import { getFinalDate, getRecords, getRecordsFetchStartDate } from "./records";
import { getEarliestTransactionDateStart } from "./subgraph";

const SUBGRAPH_URL = "https://api.studio.thegraph.com/query/28103/token-holders/0.0.40";

export const handler = async (
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

  console.log(`Bucket name: ${bucketName}`);
  const client = createClient({
    url: SUBGRAPH_URL,
    fetch,
  });

  // Get the earliest date in the subgraph
  const subgraphEarliestDate: Date = await getEarliestTransactionDateStart(client);
  // Final date in the subgraph
  const subgraphFinalDate: Date = finalDateOverride ? new Date(finalDateOverride) : await getFinalDate(client);
  // Date up to which records have been cached
  const recordsFetchedUpToDate: Date | null = await getRecordsFetchStartDate(storagePrefix, bucketName);

  const getFetchStartDate = async (): Promise<Date> => {
    // Check for PubSub messages
    const pubSubFinishDate: Date | null = await getLatestFinishDate(pubSubSubscriptionId);

    // If there is a finishDate in the PubSub messages, then we proceed from there
    // This is because there may have been a refresh of records
    if (pubSubFinishDate) {
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

  const startDate = await getFetchStartDate();
  console.log(`Transactions will be fetched from ${startDate.toISOString()}`);

  // Get and write records
  const fetchedUpTo: Date = await getRecords(
    client,
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

// Run locally using `yarn execute`. Inputs may need to be changed if re-deployments occur.
if (require.main === module) {
  handler(
    "token-holders-transactions",
    "olympusdao-subgraph-cache-dev-47c613e",
    "token-holders-transactions-dev-1b8d6c3",
    60,
    "projects/utility-descent-365911/subscriptions/token-holders-transactions-dev-a036652",
  );
}
