import { createClient } from "@urql/core";
import fetch from "cross-fetch";

import { getFinalDate, getLatestFetchedRecordsDate, getRecords } from "./records";
import { getEarliestTransactionDateStart } from "./subgraph";

const SUBGRAPH_URL = "https://api.studio.thegraph.com/query/28103/token-holders/0.0.40";

export type HandlerResult = {
  status: number;
  message: string;
};

export const handler = async (functionName: string, bucketName: string, finalDateOverride?: string): Promise<void> => {
  console.log(`Bucket name: ${bucketName}`);
  const client = createClient({
    url: SUBGRAPH_URL,
    fetch,
  });

  const earliestDate: Date = await getEarliestTransactionDateStart(client);
  const finalDate: Date = finalDateOverride ? new Date(finalDateOverride) : await getFinalDate(client);
  const transactionsDate: Date = await getLatestFetchedRecordsDate(functionName, bucketName, earliestDate, finalDate);
  console.log(`Subgraph start date is ${earliestDate.toISOString()}`);
  console.log(`Subgraph final date is ${finalDate.toISOString()}`);
  console.log(`Transactions will be fetched from ${transactionsDate.toISOString()}`);

  await getRecords(client, functionName, bucketName, transactionsDate, finalDate);
};
