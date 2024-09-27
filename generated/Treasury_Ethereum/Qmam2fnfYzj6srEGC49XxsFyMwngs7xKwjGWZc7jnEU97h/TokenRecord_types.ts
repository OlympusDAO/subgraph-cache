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
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
  /**
   * 8 bytes signed integer
   *
   */
  Int8: string;
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: string;
};

export enum Aggregation_Interval {
  Hour = "hour",
  Day = "day",
}

export type BalancerPoolSnapshot = {
  __typename?: "BalancerPoolSnapshot";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  pool: Scalars["Bytes"];
  poolToken: Scalars["Bytes"];
  decimals: Scalars["Int"];
  totalSupply: Scalars["BigDecimal"];
  tokens: Array<Scalars["Bytes"]>;
  balances: Array<Scalars["BigDecimal"]>;
  weights: Array<Scalars["BigDecimal"]>;
};

export type BalancerPoolSnapshot_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pool?: InputMaybe<Scalars["Bytes"]>;
  pool_not?: InputMaybe<Scalars["Bytes"]>;
  pool_gt?: InputMaybe<Scalars["Bytes"]>;
  pool_lt?: InputMaybe<Scalars["Bytes"]>;
  pool_gte?: InputMaybe<Scalars["Bytes"]>;
  pool_lte?: InputMaybe<Scalars["Bytes"]>;
  pool_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pool_contains?: InputMaybe<Scalars["Bytes"]>;
  pool_not_contains?: InputMaybe<Scalars["Bytes"]>;
  poolToken?: InputMaybe<Scalars["Bytes"]>;
  poolToken_not?: InputMaybe<Scalars["Bytes"]>;
  poolToken_gt?: InputMaybe<Scalars["Bytes"]>;
  poolToken_lt?: InputMaybe<Scalars["Bytes"]>;
  poolToken_gte?: InputMaybe<Scalars["Bytes"]>;
  poolToken_lte?: InputMaybe<Scalars["Bytes"]>;
  poolToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  poolToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  poolToken_contains?: InputMaybe<Scalars["Bytes"]>;
  poolToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalSupply?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokens?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_not?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_not_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  balances?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BalancerPoolSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<BalancerPoolSnapshot_Filter>>>;
};

export enum BalancerPoolSnapshot_OrderBy {
  Id = "id",
  Block = "block",
  Pool = "pool",
  PoolToken = "poolToken",
  Decimals = "decimals",
  TotalSupply = "totalSupply",
  Tokens = "tokens",
  Balances = "balances",
  Weights = "weights",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type BophadesModule = {
  __typename?: "BophadesModule";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  keycode: Scalars["String"];
  moduleAddress: Scalars["Bytes"];
};

export type BophadesModule_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  keycode?: InputMaybe<Scalars["String"]>;
  keycode_not?: InputMaybe<Scalars["String"]>;
  keycode_gt?: InputMaybe<Scalars["String"]>;
  keycode_lt?: InputMaybe<Scalars["String"]>;
  keycode_gte?: InputMaybe<Scalars["String"]>;
  keycode_lte?: InputMaybe<Scalars["String"]>;
  keycode_in?: InputMaybe<Array<Scalars["String"]>>;
  keycode_not_in?: InputMaybe<Array<Scalars["String"]>>;
  keycode_contains?: InputMaybe<Scalars["String"]>;
  keycode_contains_nocase?: InputMaybe<Scalars["String"]>;
  keycode_not_contains?: InputMaybe<Scalars["String"]>;
  keycode_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  keycode_starts_with?: InputMaybe<Scalars["String"]>;
  keycode_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  keycode_not_starts_with?: InputMaybe<Scalars["String"]>;
  keycode_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  keycode_ends_with?: InputMaybe<Scalars["String"]>;
  keycode_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  keycode_not_ends_with?: InputMaybe<Scalars["String"]>;
  keycode_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  moduleAddress?: InputMaybe<Scalars["Bytes"]>;
  moduleAddress_not?: InputMaybe<Scalars["Bytes"]>;
  moduleAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  moduleAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  moduleAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  moduleAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  moduleAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  moduleAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  moduleAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  moduleAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BophadesModule_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<BophadesModule_Filter>>>;
};

