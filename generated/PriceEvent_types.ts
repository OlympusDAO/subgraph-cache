export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: number;
  BigInt: number;
  Bytes: string;
};

export type Beat = {
  __typename?: "Beat";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
};

export type BeatRewardIssued = {
  __typename?: "BeatRewardIssued";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  to: Scalars["Bytes"];
  rewardToken: Scalars["Bytes"];
  rewardAmount: Scalars["BigDecimal"];
};

export type BeatRewardIssued_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_gt?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_lt?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_gte?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_lte?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardAmount?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_not?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeatRewardIssued_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<BeatRewardIssued_Filter>>>;
};

export enum BeatRewardIssued_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
  To = "to",
  RewardToken = "rewardToken",
  RewardAmount = "rewardAmount",
}

export type BeatRewardUpdated = {
  __typename?: "BeatRewardUpdated";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  token: Scalars["Bytes"];
  rewardToken: Scalars["Bytes"];
  rewardAmount: Scalars["BigDecimal"];
};

export type BeatRewardUpdated_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["Bytes"]>;
  token_not?: InputMaybe<Scalars["Bytes"]>;
  token_gt?: InputMaybe<Scalars["Bytes"]>;
  token_lt?: InputMaybe<Scalars["Bytes"]>;
  token_gte?: InputMaybe<Scalars["Bytes"]>;
  token_lte?: InputMaybe<Scalars["Bytes"]>;
  token_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  token_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  token_contains?: InputMaybe<Scalars["Bytes"]>;
  token_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_gt?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_lt?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_gte?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_lte?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  rewardToken_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  rewardAmount?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_not?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rewardAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rewardAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeatRewardUpdated_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<BeatRewardUpdated_Filter>>>;
};

export enum BeatRewardUpdated_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
  Token = "token",
  RewardToken = "rewardToken",
  RewardAmount = "rewardAmount",
}

export type Beat_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Beat_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Beat_Filter>>>;
};

export enum Beat_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type MinimumTargetPriceChanged = {
  __typename?: "MinimumTargetPriceChanged";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  minimumTargetPrice: Scalars["BigDecimal"];
};

export type MinimumTargetPriceChanged_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minimumTargetPrice?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  minimumTargetPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  minimumTargetPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinimumTargetPriceChanged_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<MinimumTargetPriceChanged_Filter>>>;
};

export enum MinimumTargetPriceChanged_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
  MinimumTargetPrice = "minimumTargetPrice",
}

export type MovingAverageDurationChanged = {
  __typename?: "MovingAverageDurationChanged";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  movingAverageDuration: Scalars["BigInt"];
};

export type MovingAverageDurationChanged_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  movingAverageDuration?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_not?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_gt?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_lt?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_gte?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_lte?: InputMaybe<Scalars["BigInt"]>;
  movingAverageDuration_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  movingAverageDuration_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MovingAverageDurationChanged_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<MovingAverageDurationChanged_Filter>>>;
};

export enum MovingAverageDurationChanged_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
  MovingAverageDuration = "movingAverageDuration",
}

export type NewObservation = {
  __typename?: "NewObservation";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  snapshot: RangeSnapshot;
};

export type NewObservation_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  snapshot?: InputMaybe<Scalars["String"]>;
  snapshot_not?: InputMaybe<Scalars["String"]>;
  snapshot_gt?: InputMaybe<Scalars["String"]>;
  snapshot_lt?: InputMaybe<Scalars["String"]>;
  snapshot_gte?: InputMaybe<Scalars["String"]>;
  snapshot_lte?: InputMaybe<Scalars["String"]>;
  snapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_contains?: InputMaybe<Scalars["String"]>;
  snapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_?: InputMaybe<RangeSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewObservation_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewObservation_Filter>>>;
};

