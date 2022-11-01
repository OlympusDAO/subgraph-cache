import { assert } from "console";
import { readFileSync } from "fs";

import { SubgraphConfig } from "../constants";

export const getSubgraphConfig = (filepath: string): SubgraphConfig => {
  const jsonObject = JSON.parse(readFileSync(filepath).toString("utf-8")) as SubgraphConfig;

  assert(jsonObject.dateField, "dateField must be set");
  assert(jsonObject.url, "url must be set");
  assert(jsonObject.object, "object must be set");
  return jsonObject;
};
