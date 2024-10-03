import dotenv from "dotenv";

import { BASE_URL } from "../constants";
import { getEnv } from "../helpers/env";
import { throwError } from "../helpers/logging";

dotenv.config();

export class SubgraphConfig {
  constructor(
    public subgraphName: string,
    public object: string,
    public dateField: string,
    public deploymentId: string,
    public patchFile?: string,
    public typeOverrides?: { [key: string]: string },
  ) {}

  getUrl(): string {
    // If the url has a placeholder for the Graph Protocol API key, replace it with the actual key
    const graphProtocolApiKey = getEnv("GRAPH_PROTOCOL_API_KEY");

    return `${BASE_URL.replace("{GRAPH_PROTOCOL_API_KEY}", graphProtocolApiKey)}/${this.deploymentId}`;
  }

  getDirectory(): string {
    return `${this.subgraphName}/${this.deploymentId}/${this.object}`;
  }

  getUniqueName(): string {
    return `${this.subgraphName}-${this.object}`;
  }

  static fromJSON(jsonObject: any): SubgraphConfig {
    if (!jsonObject.dateField) throwError("dateField must be set");
    if (!jsonObject.subgraphName) throwError("subgraphName must be set");
    if (!jsonObject.object) throwError("object must be set");
    if (!jsonObject.deploymentId) throwError("deploymentId must be set");

    return new SubgraphConfig(
      jsonObject.subgraphName,
      jsonObject.object,
      jsonObject.dateField,
      jsonObject.deploymentId,
      jsonObject.patchFile,
      jsonObject.typeOverrides,
    );
  }
}