export enum NewObservation_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
  Snapshot = "snapshot",
  SnapshotId = "snapshot__id",
  SnapshotBlockchain = "snapshot__blockchain",
  SnapshotBlock = "snapshot__block",
  SnapshotDate = "snapshot__date",
  SnapshotTimestamp = "snapshot__timestamp",
  SnapshotOhmPrice = "snapshot__ohmPrice",
  SnapshotOhmMovingAveragePrice = "snapshot__ohmMovingAveragePrice",
  SnapshotThresholdFactor = "snapshot__thresholdFactor",
  SnapshotCushionSpread = "snapshot__cushionSpread",
  SnapshotWallSpread = "snapshot__wallSpread",
  SnapshotHighActive = "snapshot__highActive",
  SnapshotLowActive = "snapshot__lowActive",
  SnapshotHighLastActiveTimestamp = "snapshot__highLastActiveTimestamp",
  SnapshotLowLastActiveTimestamp = "snapshot__lowLastActiveTimestamp",
  SnapshotHighCapacityOhm = "snapshot__highCapacityOhm",
  SnapshotLowCapacityReserve = "snapshot__lowCapacityReserve",
  SnapshotHighCushionPrice = "snapshot__highCushionPrice",
  SnapshotLowCushionPrice = "snapshot__lowCushionPrice",
  SnapshotHighMarketId = "snapshot__highMarketId",
  SnapshotLowMarketId = "snapshot__lowMarketId",
  SnapshotHighWallPrice = "snapshot__highWallPrice",
  SnapshotLowWallPrice = "snapshot__lowWallPrice",
  SnapshotTreasuryReserveAddress = "snapshot__treasuryReserveAddress",
  SnapshotTreasuryReserveBalance = "snapshot__treasuryReserveBalance",
  SnapshotTreasuryDebtBalance = "snapshot__treasuryDebtBalance",
  SnapshotOperatorReserveFactor = "snapshot__operatorReserveFactor",
  SnapshotOperatorCushionFactor = "snapshot__operatorCushionFactor",
}

export type ObservationFrequencyChanged = {
  __typename?: "ObservationFrequencyChanged";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  observationFrequencySeconds: Scalars["BigInt"];
};

export type ObservationFrequencyChanged_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  observationFrequencySeconds?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_not?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  observationFrequencySeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  observationFrequencySeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObservationFrequencyChanged_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ObservationFrequencyChanged_Filter>>>;
};

export enum ObservationFrequencyChanged_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
  ObservationFrequencySeconds = "observationFrequencySeconds",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PriceEvent = {
  __typename?: "PriceEvent";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  type: PriceEventType;
  isHigh: Scalars["Boolean"];
  timestamp: Scalars["BigInt"];
  snapshot: RangeSnapshot;
};

export enum PriceEventType {
  CushionDown = "CushionDown",
  CushionUp = "CushionUp",
  WallDown = "WallDown",
  WallUp = "WallUp",
}

export type PriceEvent_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<PriceEventType>;
  type_not?: InputMaybe<PriceEventType>;
  type_in?: InputMaybe<Array<PriceEventType>>;
  type_not_in?: InputMaybe<Array<PriceEventType>>;
  isHigh?: InputMaybe<Scalars["Boolean"]>;
  isHigh_not?: InputMaybe<Scalars["Boolean"]>;
  isHigh_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isHigh_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  snapshot?: InputMaybe<Scalars["String"]>;
  snapshot_not?: InputMaybe<Scalars["String"]>;
  snapshot_gt?: InputMaybe<Scalars["String"]>;
  snapshot_lt?: InputMaybe<Scalars["String"]>;
  snapshot_gte?: InputMaybe<Scalars["String"]>;
  snapshot_lte?: InputMaybe<Scalars["String"]>;
  snapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_contains?: InputMaybe<Scalars["String"]>;
  snapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_?: InputMaybe<RangeSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<PriceEvent_Filter>>>;
};

