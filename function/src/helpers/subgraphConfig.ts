import { readdirSync, readFileSync } from "fs";

import { SUBGRAPH_CONFIG_TYPES, SUBGRAPH_DIR } from "../constants";
import { SubgraphConfig } from "../types/subgraphConfig";
import { throwError } from "./logging";

export const getSubgraphConfig = (filepath: string): SubgraphConfig => {
  const jsonObject = JSON.parse(readFileSync(filepath).toString("utf-8")) as SubgraphConfig;

  if (!jsonObject.dateField) throwError("dateField must be set");
  if (!jsonObject.subgraphName) throwError("subgraphName must be set");
  if (!jsonObject.object) throwError("object must be set");
  if (!jsonObject.deploymentId) throwError("deploymentId must be set");

  if (jsonObject.typeOverrides) {
    Object.entries(jsonObject.typeOverrides).forEach(([property, newType]) => {
      if (SUBGRAPH_CONFIG_TYPES.includes(newType)) return;

      throwError(
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
