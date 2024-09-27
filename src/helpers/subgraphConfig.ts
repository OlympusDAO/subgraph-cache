import dotenv from "dotenv";
import { readdirSync, readFileSync } from "fs";

import { BASE_URL, SUBGRAPH_CONFIG_TYPES, SUBGRAPH_DIR, SubgraphConfig } from "../constants";

dotenv.config();

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

  return jsonObject;
};

export const getSubgraphConfigFiles = (): string[] => {
  return readdirSync(SUBGRAPH_DIR, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.includes(".json"))
    .map(file => `${SUBGRAPH_DIR}/${file.name}`);
};

export const getSubgraphUrl = (subgraphConfig: SubgraphConfig): string => {
  // If the url has a placeholder for the Graph Protocol API key, replace it with the actual key
  const graphProtocolApiKey = process.env.GRAPH_PROTOCOL_API_KEY;
  if (!graphProtocolApiKey) {
    throw new Error("GRAPH_PROTOCOL_API_KEY environment variable is not set");
  }

  return `${BASE_URL.replace("{GRAPH_PROTOCOL_API_KEY}", graphProtocolApiKey)}/${subgraphConfig.deploymentId}`;
};