export enum PriceEvent_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Type = "type",
  IsHigh = "isHigh",
  Timestamp = "timestamp",
  Snapshot = "snapshot",
  SnapshotId = "snapshot__id",
  SnapshotBlockchain = "snapshot__blockchain",
  SnapshotBlock = "snapshot__block",
  SnapshotDate = "snapshot__date",
  SnapshotTimestamp = "snapshot__timestamp",
  SnapshotOhmPrice = "snapshot__ohmPrice",
  SnapshotOhmMovingAveragePrice = "snapshot__ohmMovingAveragePrice",
  SnapshotThresholdFactor = "snapshot__thresholdFactor",
  SnapshotCushionSpread = "snapshot__cushionSpread",
  SnapshotWallSpread = "snapshot__wallSpread",
  SnapshotHighActive = "snapshot__highActive",
  SnapshotLowActive = "snapshot__lowActive",
  SnapshotHighLastActiveTimestamp = "snapshot__highLastActiveTimestamp",
  SnapshotLowLastActiveTimestamp = "snapshot__lowLastActiveTimestamp",
  SnapshotHighCapacityOhm = "snapshot__highCapacityOhm",
  SnapshotLowCapacityReserve = "snapshot__lowCapacityReserve",
  SnapshotHighCushionPrice = "snapshot__highCushionPrice",
  SnapshotLowCushionPrice = "snapshot__lowCushionPrice",
  SnapshotHighMarketId = "snapshot__highMarketId",
  SnapshotLowMarketId = "snapshot__lowMarketId",
  SnapshotHighWallPrice = "snapshot__highWallPrice",
  SnapshotLowWallPrice = "snapshot__lowWallPrice",
  SnapshotTreasuryReserveAddress = "snapshot__treasuryReserveAddress",
  SnapshotTreasuryReserveBalance = "snapshot__treasuryReserveBalance",
  SnapshotTreasuryDebtBalance = "snapshot__treasuryDebtBalance",
  SnapshotOperatorReserveFactor = "snapshot__operatorReserveFactor",
  SnapshotOperatorCushionFactor = "snapshot__operatorCushionFactor",
}

export type PricesChangedEvent = {
  __typename?: "PricesChangedEvent";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  snapshot: RangeSnapshot;
};

export type PricesChangedEvent_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot?: InputMaybe<Scalars["String"]>;
  snapshot_not?: InputMaybe<Scalars["String"]>;
  snapshot_gt?: InputMaybe<Scalars["String"]>;
  snapshot_lt?: InputMaybe<Scalars["String"]>;
  snapshot_gte?: InputMaybe<Scalars["String"]>;
  snapshot_lte?: InputMaybe<Scalars["String"]>;
  snapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  snapshot_contains?: InputMaybe<Scalars["String"]>;
  snapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains?: InputMaybe<Scalars["String"]>;
  snapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  snapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  snapshot_?: InputMaybe<RangeSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PricesChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<PricesChangedEvent_Filter>>>;
};

export enum PricesChangedEvent_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Snapshot = "snapshot",
  SnapshotId = "snapshot__id",
  SnapshotBlockchain = "snapshot__blockchain",
  SnapshotBlock = "snapshot__block",
  SnapshotDate = "snapshot__date",
  SnapshotTimestamp = "snapshot__timestamp",
  SnapshotOhmPrice = "snapshot__ohmPrice",
  SnapshotOhmMovingAveragePrice = "snapshot__ohmMovingAveragePrice",
  SnapshotThresholdFactor = "snapshot__thresholdFactor",
  SnapshotCushionSpread = "snapshot__cushionSpread",
  SnapshotWallSpread = "snapshot__wallSpread",
  SnapshotHighActive = "snapshot__highActive",
  SnapshotLowActive = "snapshot__lowActive",
  SnapshotHighLastActiveTimestamp = "snapshot__highLastActiveTimestamp",
  SnapshotLowLastActiveTimestamp = "snapshot__lowLastActiveTimestamp",
  SnapshotHighCapacityOhm = "snapshot__highCapacityOhm",
  SnapshotLowCapacityReserve = "snapshot__lowCapacityReserve",
  SnapshotHighCushionPrice = "snapshot__highCushionPrice",
  SnapshotLowCushionPrice = "snapshot__lowCushionPrice",
  SnapshotHighMarketId = "snapshot__highMarketId",
  SnapshotLowMarketId = "snapshot__lowMarketId",
  SnapshotHighWallPrice = "snapshot__highWallPrice",
  SnapshotLowWallPrice = "snapshot__lowWallPrice",
  SnapshotTreasuryReserveAddress = "snapshot__treasuryReserveAddress",
  SnapshotTreasuryReserveBalance = "snapshot__treasuryReserveBalance",
  SnapshotTreasuryDebtBalance = "snapshot__treasuryDebtBalance",
  SnapshotOperatorReserveFactor = "snapshot__operatorReserveFactor",
  SnapshotOperatorCushionFactor = "snapshot__operatorCushionFactor",
}