export enum BophadesModule_OrderBy {
  Id = "id",
  Block = "block",
  Keycode = "keycode",
  ModuleAddress = "moduleAddress",
}

export type ClearinghouseAddress = {
  __typename?: "ClearinghouseAddress";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  addresses: Array<Scalars["Bytes"]>;
};

export type ClearinghouseAddress_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  addresses?: InputMaybe<Array<Scalars["Bytes"]>>;
  addresses_not?: InputMaybe<Array<Scalars["Bytes"]>>;
  addresses_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  addresses_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  addresses_not_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  addresses_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClearinghouseAddress_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClearinghouseAddress_Filter>>>;
};

export enum ClearinghouseAddress_OrderBy {
  Id = "id",
  Block = "block",
  Addresses = "addresses",
}

export type Erc20TokenSnapshot = {
  __typename?: "ERC20TokenSnapshot";
  id: Scalars["Bytes"];
  address: Scalars["Bytes"];
  decimals: Scalars["Int"];
  totalSupply?: Maybe<Scalars["BigDecimal"]>;
};

export type Erc20TokenSnapshot_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalSupply?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc20TokenSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Erc20TokenSnapshot_Filter>>>;
};

export enum Erc20TokenSnapshot_OrderBy {
  Id = "id",
  Address = "address",
  Decimals = "decimals",
  TotalSupply = "totalSupply",
}

export type GnosisAuction = {
  __typename?: "GnosisAuction";
  id: Scalars["ID"];
  auctionOpenTimestamp: Scalars["BigInt"];
  payoutCapacity: Scalars["BigDecimal"];
  termSeconds: Scalars["BigInt"];
  bidQuantity?: Maybe<Scalars["BigDecimal"]>;
  auctionCloseTimestamp?: Maybe<Scalars["BigInt"]>;
};

export type GnosisAuctionRoot = {
  __typename?: "GnosisAuctionRoot";
  id: Scalars["ID"];
  markets: Array<Scalars["BigInt"]>;
};

export type GnosisAuctionRoot_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  markets?: InputMaybe<Array<Scalars["BigInt"]>>;
  markets_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  markets_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  markets_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  markets_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  markets_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GnosisAuctionRoot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<GnosisAuctionRoot_Filter>>>;
};

export enum GnosisAuctionRoot_OrderBy {
  Id = "id",
  Markets = "markets",
}

export type GnosisAuction_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  auctionOpenTimestamp?: InputMaybe<Scalars["BigInt"]>;
  auctionOpenTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  auctionOpenTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  auctionOpenTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  auctionOpenTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  auctionOpenTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  auctionOpenTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auctionOpenTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  payoutCapacity?: InputMaybe<Scalars["BigDecimal"]>;
  payoutCapacity_not?: InputMaybe<Scalars["BigDecimal"]>;
  payoutCapacity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  payoutCapacity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  payoutCapacity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  payoutCapacity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  payoutCapacity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  payoutCapacity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  termSeconds?: InputMaybe<Scalars["BigInt"]>;
  termSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  termSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  termSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  termSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  termSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  termSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  termSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bidQuantity?: InputMaybe<Scalars["BigDecimal"]>;
  bidQuantity_not?: InputMaybe<Scalars["BigDecimal"]>;
  bidQuantity_gt?: InputMaybe<Scalars["BigDecimal"]>;
  bidQuantity_lt?: InputMaybe<Scalars["BigDecimal"]>;
  bidQuantity_gte?: InputMaybe<Scalars["BigDecimal"]>;
  bidQuantity_lte?: InputMaybe<Scalars["BigDecimal"]>;
  bidQuantity_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  bidQuantity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  auctionCloseTimestamp?: InputMaybe<Scalars["BigInt"]>;
  auctionCloseTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  auctionCloseTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  auctionCloseTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  auctionCloseTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  auctionCloseTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  auctionCloseTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  auctionCloseTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GnosisAuction_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<GnosisAuction_Filter>>>;
};

