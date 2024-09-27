export interface IShouldTerminate {
  (): boolean;
}

export const SUBGRAPH_CONFIG_TYPES: string[] = [
  "INT64",
  "FLOAT64",
  "NUMERIC",
  "BIGNUMERIC",
  "BOOL",
  "STRING",
  "BYTES",
  "DATE",
  "DATETIME",
  "TIME",
  "TIMESTAMP",
  "STRUCT",
  "GEOGRAPHY",
  "JSON",
];

export type SubgraphConfig = {
  subgraphName: string;
  object: string;
  /**
   * Set if there is a conflict between objects.
   *
   * For example, the same object in different subgraphs.
   */
  uniqueName?: string;
  dateField: string;
  patchFile?: string;
  typeOverrides?: {
    [key: string]: string;
  };
  deploymentId: string;
};

export const SUBGRAPH_DIR = "./subgraphs";
export const GENERATED_DIR = "./generated";

export const BASE_URL = "https://gateway-arbitrum.network.thegraph.com/api/{GRAPH_PROTOCOL_API_KEY}/deployments/id";