export type Query = {
  __typename?: "Query";
  rangeSnapshot?: Maybe<RangeSnapshot>;
  rangeSnapshots: Array<RangeSnapshot>;
  priceEvent?: Maybe<PriceEvent>;
  priceEvents: Array<PriceEvent>;
  pricesChangedEvent?: Maybe<PricesChangedEvent>;
  pricesChangedEvents: Array<PricesChangedEvent>;
  spreadsChangedEvent?: Maybe<SpreadsChangedEvent>;
  spreadsChangedEvents: Array<SpreadsChangedEvent>;
  thresholdFactorChangedEvent?: Maybe<ThresholdFactorChangedEvent>;
  thresholdFactorChangedEvents: Array<ThresholdFactorChangedEvent>;
  movingAverageDurationChanged?: Maybe<MovingAverageDurationChanged>;
  movingAverageDurationChangeds: Array<MovingAverageDurationChanged>;
  newObservation?: Maybe<NewObservation>;
  newObservations: Array<NewObservation>;
  observationFrequencyChanged?: Maybe<ObservationFrequencyChanged>;
  observationFrequencyChangeds: Array<ObservationFrequencyChanged>;
  updateThresholdsChanged?: Maybe<UpdateThresholdsChanged>;
  updateThresholdsChangeds: Array<UpdateThresholdsChanged>;
  minimumTargetPriceChanged?: Maybe<MinimumTargetPriceChanged>;
  minimumTargetPriceChangeds: Array<MinimumTargetPriceChanged>;
  beat?: Maybe<Beat>;
  beats: Array<Beat>;
  beatRewardIssued?: Maybe<BeatRewardIssued>;
  beatRewardIssueds: Array<BeatRewardIssued>;
  beatRewardUpdated?: Maybe<BeatRewardUpdated>;
  beatRewardUpdateds: Array<BeatRewardUpdated>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type QueryRangeSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRangeSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RangeSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RangeSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPricesChangedEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPricesChangedEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PricesChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PricesChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySpreadsChangedEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySpreadsChangedEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SpreadsChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpreadsChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryThresholdFactorChangedEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryThresholdFactorChangedEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ThresholdFactorChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ThresholdFactorChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMovingAverageDurationChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMovingAverageDurationChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MovingAverageDurationChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MovingAverageDurationChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryNewObservationArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryNewObservationsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<NewObservation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewObservation_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryObservationFrequencyChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryObservationFrequencyChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ObservationFrequencyChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObservationFrequencyChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUpdateThresholdsChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUpdateThresholdsChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UpdateThresholdsChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UpdateThresholdsChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMinimumTargetPriceChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMinimumTargetPriceChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinimumTargetPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinimumTargetPriceChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Beat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Beat_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatRewardIssuedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatRewardIssuedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardIssued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BeatRewardIssued_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatRewardUpdatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBeatRewardUpdatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BeatRewardUpdated_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type RangeSnapshot = {
  __typename?: "RangeSnapshot";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  ohmPrice?: Maybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice?: Maybe<Scalars["BigDecimal"]>;
  thresholdFactor: Scalars["BigDecimal"];
  cushionSpread: Scalars["BigDecimal"];
  wallSpread: Scalars["BigDecimal"];
  highActive: Scalars["Boolean"];
  lowActive: Scalars["Boolean"];
  highLastActiveTimestamp: Scalars["BigInt"];
  lowLastActiveTimestamp: Scalars["BigInt"];
  highCapacityOhm: Scalars["BigDecimal"];
  lowCapacityReserve: Scalars["BigDecimal"];
  highCushionPrice: Scalars["BigDecimal"];
  lowCushionPrice: Scalars["BigDecimal"];
  highMarketId?: Maybe<Scalars["BigInt"]>;
  lowMarketId?: Maybe<Scalars["BigInt"]>;
  highWallPrice: Scalars["BigDecimal"];
  lowWallPrice: Scalars["BigDecimal"];
  treasuryReserveAddress?: Maybe<Scalars["Bytes"]>;
  treasuryReserveBalance?: Maybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance?: Maybe<Scalars["BigDecimal"]>;
  operatorReserveFactor?: Maybe<Scalars["BigDecimal"]>;
  operatorCushionFactor?: Maybe<Scalars["BigDecimal"]>;
};

export type RangeSnapshot_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  ohmPrice?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmMovingAveragePrice?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmMovingAveragePrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmMovingAveragePrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  thresholdFactor?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  thresholdFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionSpread?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_not?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionSpread_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallSpread?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallSpread_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highActive?: InputMaybe<Scalars["Boolean"]>;
  highActive_not?: InputMaybe<Scalars["Boolean"]>;
  highActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  highActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lowActive?: InputMaybe<Scalars["Boolean"]>;
  lowActive_not?: InputMaybe<Scalars["Boolean"]>;
  lowActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lowActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  highLastActiveTimestamp?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  highLastActiveTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highLastActiveTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowLastActiveTimestamp?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  lowLastActiveTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowLastActiveTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highCapacityOhm?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  highCapacityOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highCapacityOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowCapacityReserve?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_not?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCapacityReserve_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowCapacityReserve_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highCushionPrice?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  highCushionPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highCushionPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowCushionPrice?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lowCushionPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowCushionPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highMarketId?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_not?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_gt?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_lt?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_gte?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_lte?: InputMaybe<Scalars["BigInt"]>;
  highMarketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highMarketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowMarketId?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_not?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_gt?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_lt?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_gte?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_lte?: InputMaybe<Scalars["BigInt"]>;
  lowMarketId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lowMarketId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highWallPrice?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  highWallPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  highWallPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowWallPrice?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  lowWallPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  lowWallPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryReserveAddress?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_not?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  treasuryReserveAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  treasuryReserveAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  treasuryReserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryReserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDebtBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDebtBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDebtBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorReserveFactor?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorReserveFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorReserveFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorCushionFactor?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  operatorCushionFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  operatorCushionFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RangeSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RangeSnapshot_Filter>>>;
};

