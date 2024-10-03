import { Client } from "@urql/core";
import $RefParser = require("@apidevtools/json-schema-ref-parser");

import { IShouldTerminate } from "./constants";
import { addDays } from "./helpers/date";
import { logger } from "./helpers/logging";
import { getLatestRecordsDate, writeRecords } from "./helpers/recordFs";
import { getGraphQLRecords } from "./subgraph";

export const getRecordsFetchStartDate = async (storagePrefix: string, bucketName: string): Promise<Date | null> => {
  const latestRecordsDate: Date | null = await getLatestRecordsDate(bucketName, storagePrefix);
  if (!latestRecordsDate) {
    logger.info(`No records found in ${storagePrefix}`);
    return null;
  }

  // Shift to midnight
  logger.info(`Latest records date: ${latestRecordsDate}`);
  return addDays(latestRecordsDate, 0, true);
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
  schema: $RefParser.JSONSchema,
  object: string,
  dateField: string,
  storagePrefix: string,
  bucketName: string,
  startDate: Date,
  finalDate: Date,
  isTimestampInSeconds: boolean,
  shouldTerminate: IShouldTerminate,
): Promise<Date> => {
  logger.info(`\n\nFetching records`);
  const timeDelta: number = 24 * 60 * 60 * 1000; // 1 day
  let currentDate: Date = startDate;

  // We loop over each day, fetch records and write those to disk
  while (currentDate < finalDate) {
    const records: any[] = await getGraphQLRecords(
      client,
      schema,
      object,
      dateField,
      currentDate,
      isTimestampInSeconds,
    );

    // Write to file
    await writeRecords(storagePrefix, bucketName, records, currentDate);

    // Check the execution time remaining and exit
    if (shouldTerminate()) {
      break;
    }

    // Increment for the next loop
    currentDate = new Date(currentDate.getTime() + timeDelta);
  }

  logger.info(`Fetching complete`);
  return currentDate;
};
