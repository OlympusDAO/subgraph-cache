import { createClient } from "@urql/core";
import fetch from "cross-fetch";

import { sendPubSubMessage } from "./helpers/pubsub";
import { getFinalDate, getLatestFetchedRecordsDate, getRecords } from "./records";
import { getEarliestTransactionDateStart } from "./subgraph";

const SUBGRAPH_URL = "https://api.studio.thegraph.com/query/28103/token-holders/0.0.40";

export const handler = async (
  storagePrefix: string,
  bucketName: string,
  pubSubTopic: string,
  functionTimeoutSeconds: number,
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

  const earliestDate: Date = await getEarliestTransactionDateStart(client);
  const finalDate: Date = finalDateOverride ? new Date(finalDateOverride) : await getFinalDate(client);
  const transactionsDate: Date = await getLatestFetchedRecordsDate(storagePrefix, bucketName, earliestDate, finalDate);
  console.log(`Subgraph start date is ${earliestDate.toISOString()}`);
  console.log(`Subgraph final date is ${finalDate.toISOString()}`);
  console.log(`Transactions will be fetched from ${transactionsDate.toISOString()}`);

  // Get and write records
  await getRecords(client, storagePrefix, bucketName, transactionsDate, finalDate, shouldTerminate);

  // Trigger a PubSub message for any subscribers
  await sendPubSubMessage(pubSubTopic, transactionsDate);
};