export enum RangeSnapshot_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Date = "date",
  Timestamp = "timestamp",
  OhmPrice = "ohmPrice",
  OhmMovingAveragePrice = "ohmMovingAveragePrice",
  ThresholdFactor = "thresholdFactor",
  CushionSpread = "cushionSpread",
  WallSpread = "wallSpread",
  HighActive = "highActive",
  LowActive = "lowActive",
  HighLastActiveTimestamp = "highLastActiveTimestamp",
  LowLastActiveTimestamp = "lowLastActiveTimestamp",
  HighCapacityOhm = "highCapacityOhm",
  LowCapacityReserve = "lowCapacityReserve",
  HighCushionPrice = "highCushionPrice",
  LowCushionPrice = "lowCushionPrice",
  HighMarketId = "highMarketId",
  LowMarketId = "lowMarketId",
  HighWallPrice = "highWallPrice",
  LowWallPrice = "lowWallPrice",
  TreasuryReserveAddress = "treasuryReserveAddress",
  TreasuryReserveBalance = "treasuryReserveBalance",
  TreasuryDebtBalance = "treasuryDebtBalance",
  OperatorReserveFactor = "operatorReserveFactor",
  OperatorCushionFactor = "operatorCushionFactor",
}

export type SpreadsChangedEvent = {
  __typename?: "SpreadsChangedEvent";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  cushionSpread: Scalars["BigDecimal"];
  wallSpread: Scalars["BigDecimal"];
};