export enum GnosisAuction_OrderBy {
  Id = "id",
  AuctionOpenTimestamp = "auctionOpenTimestamp",
  PayoutCapacity = "payoutCapacity",
  TermSeconds = "termSeconds",
  BidQuantity = "bidQuantity",
  AuctionCloseTimestamp = "auctionCloseTimestamp",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PoolSnapshot = {
  __typename?: "PoolSnapshot";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  pool: Scalars["Bytes"];
  poolToken?: Maybe<Scalars["Bytes"]>;
  decimals: Scalars["Int"];
  totalSupply: Scalars["BigDecimal"];
  tokens: Array<Scalars["Bytes"]>;
  balances: Array<Scalars["BigDecimal"]>;
  weights?: Maybe<Array<Scalars["BigDecimal"]>>;
};

export type PoolSnapshot_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pool?: InputMaybe<Scalars["Bytes"]>;
  pool_not?: InputMaybe<Scalars["Bytes"]>;
  pool_gt?: InputMaybe<Scalars["Bytes"]>;
  pool_lt?: InputMaybe<Scalars["Bytes"]>;
  pool_gte?: InputMaybe<Scalars["Bytes"]>;
  pool_lte?: InputMaybe<Scalars["Bytes"]>;
  pool_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  pool_contains?: InputMaybe<Scalars["Bytes"]>;
  pool_not_contains?: InputMaybe<Scalars["Bytes"]>;
  poolToken?: InputMaybe<Scalars["Bytes"]>;
  poolToken_not?: InputMaybe<Scalars["Bytes"]>;
  poolToken_gt?: InputMaybe<Scalars["Bytes"]>;
  poolToken_lt?: InputMaybe<Scalars["Bytes"]>;
  poolToken_gte?: InputMaybe<Scalars["Bytes"]>;
  poolToken_lte?: InputMaybe<Scalars["Bytes"]>;
  poolToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  poolToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  poolToken_contains?: InputMaybe<Scalars["Bytes"]>;
  poolToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  decimals?: InputMaybe<Scalars["Int"]>;
  decimals_not?: InputMaybe<Scalars["Int"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]>;
  decimals_lt?: InputMaybe<Scalars["Int"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  totalSupply?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tokens?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_not?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_not_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  balances?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_not?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_not_contains?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  weights_not_contains_nocase?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
};

export enum PoolSnapshot_OrderBy {
  Id = "id",
  Block = "block",
  Pool = "pool",
  PoolToken = "poolToken",
  Decimals = "decimals",
  TotalSupply = "totalSupply",
  Tokens = "tokens",
  Balances = "balances",
  Weights = "weights",
}

export type PriceSnapshot = {
  __typename?: "PriceSnapshot";
  id: Scalars["ID"];
  block: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  date: Scalars["String"];
  priceOhm: Scalars["BigDecimal"];
  priceGOhm: Scalars["BigDecimal"];
};

export type PriceSnapshot_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  priceOhm?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceGOhm?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  priceGOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  priceGOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<PriceSnapshot_Filter>>>;
};

export enum PriceSnapshot_OrderBy {
  Id = "id",
  Block = "block",
  Timestamp = "timestamp",
  Date = "date",
  PriceOhm = "priceOhm",
  PriceGOhm = "priceGOhm",
}

