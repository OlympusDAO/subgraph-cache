import { readdirSync, readFileSync } from "fs";

import { SUBGRAPH_CONFIG_TYPES, SUBGRAPH_DIR, SubgraphConfig } from "../constants";

export const getSubgraphConfig = (filepath: string): SubgraphConfig => {
  const jsonObject = JSON.parse(readFileSync(filepath).toString("utf-8")) as SubgraphConfig;

  if (!jsonObject.dateField) throw new Error("dateField must be set");
  if (!jsonObject.url) throw new Error("url must be set");
  if (!jsonObject.object) throw new Error("object must be set");

  if (jsonObject.typeOverrides) {
    Object.entries(jsonObject.typeOverrides).forEach(([property, newType]) => {
      if (SUBGRAPH_CONFIG_TYPES.includes(newType)) return;

      throw new Error(
        `type override ${newType} for property ${property} is incorrect. Should be one of: ${SUBGRAPH_CONFIG_TYPES.join(
          ", ",
        )}`,
      );
    });
  }

  return jsonObject;
};

export const getSubgraphConfigFiles = (): string[] => {
  return readdirSync(SUBGRAPH_DIR, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.includes(".json"))
    .map(file => `${SUBGRAPH_DIR}/${file.name}`);
};