export type SpreadsChangedEvent_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  cushionSpread?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_not?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_gt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_lt?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_gte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_lte?: InputMaybe<Scalars["BigDecimal"]>;
  cushionSpread_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  cushionSpread_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallSpread?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_not?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_lt?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_gte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_lte?: InputMaybe<Scalars["BigDecimal"]>;
  wallSpread_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  wallSpread_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SpreadsChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<SpreadsChangedEvent_Filter>>>;
};

export enum SpreadsChangedEvent_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  CushionSpread = "cushionSpread",
  WallSpread = "wallSpread",
}

export type Subscription = {
  __typename?: "Subscription";
  rangeSnapshot?: Maybe<RangeSnapshot>;
  rangeSnapshots: Array<RangeSnapshot>;
  priceEvent?: Maybe<PriceEvent>;
  priceEvents: Array<PriceEvent>;
  pricesChangedEvent?: Maybe<PricesChangedEvent>;
  pricesChangedEvents: Array<PricesChangedEvent>;
  spreadsChangedEvent?: Maybe<SpreadsChangedEvent>;
  spreadsChangedEvents: Array<SpreadsChangedEvent>;
  thresholdFactorChangedEvent?: Maybe<ThresholdFactorChangedEvent>;
  thresholdFactorChangedEvents: Array<ThresholdFactorChangedEvent>;
  movingAverageDurationChanged?: Maybe<MovingAverageDurationChanged>;
  movingAverageDurationChangeds: Array<MovingAverageDurationChanged>;
  newObservation?: Maybe<NewObservation>;
  newObservations: Array<NewObservation>;
  observationFrequencyChanged?: Maybe<ObservationFrequencyChanged>;
  observationFrequencyChangeds: Array<ObservationFrequencyChanged>;
  updateThresholdsChanged?: Maybe<UpdateThresholdsChanged>;
  updateThresholdsChangeds: Array<UpdateThresholdsChanged>;
  minimumTargetPriceChanged?: Maybe<MinimumTargetPriceChanged>;
  minimumTargetPriceChangeds: Array<MinimumTargetPriceChanged>;
  beat?: Maybe<Beat>;
  beats: Array<Beat>;
  beatRewardIssued?: Maybe<BeatRewardIssued>;
  beatRewardIssueds: Array<BeatRewardIssued>;
  beatRewardUpdated?: Maybe<BeatRewardUpdated>;
  beatRewardUpdateds: Array<BeatRewardUpdated>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type SubscriptionRangeSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRangeSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RangeSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RangeSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPricesChangedEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPricesChangedEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PricesChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PricesChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSpreadsChangedEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSpreadsChangedEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SpreadsChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpreadsChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionThresholdFactorChangedEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionThresholdFactorChangedEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ThresholdFactorChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ThresholdFactorChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMovingAverageDurationChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMovingAverageDurationChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MovingAverageDurationChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MovingAverageDurationChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionNewObservationArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionNewObservationsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<NewObservation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewObservation_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionObservationFrequencyChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionObservationFrequencyChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ObservationFrequencyChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObservationFrequencyChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUpdateThresholdsChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUpdateThresholdsChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UpdateThresholdsChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UpdateThresholdsChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMinimumTargetPriceChangedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMinimumTargetPriceChangedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinimumTargetPriceChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinimumTargetPriceChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Beat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Beat_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatRewardIssuedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatRewardIssuedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardIssued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BeatRewardIssued_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatRewardUpdatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBeatRewardUpdatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BeatRewardUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BeatRewardUpdated_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type ThresholdFactorChangedEvent = {
  __typename?: "ThresholdFactorChangedEvent";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  thresholdFactor: Scalars["BigDecimal"];
};

export type ThresholdFactorChangedEvent_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  thresholdFactor?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_not?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_lt?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_gte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_lte?: InputMaybe<Scalars["BigDecimal"]>;
  thresholdFactor_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  thresholdFactor_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ThresholdFactorChangedEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ThresholdFactorChangedEvent_Filter>>>;
};

