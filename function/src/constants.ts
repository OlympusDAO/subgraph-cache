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

export const SUBGRAPH_DIR = "./subgraphs";
export const GENERATED_DIR = "./generated";

export const BASE_URL = "https://gateway-arbitrum.network.thegraph.com/api/{GRAPH_PROTOCOL_API_KEY}/deployments/id";

export const EARLIEST_DATE = new Date("2021-01-01");