export type ProtocolMetric = {
  __typename?: "ProtocolMetric";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  currentAPY: Scalars["BigDecimal"];
  currentIndex: Scalars["BigDecimal"];
  date: Scalars["String"];
  gOhmPrice: Scalars["BigDecimal"];
  gOhmSyntheticSupply?: Maybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply: Scalars["BigDecimal"];
  marketCap?: Maybe<Scalars["BigDecimal"]>;
  nextDistributedOhm: Scalars["BigDecimal"];
  nextEpochRebase: Scalars["BigDecimal"];
  ohmCirculatingSupply?: Maybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply?: Maybe<Scalars["BigDecimal"]>;
  ohmPrice: Scalars["BigDecimal"];
  ohmTotalSupply: Scalars["BigDecimal"];
  sOhmCirculatingSupply: Scalars["BigDecimal"];
  timestamp: Scalars["BigInt"];
  totalValueLocked: Scalars["BigDecimal"];
  treasuryLiquidBacking?: Maybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic?: Maybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating?: Maybe<Scalars["BigDecimal"]>;
  treasuryMarketValue?: Maybe<Scalars["BigDecimal"]>;
};

export type ProtocolMetric_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentAPY?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_not?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_gt?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_lt?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_gte?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_lte?: InputMaybe<Scalars["BigDecimal"]>;
  currentAPY_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  currentAPY_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  currentIndex?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_not?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_gt?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_lt?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_gte?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_lte?: InputMaybe<Scalars["BigDecimal"]>;
  currentIndex_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  currentIndex_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  gOhmPrice?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmSyntheticSupply?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmSyntheticSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmSyntheticSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmTotalSupply?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  gOhmTotalSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  gOhmTotalSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  marketCap?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_not?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_gt?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_lt?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_gte?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_lte?: InputMaybe<Scalars["BigDecimal"]>;
  marketCap_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  marketCap_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextDistributedOhm?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  nextDistributedOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextDistributedOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextEpochRebase?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_not?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_gt?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_lt?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_gte?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_lte?: InputMaybe<Scalars["BigDecimal"]>;
  nextEpochRebase_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  nextEpochRebase_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmCirculatingSupply?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmCirculatingSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmCirculatingSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmFloatingSupply?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmFloatingSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmFloatingSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmPrice?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmTotalSupply?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  ohmTotalSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  ohmTotalSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sOhmCirculatingSupply?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_not?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sOhmCirculatingSupply_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sOhmCirculatingSupply_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLocked?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigDecimal"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBacking?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBacking_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBacking_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBackingPerGOhmSynthetic?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerGOhmSynthetic_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBackingPerGOhmSynthetic_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBackingPerOhmFloating?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryLiquidBackingPerOhmFloating_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryLiquidBackingPerOhmFloating_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryMarketValue?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryMarketValue_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryMarketValue_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolMetric_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProtocolMetric_Filter>>>;
};

export enum ProtocolMetric_OrderBy {
  Id = "id",
  Block = "block",
  CurrentApy = "currentAPY",
  CurrentIndex = "currentIndex",
  Date = "date",
  GOhmPrice = "gOhmPrice",
  GOhmSyntheticSupply = "gOhmSyntheticSupply",
  GOhmTotalSupply = "gOhmTotalSupply",
  MarketCap = "marketCap",
  NextDistributedOhm = "nextDistributedOhm",
  NextEpochRebase = "nextEpochRebase",
  OhmCirculatingSupply = "ohmCirculatingSupply",
  OhmFloatingSupply = "ohmFloatingSupply",
  OhmPrice = "ohmPrice",
  OhmTotalSupply = "ohmTotalSupply",
  SOhmCirculatingSupply = "sOhmCirculatingSupply",
  Timestamp = "timestamp",
  TotalValueLocked = "totalValueLocked",
  TreasuryLiquidBacking = "treasuryLiquidBacking",
  TreasuryLiquidBackingPerGOhmSynthetic = "treasuryLiquidBackingPerGOhmSynthetic",
  TreasuryLiquidBackingPerOhmFloating = "treasuryLiquidBackingPerOhmFloating",
  TreasuryMarketValue = "treasuryMarketValue",
}

