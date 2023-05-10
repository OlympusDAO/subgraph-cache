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
  url: string;
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
};

export const SUBGRAPH_DIR = "./subgraphs";
export const GENERATED_DIR = "./generated";
