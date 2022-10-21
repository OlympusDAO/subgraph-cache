import { TokenHolderTransaction } from "../graphql/generated";
import { fileExists, getFile, putFile } from "./bucket";
import { getISO8601DateString } from "./date";

const recordsPath = "output/records";

const getRecordsFilePath = (date: Date): string => {
  return `${recordsPath}/${getISO8601DateString(date)}.json`;
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
export const readRecords = async (bucketName: string, date: Date): Promise<TokenHolderTransaction[]> => {
  const filePath = getRecordsFilePath(date);
  const file = getFile(bucketName, filePath);
  if (!(await file.exists())[0]) {
    return [];
  }

  return JSON.parse((await file.download())[0].toString("utf-8")) as TokenHolderTransaction[];
};

/**
 * Writes the TokenHolderTransaction records for the given date.
 *
 * Currently this is written to Google Cloud Storage, however the
 * destination may change in the future. The function is designed
 * to abstract the storage layer.
 */
export const writeRecords = async (
  bucketName: string,
  records: TokenHolderTransaction[],
  date: Date,
): Promise<void> => {
  const fileName = getRecordsFilePath(date);

  await putFile(bucketName, fileName, JSON.stringify(records));
};

/**
 * Determines if the records file for the given date exists.
 */
export const recordsFileExists = async (bucketName: string, date: Date): Promise<boolean> => {
  const filePath = getRecordsFilePath(date);
  return await fileExists(bucketName, filePath);
};