export type Query = {
  __typename?: "Query";
  protocolMetric?: Maybe<ProtocolMetric>;
  protocolMetrics: Array<ProtocolMetric>;
  tokenRecord?: Maybe<TokenRecord>;
  tokenRecords: Array<TokenRecord>;
  tokenSupply?: Maybe<TokenSupply>;
  tokenSupplies: Array<TokenSupply>;
  priceSnapshot?: Maybe<PriceSnapshot>;
  priceSnapshots: Array<PriceSnapshot>;
  gnosisAuctionRoot?: Maybe<GnosisAuctionRoot>;
  gnosisAuctionRoots: Array<GnosisAuctionRoot>;
  gnosisAuction?: Maybe<GnosisAuction>;
  gnosisAuctions: Array<GnosisAuction>;
  erc20TokenSnapshot?: Maybe<Erc20TokenSnapshot>;
  erc20TokenSnapshots: Array<Erc20TokenSnapshot>;
  balancerPoolSnapshot?: Maybe<BalancerPoolSnapshot>;
  balancerPoolSnapshots: Array<BalancerPoolSnapshot>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  tokenPriceSnapshot?: Maybe<TokenPriceSnapshot>;
  tokenPriceSnapshots: Array<TokenPriceSnapshot>;
  stakingPoolSnapshot?: Maybe<StakingPoolSnapshot>;
  stakingPoolSnapshots: Array<StakingPoolSnapshot>;
  bophadesModule?: Maybe<BophadesModule>;
  bophadesModules: Array<BophadesModule>;
  clearinghouseAddress?: Maybe<ClearinghouseAddress>;
  clearinghouseAddresses: Array<ClearinghouseAddress>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type QueryProtocolMetricArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProtocolMetricsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolMetric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolMetric_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenRecordArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenRecordsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenRecord_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenSupplyArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenSuppliesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenSupply_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPriceSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGnosisAuctionRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGnosisAuctionRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GnosisAuctionRoot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GnosisAuctionRoot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGnosisAuctionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGnosisAuctionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GnosisAuction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GnosisAuction_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20TokenSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc20TokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Erc20TokenSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBalancerPoolSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBalancerPoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BalancerPoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerPoolSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenPriceSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenPriceSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenPriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPriceSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStakingPoolSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryStakingPoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StakingPoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakingPoolSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBophadesModuleArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBophadesModulesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BophadesModule_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BophadesModule_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearinghouseAddressArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearinghouseAddressesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearinghouseAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearinghouseAddress_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type StakingPoolSnapshot = {
  __typename?: "StakingPoolSnapshot";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  contractAddress: Scalars["Bytes"];
  stakingToken?: Maybe<Scalars["Bytes"]>;
};

export type StakingPoolSnapshot_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contractAddress?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_not?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contractAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  contractAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  stakingToken?: InputMaybe<Scalars["Bytes"]>;
  stakingToken_not?: InputMaybe<Scalars["Bytes"]>;
  stakingToken_gt?: InputMaybe<Scalars["Bytes"]>;
  stakingToken_lt?: InputMaybe<Scalars["Bytes"]>;
  stakingToken_gte?: InputMaybe<Scalars["Bytes"]>;
  stakingToken_lte?: InputMaybe<Scalars["Bytes"]>;
  stakingToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  stakingToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  stakingToken_contains?: InputMaybe<Scalars["Bytes"]>;
  stakingToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakingPoolSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakingPoolSnapshot_Filter>>>;
};

export enum StakingPoolSnapshot_OrderBy {
  Id = "id",
  Block = "block",
  ContractAddress = "contractAddress",
  StakingToken = "stakingToken",
}

