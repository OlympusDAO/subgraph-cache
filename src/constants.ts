export interface IShouldTerminate {
  (): boolean;
}

export type SubgraphConfig = {
  url: string;
  object: string;
  dateField: string;
};
