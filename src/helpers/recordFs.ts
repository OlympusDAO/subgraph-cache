import { File } from "@google-cloud/storage";
import JSONL from "jsonl-parse-stringify";

import { TokenHolderTransaction } from "../graphql/generated";
import { fileExists, getFile, listFiles, putFile } from "./bucket";
import { getISO8601DateString } from "./date";
import { extractPartitionKey } from "./fs";

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
  const file: File = await getFile(bucketName, filePath);
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

/**
 * Returns the dates present in the specified GCS bucket.
 *
 * This function will check the contents of {bucket}/{path} for files in the format: {bucket}/{path}/dt=YYYY-MM-DD/records.jsonl
 *
 * @param bucket name of the GCS bucket
 * @param path path/prefix under which the partition directories are present
 * @returns Array of Date objects, in descending order
 */
const getRecordDates = async (bucket: string, path: string): Promise<Date[]> => {
  const fileNames = await listFiles(bucket, path);
  if (fileNames.length === 0) {
    return [];
  }

  // Excludes the dummy file
  const recordsFileNames = fileNames.filter(fileName => fileName.includes("records.jsonl"));
  const fileDates = recordsFileNames.map(fileName => new Date(extractPartitionKey(fileName)));
  return fileDates.sort((a, b) => b.getTime() - a.getTime());
};

/**
 * Returns the latest date for which a record file exists.
 *
 * @param bucket name of the GCS bucket
 * @param path path/prefix under which the partition directories are present
 * @returns Date of the latest records file, or null
 */
export const getLatestRecordsDate = async (bucket: string, path: string): Promise<Date | null> => {
  const sortedFileDates: Date[] = await getRecordDates(bucket, path);
  if (sortedFileDates.length === 0) {
    return null;
  }

  return sortedFileDates[0];
};
