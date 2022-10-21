import JSONL from "jsonl-parse-stringify";

import { TokenHolderTransaction } from "../graphql/generated";
import { fileExists, getFile, putFile } from "./bucket";
import { getISO8601DateString } from "./date";

/**
 * Provides the file path (directories and filename) for the records.
 *
 * The value returned is of the format: `<function name>/dt=<YYYY-MM-DD>/records.jsonl`
 * The date is prefixed with `dt=` so that if the records are being used
 * with a BigQuery external table, they will be automatically partitioned.
 *
 * @param storagePrefix
 * @param date
 * @returns
 */
const getRecordsFilePath = (storagePrefix: string, date: Date): string => {
  return `${storagePrefix}/dt=${getISO8601DateString(date)}/records.jsonl`;
};

/**
 * Reads the TokenHolderTransaction records for the given date.
 *
 * Currently this is read from Google Cloud Storage, however the
 * source may change in the future. The function is designed
 * to abstract the storage layer.
 *
 * @param date
 * @returns
 */
export const readRecords = async (
  storagePrefix: string,
  bucketName: string,
  date: Date,
): Promise<TokenHolderTransaction[]> => {
  const filePath = getRecordsFilePath(storagePrefix, date);
  const file = getFile(bucketName, filePath);
  if (!(await file.exists())[0]) {
    return [];
  }

  return JSONL.parse((await file.download())[0].toString("utf-8")) as TokenHolderTransaction[];
};

/**
 * Writes the TokenHolderTransaction records for the given date.
 *
 * Currently this is written to Google Cloud Storage, however the
 * destination may change in the future. The function is designed
 * to abstract the storage layer.
 */
export const writeRecords = async (
  storagePrefix: string,
  bucketName: string,
  records: TokenHolderTransaction[],
  date: Date,
): Promise<void> => {
  const fileName = getRecordsFilePath(storagePrefix, date);

  await putFile(bucketName, fileName, JSONL.stringify(records));
};

/**
 * Determines if the records file for the given date exists.
 */
export const recordsFileExists = async (storagePrefix: string, bucketName: string, date: Date): Promise<boolean> => {
  const filePath = getRecordsFilePath(storagePrefix, date);
  return await fileExists(bucketName, filePath);
};
