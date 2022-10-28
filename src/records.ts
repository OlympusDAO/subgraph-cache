import { Client } from "@urql/core";

import { IShouldTerminate } from "./constants";
import { TokenHolderTransaction } from "./graphql/generated";
import { getLatestRecordsDate, writeRecords } from "./helpers/recordFs";
import { getGraphQLRecords, getLatestTransactionDate } from "./subgraph";

export const getRecordsFetchStartDate = async (storagePrefix: string, bucketName: string): Promise<Date | null> => {
  const latestRecordsDate: Date | null = await getLatestRecordsDate(bucketName, storagePrefix);
  if (!latestRecordsDate) {
    return null;
  }

  // If a file exists, return one day earlier (in case we did not get all records from the day)
  const timeDelta = 24 * 60 * 60 * 1000; // 1 day
  return new Date(latestRecordsDate.getTime() - timeDelta);
};

/**
 * Returns the date up to which the subgraph data exists.
 *
 * As the subgraph query is performed up to a certain date (< 2022-10-18T00:00:00Z),
 * the Date returned by this function will be one day after the timestamp of the latest record.
 */
export const getFinalDate = async (subgraphClient: Client): Promise<Date> => {
  // Timestamp of the latest transaction record
  const latestDate: Date = await getLatestTransactionDate(subgraphClient);

  // We transform this into midnight of the same day/start of the next day
  const finalDate = new Date(latestDate.getTime() + 24 * 60 * 60 * 1000);
  finalDate.setUTCHours(0, 0, 0, 0);
  return finalDate;
};

/**
 * Fetches transaction records and writes them.
 *
 * @param client GraphQL client
 * @param startDate The date from which to fetch records
 * @param finalDate The date up to which records will be fetched
 */
export const getRecords = async (
  client: Client,
  storagePrefix: string,
  bucketName: string,
  startDate: Date,
  finalDate: Date,
  shouldTerminate: IShouldTerminate,
): Promise<Date> => {
  console.info(`\n\nFetching records`);
  const timeDelta: number = 24 * 60 * 60 * 1000; // 1 day
  let currentDate: Date = startDate;

  // We loop over each day, fetch records and write those to disk
  while (currentDate < finalDate) {
    const records: TokenHolderTransaction[] = await getGraphQLRecords(client, currentDate);

    // Write to file
    await writeRecords(storagePrefix, bucketName, records, currentDate);

    // Check the execution time remaining and exit
    if (shouldTerminate()) {
      break;
    }

    // Increment for the next loop
    currentDate = new Date(currentDate.getTime() + timeDelta);
  }

  console.info(`Fetching complete`);
  return currentDate;
};