export type Subscription = {
  __typename?: "Subscription";
  protocolMetric?: Maybe<ProtocolMetric>;
  protocolMetrics: Array<ProtocolMetric>;
  tokenRecord?: Maybe<TokenRecord>;
  tokenRecords: Array<TokenRecord>;
  tokenSupply?: Maybe<TokenSupply>;
  tokenSupplies: Array<TokenSupply>;
  priceSnapshot?: Maybe<PriceSnapshot>;
  priceSnapshots: Array<PriceSnapshot>;
  gnosisAuctionRoot?: Maybe<GnosisAuctionRoot>;
  gnosisAuctionRoots: Array<GnosisAuctionRoot>;
  gnosisAuction?: Maybe<GnosisAuction>;
  gnosisAuctions: Array<GnosisAuction>;
  erc20TokenSnapshot?: Maybe<Erc20TokenSnapshot>;
  erc20TokenSnapshots: Array<Erc20TokenSnapshot>;
  balancerPoolSnapshot?: Maybe<BalancerPoolSnapshot>;
  balancerPoolSnapshots: Array<BalancerPoolSnapshot>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  tokenPriceSnapshot?: Maybe<TokenPriceSnapshot>;
  tokenPriceSnapshots: Array<TokenPriceSnapshot>;
  stakingPoolSnapshot?: Maybe<StakingPoolSnapshot>;
  stakingPoolSnapshots: Array<StakingPoolSnapshot>;
  bophadesModule?: Maybe<BophadesModule>;
  bophadesModules: Array<BophadesModule>;
  clearinghouseAddress?: Maybe<ClearinghouseAddress>;
  clearinghouseAddresses: Array<ClearinghouseAddress>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type SubscriptionProtocolMetricArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProtocolMetricsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProtocolMetric_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolMetric_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenRecordArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenRecordsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenRecord_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenSupplyArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenSuppliesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenSupply_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenSupply_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPriceSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGnosisAuctionRootArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGnosisAuctionRootsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GnosisAuctionRoot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GnosisAuctionRoot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGnosisAuctionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGnosisAuctionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GnosisAuction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GnosisAuction_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20TokenSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc20TokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc20TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Erc20TokenSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBalancerPoolSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBalancerPoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BalancerPoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerPoolSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenPriceSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenPriceSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenPriceSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPriceSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStakingPoolSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionStakingPoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StakingPoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakingPoolSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBophadesModuleArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBophadesModulesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BophadesModule_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BophadesModule_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearinghouseAddressArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearinghouseAddressesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearinghouseAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearinghouseAddress_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type TokenPriceSnapshot = {
  __typename?: "TokenPriceSnapshot";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  token: Scalars["Bytes"];
  price: Scalars["BigDecimal"];
};

export type TokenPriceSnapshot_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  price?: InputMaybe<Scalars["BigDecimal"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenPriceSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenPriceSnapshot_Filter>>>;
};

export enum TokenPriceSnapshot_OrderBy {
  Id = "id",
  Block = "block",
  Token = "token",
  Price = "price",
}

export type TokenRecord = {
  __typename?: "TokenRecord";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  date: Scalars["String"];
  token: Scalars["String"];
  tokenAddress: Scalars["String"];
  source: Scalars["String"];
  sourceAddress: Scalars["String"];
  rate: Scalars["BigDecimal"];
  balance: Scalars["BigDecimal"];
  multiplier: Scalars["BigDecimal"];
  value: Scalars["BigDecimal"];
  valueExcludingOhm: Scalars["BigDecimal"];
  category: Scalars["String"];
  isLiquid: Scalars["Boolean"];
  isBluechip: Scalars["Boolean"];
  blockchain: Scalars["String"];
};

export type TokenRecord_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  token?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress?: InputMaybe<Scalars["String"]>;
  tokenAddress_not?: InputMaybe<Scalars["String"]>;
  tokenAddress_gt?: InputMaybe<Scalars["String"]>;
  tokenAddress_lt?: InputMaybe<Scalars["String"]>;
  tokenAddress_gte?: InputMaybe<Scalars["String"]>;
  tokenAddress_lte?: InputMaybe<Scalars["String"]>;
  tokenAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<Scalars["String"]>;
  source_not?: InputMaybe<Scalars["String"]>;
  source_gt?: InputMaybe<Scalars["String"]>;
  source_lt?: InputMaybe<Scalars["String"]>;
  source_gte?: InputMaybe<Scalars["String"]>;
  source_lte?: InputMaybe<Scalars["String"]>;
  source_in?: InputMaybe<Array<Scalars["String"]>>;
  source_not_in?: InputMaybe<Array<Scalars["String"]>>;
  source_contains?: InputMaybe<Scalars["String"]>;
  source_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_not_contains?: InputMaybe<Scalars["String"]>;
  source_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_starts_with?: InputMaybe<Scalars["String"]>;
  source_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_not_starts_with?: InputMaybe<Scalars["String"]>;
  source_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_ends_with?: InputMaybe<Scalars["String"]>;
  source_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source_not_ends_with?: InputMaybe<Scalars["String"]>;
  source_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress?: InputMaybe<Scalars["String"]>;
  sourceAddress_not?: InputMaybe<Scalars["String"]>;
  sourceAddress_gt?: InputMaybe<Scalars["String"]>;
  sourceAddress_lt?: InputMaybe<Scalars["String"]>;
  sourceAddress_gte?: InputMaybe<Scalars["String"]>;
  sourceAddress_lte?: InputMaybe<Scalars["String"]>;
  sourceAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  rate?: InputMaybe<Scalars["BigDecimal"]>;
  rate_not?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  rate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  rate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  multiplier?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_not?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_gt?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_lt?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_gte?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_lte?: InputMaybe<Scalars["BigDecimal"]>;
  multiplier_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  multiplier_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExcludingOhm?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_not?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_gt?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_lt?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_gte?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_lte?: InputMaybe<Scalars["BigDecimal"]>;
  valueExcludingOhm_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  valueExcludingOhm_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  category?: InputMaybe<Scalars["String"]>;
  category_not?: InputMaybe<Scalars["String"]>;
  category_gt?: InputMaybe<Scalars["String"]>;
  category_lt?: InputMaybe<Scalars["String"]>;
  category_gte?: InputMaybe<Scalars["String"]>;
  category_lte?: InputMaybe<Scalars["String"]>;
  category_in?: InputMaybe<Array<Scalars["String"]>>;
  category_not_in?: InputMaybe<Array<Scalars["String"]>>;
  category_contains?: InputMaybe<Scalars["String"]>;
  category_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_not_contains?: InputMaybe<Scalars["String"]>;
  category_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_starts_with?: InputMaybe<Scalars["String"]>;
  category_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category_not_starts_with?: InputMaybe<Scalars["String"]>;
  category_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category_ends_with?: InputMaybe<Scalars["String"]>;
  category_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_not_ends_with?: InputMaybe<Scalars["String"]>;
  category_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  isLiquid?: InputMaybe<Scalars["Boolean"]>;
  isLiquid_not?: InputMaybe<Scalars["Boolean"]>;
  isLiquid_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isLiquid_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isBluechip?: InputMaybe<Scalars["Boolean"]>;
  isBluechip_not?: InputMaybe<Scalars["Boolean"]>;
  isBluechip_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isBluechip_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenRecord_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenRecord_Filter>>>;
};