export enum ThresholdFactorChangedEvent_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  ThresholdFactor = "thresholdFactor",
}

export type UpdateThresholdsChanged = {
  __typename?: "UpdateThresholdsChanged";
  id: Scalars["ID"];
  blockchain: Scalars["String"];
  block: Scalars["BigInt"];
  transaction: Scalars["Bytes"];
  date: Scalars["String"];
  timestamp: Scalars["BigInt"];
  ohmEthUpdateThresholdSeconds: Scalars["BigInt"];
  reserveEthUpdateThresholdSeconds: Scalars["BigInt"];
};

export type UpdateThresholdsChanged_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  blockchain?: InputMaybe<Scalars["String"]>;
  blockchain_not?: InputMaybe<Scalars["String"]>;
  blockchain_gt?: InputMaybe<Scalars["String"]>;
  blockchain_lt?: InputMaybe<Scalars["String"]>;
  blockchain_gte?: InputMaybe<Scalars["String"]>;
  blockchain_lte?: InputMaybe<Scalars["String"]>;
  blockchain_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_not_in?: InputMaybe<Array<Scalars["String"]>>;
  blockchain_contains?: InputMaybe<Scalars["String"]>;
  blockchain_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains?: InputMaybe<Scalars["String"]>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with?: InputMaybe<Scalars["String"]>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["Bytes"]>;
  transaction_not?: InputMaybe<Scalars["Bytes"]>;
  transaction_gt?: InputMaybe<Scalars["Bytes"]>;
  transaction_lt?: InputMaybe<Scalars["Bytes"]>;
  transaction_gte?: InputMaybe<Scalars["Bytes"]>;
  transaction_lte?: InputMaybe<Scalars["Bytes"]>;
  transaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transaction_contains?: InputMaybe<Scalars["Bytes"]>;
  transaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  date?: InputMaybe<Scalars["String"]>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_gt?: InputMaybe<Scalars["String"]>;
  date_lt?: InputMaybe<Scalars["String"]>;
  date_gte?: InputMaybe<Scalars["String"]>;
  date_lte?: InputMaybe<Scalars["String"]>;
  date_in?: InputMaybe<Array<Scalars["String"]>>;
  date_not_in?: InputMaybe<Array<Scalars["String"]>>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  date_starts_with?: InputMaybe<Scalars["String"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_starts_with?: InputMaybe<Scalars["String"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  date_ends_with?: InputMaybe<Scalars["String"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  ohmEthUpdateThresholdSeconds?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  ohmEthUpdateThresholdSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  ohmEthUpdateThresholdSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveEthUpdateThresholdSeconds?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  reserveEthUpdateThresholdSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  reserveEthUpdateThresholdSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UpdateThresholdsChanged_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<UpdateThresholdsChanged_Filter>>>;
};

export enum UpdateThresholdsChanged_OrderBy {
  Id = "id",
  Blockchain = "blockchain",
  Block = "block",
  Transaction = "transaction",
  Date = "date",
  Timestamp = "timestamp",
  OhmEthUpdateThresholdSeconds = "ohmEthUpdateThresholdSeconds",
  ReserveEthUpdateThresholdSeconds = "reserveEthUpdateThresholdSeconds",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}
