import { Client } from "@urql/core";
import $RefParser = require("@apidevtools/json-schema-ref-parser");

import { getISO8601DateString } from "./helpers/date";
import { generateQuery, getObjectQueryName } from "./helpers/subgraphQuery";

/**
 * Fetches GraphQL records for the given range and page
 *
 * @param client
 * @param page
 * @param startDate
 * @param finishDate
 * @returns
 */
const fetchGraphQLRecords = async (
  client: Client,
  schema: $RefParser.JSONSchema,
  object: string,
  dateField: string,
  page: number,
  startDate: Date,
  finishDate: Date,
): Promise<any[]> => {
  console.debug(
    `Fetching records for object ${object}, date range ${startDate.toISOString()} - ${finishDate.toISOString()} and page ${page}`,
  );
  const RECORD_COUNT = 1000;
  const query = generateQuery(
    schema,
    object,
    RECORD_COUNT,
    page,
    dateField,
    "desc",
    startDate.toISOString(),
    finishDate.toISOString(),
  );
  const queryResults = await client.query(query, {}).toPromise();
  let data = queryResults.data;

  /**
   * Sometimes there is no data returned. In that case, re-fetch the query
   * and throw an error if the same issue happens again. Otherwise use the
   * new data.
   */
  if (!data) {
    const queryResultsRetry = await client.query(query, {}).toPromise();

    if (!queryResultsRetry.data) {
      throw new Error(
        `Did not receive results from GraphQL query for page ${page}, start date ${startDate.toISOString()}, finish date ${finishDate.toISOString()}. Error: ${
          queryResults.error
        }`,
      );
    }

    data = queryResultsRetry.data;
  }

  const normalisedObjectName = getObjectQueryName(object);
  const records = data[normalisedObjectName] as any[];
  console.debug(`Received ${records.length} records`);
  // If we haven't hit the page limit...
  if (records.length < RECORD_COUNT) {
    return records;
  }

  // Otherwise we recursively fetch the next page
  const nextRecords = await fetchGraphQLRecords(client, schema, object, dateField, page + 1, startDate, finishDate);
  return [...records, ...nextRecords];
};

/**
 * Returns the GraphQL records for the given day (UTC)
 *
 * @param client
 * @param date
 */
export const getGraphQLRecords = async (
  client: Client,
  schema: $RefParser.JSONSchema,
  object: string,
  dateField: string,
  date: Date,
): Promise<any[]> => {
  const timeDelta = 1 * 60 * 60 * 1000; // 1 hours for each loop

  // Ensure the starting date is at midnight
  let queryStartDate = new Date(date.getTime());
  queryStartDate.setUTCHours(0);
  console.info(`\n\n📆 Date: ${getISO8601DateString(queryStartDate)}`);

  // Ending date is the start of the next day
  const finalDate = new Date(queryStartDate.getTime());
  finalDate.setUTCHours(24);

  const records: any[] = [];
  while (queryStartDate < finalDate) {
    const queryFinishDate = new Date(queryStartDate.getTime() + timeDelta);

    const queryRecords = await fetchGraphQLRecords(
      client,
      schema,
      object,
      dateField,
      0,
      queryStartDate,
      queryFinishDate,
    );
    records.push(...queryRecords);

    // Increment for the next loop
    queryStartDate = queryFinishDate;
  }

  console.info(`✅ Total of ${records.length} records for date ${getISO8601DateString(date)}`);
  return records;
};

/**
 * Fetch the date of the latest transaction in the subgraph.
 *
 * @param client
 * @returns
 */
export const getLatestTransactionDate = async (
  client: Client,
  schema: $RefParser.JSONSchema,
  object: string,
  dateField: string,
): Promise<Date> => {
  const query = generateQuery(schema, object, 1, 0, dateField, "desc");
  const queryResults = await client.query(query, {}).toPromise();

  const normalisedObjectName = getObjectQueryName(object);
  if (!queryResults.data || queryResults.data[normalisedObjectName].length === 0) {
    throw new Error(`Did not receive results from GraphQL query for latest transaction`);
  }

  return new Date(queryResults.data[normalisedObjectName][0][dateField]);
};

/**
 * Fetch the date of the earliest transaction in the subgraph.
 *
 * @param client
 * @returns
 */
export const getEarliestTransactionDate = async (
  client: Client,
  schema: $RefParser.JSONSchema,
  object: string,
  dateField: string,
): Promise<Date> => {
  const query = generateQuery(schema, object, 1, 0, dateField, "asc");
  const queryResults = await client.query(query, {}).toPromise();

  const normalisedObjectName = getObjectQueryName(object);
  if (!queryResults.data || queryResults.data[normalisedObjectName].length === 0) {
    throw new Error(`Did not receive results from GraphQL query for earliest transaction`);
  }

  return new Date(queryResults.data[normalisedObjectName][0][dateField]);
};
