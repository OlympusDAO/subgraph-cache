import { assert } from "console";
import { readdirSync, readFileSync } from "fs";

import { SUBGRAPH_DIR, SubgraphConfig } from "../constants";

export const getSubgraphConfig = (filepath: string): SubgraphConfig => {
  const jsonObject = JSON.parse(readFileSync(filepath).toString("utf-8")) as SubgraphConfig;

  assert(jsonObject.dateField, "dateField must be set");
  assert(jsonObject.url, "url must be set");
  assert(jsonObject.object, "object must be set");
  return jsonObject;
};

export const getSubgraphConfigFiles = (): string[] => {
  return readdirSync(SUBGRAPH_DIR, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.includes(".json"))
    .map(file => `${SUBGRAPH_DIR}/${file.name}`);
};
