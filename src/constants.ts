export interface IShouldTerminate {
  (): boolean;
}

export type SubgraphConfig = {
  url: string;
  object: string;
  dateField: string;
  typeOverrides?: {
    [key: string]: string;
  };
};

export const SUBGRAPH_DIR = "./subgraphs";
export const GENERATED_DIR = "./generated";
