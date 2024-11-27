import { Bucket, File, Storage } from "@google-cloud/storage";

import { throwError } from "./logging";

const getBucket = async (bucketName: string): Promise<Bucket> => {
  const storage: Storage = new Storage();
  const bucket: Bucket = storage.bucket(bucketName);
  if (!(await bucket.exists())[0]) {
    throwError(`Bucket ${bucketName} does not exist`);
  }

  return bucket;
};

export const getFile = async (bucketName: string, fileName: string): Promise<File> => {
  const bucket: Bucket = await getBucket(bucketName);
  const file: File = bucket.file(fileName);
  return file;
};

export const putFile = async (bucketName: string, fileName: string, fileContents: string): Promise<void> => {
  const file: File = await getFile(bucketName, fileName);
  await file.save(fileContents);
};

export const fileExists = async (bucketName: string, fileName: string): Promise<boolean> => {
  const file: File = await getFile(bucketName, fileName);
  return (await file.exists())[0];
};

// Will return the full path, e.g. `token-balances/dt=2021-01-01/dummy.jsonl
export const listFiles = async (bucketName: string, path: string): Promise<string[]> => {
  // Ensure that the path ends with a slash, otherwise partial matches will be returned
  const terminatedPath = path.endsWith("/") ? path : `${path}/`;

  console.info(`Listing files in ${bucketName}/${terminatedPath}`);
  const bucket: Bucket = await getBucket(bucketName);
  const files: File[] = (
    await bucket.getFiles({
      prefix: terminatedPath,
      softDeleted: false,
    })
  )[0];
  return files.map(file => file.name);
};
