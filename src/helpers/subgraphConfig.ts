import { readFileSync } from "fs";

import { SubgraphConfig } from "../constants";

export const getSubgraphConfig = (filepath: string): SubgraphConfig => {
  return JSON.parse(readFileSync(filepath).toString("utf-8"));
};
