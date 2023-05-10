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

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  __typename?: "Query";
  tokenHolderTransaction?: Maybe<TokenHolderTransaction>;
  tokenHolderTransactions: Array<TokenHolderTransaction>;
  tokenHolder?: Maybe<TokenHolder>;
  tokenHolders: Array<TokenHolder>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type QueryTokenHolderTransactionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenHolderTransactionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenHolderTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHolderTransaction_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenHolderArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenHoldersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHolder_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type Subscription = {
  __typename?: "Subscription";
  tokenHolderTransaction?: Maybe<TokenHolderTransaction>;
  tokenHolderTransactions: Array<TokenHolderTransaction>;
  tokenHolder?: Maybe<TokenHolder>;
  tokenHolders: Array<TokenHolder>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type SubscriptionTokenHolderTransactionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenHolderTransactionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenHolderTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHolderTransaction_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenHolderArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenHoldersArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHolder_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type Token = {
  __typename?: "Token";
  id: Scalars["ID"];
  address: Scalars["Bytes"];
  blockchain: Scalars["String"];
  name: Scalars["String"];
};

export type TokenHolder = {
  __typename?: "TokenHolder";
  id: Scalars["ID"];
  balance: Scalars["BigDecimal"];
  holder: Scalars["Bytes"];
  token: Token;
};

export type TokenHolderTransaction = {
  __typename?: "TokenHolderTransaction";
  id: Scalars["ID"];
  balance: Scalars["BigDecimal"];
  block: Scalars["BigInt"];
  date: Scalars["String"];
  type: TransactionType;
  holder: TokenHolder;
  previousBalance: Scalars["BigDecimal"];
  timestamp: Scalars["String"];
  transaction: Scalars["Bytes"];
  transactionLogIndex: Scalars["BigInt"];
  value: Scalars["BigDecimal"];
};

export type TokenHolderTransaction_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  holder?: InputMaybe<Scalars["String"]>;
  holder_not?: InputMaybe<Scalars["String"]>;
  holder_gt?: InputMaybe<Scalars["String"]>;
  holder_lt?: InputMaybe<Scalars["String"]>;
  holder_gte?: InputMaybe<Scalars["String"]>;
  holder_lte?: InputMaybe<Scalars["String"]>;
  holder_in?: InputMaybe<Array<Scalars["String"]>>;
  holder_not_in?: InputMaybe<Array<Scalars["String"]>>;
  holder_contains?: InputMaybe<Scalars["String"]>;
  holder_contains_nocase?: InputMaybe<Scalars["String"]>;
  holder_not_contains?: InputMaybe<Scalars["String"]>;
  holder_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  holder_starts_with?: InputMaybe<Scalars["String"]>;
  holder_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  holder_not_starts_with?: InputMaybe<Scalars["String"]>;
  holder_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  holder_ends_with?: InputMaybe<Scalars["String"]>;
  holder_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  holder_not_ends_with?: InputMaybe<Scalars["String"]>;
  holder_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  holder_?: InputMaybe<TokenHolder_Filter>;
  previousBalance?: InputMaybe<Scalars["BigDecimal"]>;
  previousBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  previousBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  previousBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  previousBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  previousBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  previousBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  previousBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  timestamp?: InputMaybe<Scalars["String"]>;
  timestamp_not?: InputMaybe<Scalars["String"]>;
  timestamp_gt?: InputMaybe<Scalars["String"]>;
  timestamp_lt?: InputMaybe<Scalars["String"]>;
  timestamp_gte?: InputMaybe<Scalars["String"]>;
  timestamp_lte?: InputMaybe<Scalars["String"]>;
  timestamp_in?: InputMaybe<Array<Scalars["String"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["String"]>>;
  timestamp_contains?: InputMaybe<Scalars["String"]>;
  timestamp_contains_nocase?: InputMaybe<Scalars["String"]>;
  timestamp_not_contains?: InputMaybe<Scalars["String"]>;
  timestamp_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  timestamp_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp_not_starts_with?: InputMaybe<Scalars["String"]>;
  timestamp_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp_ends_with?: InputMaybe<Scalars["String"]>;
  timestamp_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp_not_ends_with?: InputMaybe<Scalars["String"]>;
  timestamp_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  transactionLogIndex?: InputMaybe<Scalars["BigInt"]>;
  transactionLogIndex_not?: InputMaybe<Scalars["BigInt"]>;
  transactionLogIndex_gt?: InputMaybe<Scalars["BigInt"]>;
  transactionLogIndex_lt?: InputMaybe<Scalars["BigInt"]>;
  transactionLogIndex_gte?: InputMaybe<Scalars["BigInt"]>;
  transactionLogIndex_lte?: InputMaybe<Scalars["BigInt"]>;
  transactionLogIndex_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionLogIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenHolderTransaction_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenHolderTransaction_Filter>>>;
};

export enum TokenHolderTransaction_OrderBy {
  Id = "id",
  Balance = "balance",
  Block = "block",
  Date = "date",
  Type = "type",
  Holder = "holder",
  HolderId = "holder__id",
  HolderBalance = "holder__balance",
  HolderHolder = "holder__holder",
  PreviousBalance = "previousBalance",
  Timestamp = "timestamp",
  Transaction = "transaction",
  TransactionLogIndex = "transactionLogIndex",
  Value = "value",
}

export type TokenHolder_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  holder?: InputMaybe<Scalars["Bytes"]>;
  holder_not?: InputMaybe<Scalars["Bytes"]>;
  holder_gt?: InputMaybe<Scalars["Bytes"]>;
  holder_lt?: InputMaybe<Scalars["Bytes"]>;
  holder_gte?: InputMaybe<Scalars["Bytes"]>;
  holder_lte?: InputMaybe<Scalars["Bytes"]>;
  holder_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  holder_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  holder_contains?: InputMaybe<Scalars["Bytes"]>;
  holder_not_contains?: InputMaybe<Scalars["Bytes"]>;
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
  token_?: InputMaybe<Token_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenHolder_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenHolder_Filter>>>;
};

export enum TokenHolder_OrderBy {
  Id = "id",
  Balance = "balance",
  Holder = "holder",
  Token = "token",
  TokenId = "token__id",
  TokenAddress = "token__address",
  TokenBlockchain = "token__blockchain",
  TokenName = "token__name",
}

export type Token_Filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
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
  name?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
};

export enum Token_OrderBy {
  Id = "id",
  Address = "address",
  Blockchain = "blockchain",
  Name = "name",
}

export enum TransactionType {
  Transfer = "TRANSFER",
  Mint = "MINT",
  Burn = "BURN",
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
