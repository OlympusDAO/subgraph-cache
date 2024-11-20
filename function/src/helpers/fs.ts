import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";
import path = require("path");

export const extractPartitionKey = (filePath: string): string => {
  // Expected input: token-balances/dt=2021-01-01/dummy.jsonl
  // Converted to token-balances/dt=2021-01-01
  const directoryPath = path.dirname(filePath);

  // Split into ["token-balances/dt=", "2021-01-01"]
  return directoryPath.split("dt=")[1];
};

export const writeFile = (filePath: string, content: string): void => {
  if (!existsSync(dirname(filePath))) {
    mkdirSync(dirname(filePath), { recursive: true });
  }

  writeFileSync(filePath, content);
};
