import { readdirSync, readFileSync } from "fs";

import { SUBGRAPH_CONFIG_TYPES, SUBGRAPH_DIR } from "../constants";
import { SubgraphConfig } from "../types/subgraphConfig";

export const getSubgraphConfig = (filepath: string): SubgraphConfig => {
  const jsonObject = JSON.parse(readFileSync(filepath).toString("utf-8")) as SubgraphConfig;

  if (!jsonObject.dateField) throw new Error("dateField must be set");
  if (!jsonObject.subgraphName) throw new Error("subgraphName must be set");
  if (!jsonObject.object) throw new Error("object must be set");
  if (!jsonObject.deploymentId) throw new Error("deploymentId must be set");

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

  return new SubgraphConfig(
    jsonObject.subgraphName,
    jsonObject.object,
    jsonObject.dateField,
    jsonObject.deploymentId,
    jsonObject.patchFile,
    jsonObject.typeOverrides,
  );
};

export const getSubgraphConfigFiles = (): string[] => {
  return readdirSync(SUBGRAPH_DIR, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.includes(".json"))
    .map(file => `${SUBGRAPH_DIR}/${file.name}`);
};