export enum TokenRecord_OrderBy {
  Id = "id",
  Block = "block",
  Timestamp = "timestamp",
  Date = "date",
  Token = "token",
  TokenAddress = "tokenAddress",
  Source = "source",
  SourceAddress = "sourceAddress",
  Rate = "rate",
  Balance = "balance",
  Multiplier = "multiplier",
  Value = "value",
  ValueExcludingOhm = "valueExcludingOhm",
  Category = "category",
  IsLiquid = "isLiquid",
  IsBluechip = "isBluechip",
  Blockchain = "blockchain",
}

export type TokenSupply = {
  __typename?: "TokenSupply";
  id: Scalars["Bytes"];
  block: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  date: Scalars["String"];
  token: Scalars["String"];
  tokenAddress: Scalars["String"];
  pool?: Maybe<Scalars["String"]>;
  poolAddress?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  sourceAddress?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  balance: Scalars["BigDecimal"];
  supplyBalance: Scalars["BigDecimal"];
};

export type TokenSupply_Filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  block?: InputMaybe<Scalars["BigInt"]>;
  block_not?: InputMaybe<Scalars["BigInt"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]>;
  block_lt?: InputMaybe<Scalars["BigInt"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
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
  token?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress?: InputMaybe<Scalars["String"]>;
  tokenAddress_not?: InputMaybe<Scalars["String"]>;
  tokenAddress_gt?: InputMaybe<Scalars["String"]>;
  tokenAddress_lt?: InputMaybe<Scalars["String"]>;
  tokenAddress_gte?: InputMaybe<Scalars["String"]>;
  tokenAddress_lte?: InputMaybe<Scalars["String"]>;
  tokenAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenAddress_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress?: InputMaybe<Scalars["String"]>;
  poolAddress_not?: InputMaybe<Scalars["String"]>;
  poolAddress_gt?: InputMaybe<Scalars["String"]>;
  poolAddress_lt?: InputMaybe<Scalars["String"]>;
  poolAddress_gte?: InputMaybe<Scalars["String"]>;
  poolAddress_lte?: InputMaybe<Scalars["String"]>;
  poolAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  poolAddress_contains?: InputMaybe<Scalars["String"]>;
  poolAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_not_contains?: InputMaybe<Scalars["String"]>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_starts_with?: InputMaybe<Scalars["String"]>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_ends_with?: InputMaybe<Scalars["String"]>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  poolAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<Scalars["String"]>;
  source_not?: InputMaybe<Scalars["String"]>;
  source_gt?: InputMaybe<Scalars["String"]>;
  source_lt?: InputMaybe<Scalars["String"]>;
  source_gte?: InputMaybe<Scalars["String"]>;
  source_lte?: InputMaybe<Scalars["String"]>;
  source_in?: InputMaybe<Array<Scalars["String"]>>;
  source_not_in?: InputMaybe<Array<Scalars["String"]>>;
  source_contains?: InputMaybe<Scalars["String"]>;
  source_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_not_contains?: InputMaybe<Scalars["String"]>;
  source_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  source_starts_with?: InputMaybe<Scalars["String"]>;
  source_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_not_starts_with?: InputMaybe<Scalars["String"]>;
  source_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  source_ends_with?: InputMaybe<Scalars["String"]>;
  source_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  source_not_ends_with?: InputMaybe<Scalars["String"]>;
  source_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress?: InputMaybe<Scalars["String"]>;
  sourceAddress_not?: InputMaybe<Scalars["String"]>;
  sourceAddress_gt?: InputMaybe<Scalars["String"]>;
  sourceAddress_lt?: InputMaybe<Scalars["String"]>;
  sourceAddress_gte?: InputMaybe<Scalars["String"]>;
  sourceAddress_lte?: InputMaybe<Scalars["String"]>;
  sourceAddress_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_not_in?: InputMaybe<Array<Scalars["String"]>>;
  sourceAddress_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_starts_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with?: InputMaybe<Scalars["String"]>;
  sourceAddress_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_gt?: InputMaybe<Scalars["String"]>;
  type_lt?: InputMaybe<Scalars["String"]>;
  type_gte?: InputMaybe<Scalars["String"]>;
  type_lte?: InputMaybe<Scalars["String"]>;
  type_in?: InputMaybe<Array<Scalars["String"]>>;
  type_not_in?: InputMaybe<Array<Scalars["String"]>>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_starts_with?: InputMaybe<Scalars["String"]>;
  type_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type_not_starts_with?: InputMaybe<Scalars["String"]>;
  type_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type_ends_with?: InputMaybe<Scalars["String"]>;
  type_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_not_ends_with?: InputMaybe<Scalars["String"]>;
  type_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  supplyBalance?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  supplyBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  supplyBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenSupply_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenSupply_Filter>>>;
};

export enum TokenSupply_OrderBy {
  Id = "id",
  Block = "block",
  Timestamp = "timestamp",
  Date = "date",
  Token = "token",
  TokenAddress = "tokenAddress",
  Pool = "pool",
  PoolAddress = "poolAddress",
  Source = "source",
  SourceAddress = "sourceAddress",
  Type = "type",
  Balance = "balance",
  SupplyBalance = "supplyBalance",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars["Bytes"]>;
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
