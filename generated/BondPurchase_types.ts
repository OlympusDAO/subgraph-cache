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
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BondPurchase = {
  __typename?: 'BondPurchase';
  id: Scalars['ID'];
  date: Scalars['String'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  contract: Scalars['Bytes'];
  type: BondType;
  marketId: Scalars['BigInt'];
  referrer: Scalars['Bytes'];
  amountInQuoteToken: Scalars['BigDecimal'];
  payoutInPayoutToken: Scalars['BigDecimal'];
  payoutToken: Scalars['Bytes'];
  quoteToken: Scalars['Bytes'];
  expiryTimestamp: Scalars['BigInt'];
  expiryDate: Scalars['String'];
};

export type BondPurchase_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['String']>;
  date_not?: InputMaybe<Scalars['String']>;
  date_gt?: InputMaybe<Scalars['String']>;
  date_lt?: InputMaybe<Scalars['String']>;
  date_gte?: InputMaybe<Scalars['String']>;
  date_lte?: InputMaybe<Scalars['String']>;
  date_in?: InputMaybe<Array<Scalars['String']>>;
  date_not_in?: InputMaybe<Array<Scalars['String']>>;
  date_contains?: InputMaybe<Scalars['String']>;
  date_contains_nocase?: InputMaybe<Scalars['String']>;
  date_not_contains?: InputMaybe<Scalars['String']>;
  date_not_contains_nocase?: InputMaybe<Scalars['String']>;
  date_starts_with?: InputMaybe<Scalars['String']>;
  date_starts_with_nocase?: InputMaybe<Scalars['String']>;
  date_not_starts_with?: InputMaybe<Scalars['String']>;
  date_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  date_ends_with?: InputMaybe<Scalars['String']>;
  date_ends_with_nocase?: InputMaybe<Scalars['String']>;
  date_not_ends_with?: InputMaybe<Scalars['String']>;
  date_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
  contract?: InputMaybe<Scalars['Bytes']>;
  contract_not?: InputMaybe<Scalars['Bytes']>;
  contract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contract_contains?: InputMaybe<Scalars['Bytes']>;
  contract_not_contains?: InputMaybe<Scalars['Bytes']>;
  type?: InputMaybe<BondType>;
  type_not?: InputMaybe<BondType>;
  type_in?: InputMaybe<Array<BondType>>;
  type_not_in?: InputMaybe<Array<BondType>>;
  marketId?: InputMaybe<Scalars['BigInt']>;
  marketId_not?: InputMaybe<Scalars['BigInt']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']>;
  marketId_lt?: InputMaybe<Scalars['BigInt']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  referrer?: InputMaybe<Scalars['Bytes']>;
  referrer_not?: InputMaybe<Scalars['Bytes']>;
  referrer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referrer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  referrer_contains?: InputMaybe<Scalars['Bytes']>;
  referrer_not_contains?: InputMaybe<Scalars['Bytes']>;
  amountInQuoteToken?: InputMaybe<Scalars['BigDecimal']>;
  amountInQuoteToken_not?: InputMaybe<Scalars['BigDecimal']>;
  amountInQuoteToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountInQuoteToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountInQuoteToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountInQuoteToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountInQuoteToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountInQuoteToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  payoutInPayoutToken?: InputMaybe<Scalars['BigDecimal']>;
  payoutInPayoutToken_not?: InputMaybe<Scalars['BigDecimal']>;
  payoutInPayoutToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  payoutInPayoutToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  payoutInPayoutToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  payoutInPayoutToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  payoutInPayoutToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  payoutInPayoutToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  payoutToken?: InputMaybe<Scalars['Bytes']>;
  payoutToken_not?: InputMaybe<Scalars['Bytes']>;
  payoutToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payoutToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payoutToken_contains?: InputMaybe<Scalars['Bytes']>;
  payoutToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not?: InputMaybe<Scalars['Bytes']>;
  quoteToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quoteToken_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiryTimestamp?: InputMaybe<Scalars['BigInt']>;
  expiryTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  expiryTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  expiryTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  expiryTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  expiryTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  expiryTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate?: InputMaybe<Scalars['String']>;
  expiryDate_not?: InputMaybe<Scalars['String']>;
  expiryDate_gt?: InputMaybe<Scalars['String']>;
  expiryDate_lt?: InputMaybe<Scalars['String']>;
  expiryDate_gte?: InputMaybe<Scalars['String']>;
  expiryDate_lte?: InputMaybe<Scalars['String']>;
  expiryDate_in?: InputMaybe<Array<Scalars['String']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['String']>>;
  expiryDate_contains?: InputMaybe<Scalars['String']>;
  expiryDate_contains_nocase?: InputMaybe<Scalars['String']>;
  expiryDate_not_contains?: InputMaybe<Scalars['String']>;
  expiryDate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  expiryDate_starts_with?: InputMaybe<Scalars['String']>;
  expiryDate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  expiryDate_not_starts_with?: InputMaybe<Scalars['String']>;
  expiryDate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  expiryDate_ends_with?: InputMaybe<Scalars['String']>;
  expiryDate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  expiryDate_not_ends_with?: InputMaybe<Scalars['String']>;
  expiryDate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum BondPurchase_OrderBy {
  Id = 'id',
  Date = 'date',
  Block = 'block',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  Contract = 'contract',
  Type = 'type',
  MarketId = 'marketId',
  Referrer = 'referrer',
  AmountInQuoteToken = 'amountInQuoteToken',
  PayoutInPayoutToken = 'payoutInPayoutToken',
  PayoutToken = 'payoutToken',
  QuoteToken = 'quoteToken',
  ExpiryTimestamp = 'expiryTimestamp',
  ExpiryDate = 'expiryDate'
}

export enum BondType {
  FixedTerm = 'FixedTerm',
  FixedExpiry = 'FixedExpiry'
}

export type Market = {
  __typename?: 'Market';
  id: Scalars['ID'];
  marketId: Scalars['BigInt'];
  bondContract: Scalars['Bytes'];
  bondType: BondType;
  owner: Scalars['Bytes'];
  payoutToken: Scalars['Bytes'];
  quoteToken: Scalars['Bytes'];
  vesting: Scalars['BigInt'];
  durationMilliseconds: Scalars['BigInt'];
  durationActualMilliseconds?: Maybe<Scalars['BigInt']>;
  capacityInPayoutToken: Scalars['BigDecimal'];
  totalDebtInPayoutToken: Scalars['BigDecimal'];
  maxPayoutInPayoutToken: Scalars['BigDecimal'];
  initialPriceInQuoteToken: Scalars['BigDecimal'];
  minPriceInQuoteToken: Scalars['BigDecimal'];
  soldInPayoutToken: Scalars['BigDecimal'];
  purchasedInQuoteToken: Scalars['BigDecimal'];
  createdBlock: Scalars['BigInt'];
  createdDate: Scalars['String'];
  createdTimestamp: Scalars['BigInt'];
  closedBlock?: Maybe<Scalars['BigInt']>;
  closedDate?: Maybe<Scalars['String']>;
  closedTimestamp?: Maybe<Scalars['BigInt']>;
};

export type MarketClosedEvent = {
  __typename?: 'MarketClosedEvent';
  id: Scalars['ID'];
  marketId: Scalars['BigInt'];
  bondContract: Scalars['Bytes'];
  bondType: BondType;
  date: Scalars['String'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  market: Market;
};

export type MarketClosedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketId?: InputMaybe<Scalars['BigInt']>;
  marketId_not?: InputMaybe<Scalars['BigInt']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']>;
  marketId_lt?: InputMaybe<Scalars['BigInt']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bondContract?: InputMaybe<Scalars['Bytes']>;
  bondContract_not?: InputMaybe<Scalars['Bytes']>;
  bondContract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondContract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondContract_contains?: InputMaybe<Scalars['Bytes']>;
  bondContract_not_contains?: InputMaybe<Scalars['Bytes']>;
  bondType?: InputMaybe<BondType>;
  bondType_not?: InputMaybe<BondType>;
  bondType_in?: InputMaybe<Array<BondType>>;
  bondType_not_in?: InputMaybe<Array<BondType>>;
  date?: InputMaybe<Scalars['String']>;
  date_not?: InputMaybe<Scalars['String']>;
  date_gt?: InputMaybe<Scalars['String']>;
  date_lt?: InputMaybe<Scalars['String']>;
  date_gte?: InputMaybe<Scalars['String']>;
  date_lte?: InputMaybe<Scalars['String']>;
  date_in?: InputMaybe<Array<Scalars['String']>>;
  date_not_in?: InputMaybe<Array<Scalars['String']>>;
  date_contains?: InputMaybe<Scalars['String']>;
  date_contains_nocase?: InputMaybe<Scalars['String']>;
  date_not_contains?: InputMaybe<Scalars['String']>;
  date_not_contains_nocase?: InputMaybe<Scalars['String']>;
  date_starts_with?: InputMaybe<Scalars['String']>;
  date_starts_with_nocase?: InputMaybe<Scalars['String']>;
  date_not_starts_with?: InputMaybe<Scalars['String']>;
  date_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  date_ends_with?: InputMaybe<Scalars['String']>;
  date_ends_with_nocase?: InputMaybe<Scalars['String']>;
  date_not_ends_with?: InputMaybe<Scalars['String']>;
  date_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum MarketClosedEvent_OrderBy {
  Id = 'id',
  MarketId = 'marketId',
  BondContract = 'bondContract',
  BondType = 'bondType',
  Date = 'date',
  Timestamp = 'timestamp',
  Block = 'block',
  Market = 'market'
}

export type MarketCreatedEvent = {
  __typename?: 'MarketCreatedEvent';
  id: Scalars['ID'];
  marketId: Scalars['BigInt'];
  bondContract: Scalars['Bytes'];
  bondType: BondType;
  date: Scalars['String'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
  market: Market;
};

export type MarketCreatedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketId?: InputMaybe<Scalars['BigInt']>;
  marketId_not?: InputMaybe<Scalars['BigInt']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']>;
  marketId_lt?: InputMaybe<Scalars['BigInt']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bondContract?: InputMaybe<Scalars['Bytes']>;
  bondContract_not?: InputMaybe<Scalars['Bytes']>;
  bondContract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondContract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondContract_contains?: InputMaybe<Scalars['Bytes']>;
  bondContract_not_contains?: InputMaybe<Scalars['Bytes']>;
  bondType?: InputMaybe<BondType>;
  bondType_not?: InputMaybe<BondType>;
  bondType_in?: InputMaybe<Array<BondType>>;
  bondType_not_in?: InputMaybe<Array<BondType>>;
  date?: InputMaybe<Scalars['String']>;
  date_not?: InputMaybe<Scalars['String']>;
  date_gt?: InputMaybe<Scalars['String']>;
  date_lt?: InputMaybe<Scalars['String']>;
  date_gte?: InputMaybe<Scalars['String']>;
  date_lte?: InputMaybe<Scalars['String']>;
  date_in?: InputMaybe<Array<Scalars['String']>>;
  date_not_in?: InputMaybe<Array<Scalars['String']>>;
  date_contains?: InputMaybe<Scalars['String']>;
  date_contains_nocase?: InputMaybe<Scalars['String']>;
  date_not_contains?: InputMaybe<Scalars['String']>;
  date_not_contains_nocase?: InputMaybe<Scalars['String']>;
  date_starts_with?: InputMaybe<Scalars['String']>;
  date_starts_with_nocase?: InputMaybe<Scalars['String']>;
  date_not_starts_with?: InputMaybe<Scalars['String']>;
  date_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  date_ends_with?: InputMaybe<Scalars['String']>;
  date_ends_with_nocase?: InputMaybe<Scalars['String']>;
  date_not_ends_with?: InputMaybe<Scalars['String']>;
  date_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum MarketCreatedEvent_OrderBy {
  Id = 'id',
  MarketId = 'marketId',
  BondContract = 'bondContract',
  BondType = 'bondType',
  Date = 'date',
  Timestamp = 'timestamp',
  Block = 'block',
  Market = 'market'
}

export type Market_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketId?: InputMaybe<Scalars['BigInt']>;
  marketId_not?: InputMaybe<Scalars['BigInt']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']>;
  marketId_lt?: InputMaybe<Scalars['BigInt']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bondContract?: InputMaybe<Scalars['Bytes']>;
  bondContract_not?: InputMaybe<Scalars['Bytes']>;
  bondContract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondContract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bondContract_contains?: InputMaybe<Scalars['Bytes']>;
  bondContract_not_contains?: InputMaybe<Scalars['Bytes']>;
  bondType?: InputMaybe<BondType>;
  bondType_not?: InputMaybe<BondType>;
  bondType_in?: InputMaybe<Array<BondType>>;
  bondType_not_in?: InputMaybe<Array<BondType>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  payoutToken?: InputMaybe<Scalars['Bytes']>;
  payoutToken_not?: InputMaybe<Scalars['Bytes']>;
  payoutToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payoutToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payoutToken_contains?: InputMaybe<Scalars['Bytes']>;
  payoutToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not?: InputMaybe<Scalars['Bytes']>;
  quoteToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quoteToken_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  vesting?: InputMaybe<Scalars['BigInt']>;
  vesting_not?: InputMaybe<Scalars['BigInt']>;
  vesting_gt?: InputMaybe<Scalars['BigInt']>;
  vesting_lt?: InputMaybe<Scalars['BigInt']>;
  vesting_gte?: InputMaybe<Scalars['BigInt']>;
  vesting_lte?: InputMaybe<Scalars['BigInt']>;
  vesting_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vesting_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  durationMilliseconds?: InputMaybe<Scalars['BigInt']>;
  durationMilliseconds_not?: InputMaybe<Scalars['BigInt']>;
  durationMilliseconds_gt?: InputMaybe<Scalars['BigInt']>;
  durationMilliseconds_lt?: InputMaybe<Scalars['BigInt']>;
  durationMilliseconds_gte?: InputMaybe<Scalars['BigInt']>;
  durationMilliseconds_lte?: InputMaybe<Scalars['BigInt']>;
  durationMilliseconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  durationMilliseconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  durationActualMilliseconds?: InputMaybe<Scalars['BigInt']>;
  durationActualMilliseconds_not?: InputMaybe<Scalars['BigInt']>;
  durationActualMilliseconds_gt?: InputMaybe<Scalars['BigInt']>;
  durationActualMilliseconds_lt?: InputMaybe<Scalars['BigInt']>;
  durationActualMilliseconds_gte?: InputMaybe<Scalars['BigInt']>;
  durationActualMilliseconds_lte?: InputMaybe<Scalars['BigInt']>;
  durationActualMilliseconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  durationActualMilliseconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  capacityInPayoutToken?: InputMaybe<Scalars['BigDecimal']>;
  capacityInPayoutToken_not?: InputMaybe<Scalars['BigDecimal']>;
  capacityInPayoutToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  capacityInPayoutToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  capacityInPayoutToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  capacityInPayoutToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  capacityInPayoutToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  capacityInPayoutToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDebtInPayoutToken?: InputMaybe<Scalars['BigDecimal']>;
  totalDebtInPayoutToken_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDebtInPayoutToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDebtInPayoutToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDebtInPayoutToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDebtInPayoutToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDebtInPayoutToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDebtInPayoutToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maxPayoutInPayoutToken?: InputMaybe<Scalars['BigDecimal']>;
  maxPayoutInPayoutToken_not?: InputMaybe<Scalars['BigDecimal']>;
  maxPayoutInPayoutToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  maxPayoutInPayoutToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  maxPayoutInPayoutToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  maxPayoutInPayoutToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  maxPayoutInPayoutToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maxPayoutInPayoutToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  initialPriceInQuoteToken?: InputMaybe<Scalars['BigDecimal']>;
  initialPriceInQuoteToken_not?: InputMaybe<Scalars['BigDecimal']>;
  initialPriceInQuoteToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  initialPriceInQuoteToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  initialPriceInQuoteToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  initialPriceInQuoteToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  initialPriceInQuoteToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  initialPriceInQuoteToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  minPriceInQuoteToken?: InputMaybe<Scalars['BigDecimal']>;
  minPriceInQuoteToken_not?: InputMaybe<Scalars['BigDecimal']>;
  minPriceInQuoteToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  minPriceInQuoteToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  minPriceInQuoteToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  minPriceInQuoteToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  minPriceInQuoteToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  minPriceInQuoteToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  soldInPayoutToken?: InputMaybe<Scalars['BigDecimal']>;
  soldInPayoutToken_not?: InputMaybe<Scalars['BigDecimal']>;
  soldInPayoutToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  soldInPayoutToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  soldInPayoutToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  soldInPayoutToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  soldInPayoutToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  soldInPayoutToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  purchasedInQuoteToken?: InputMaybe<Scalars['BigDecimal']>;
  purchasedInQuoteToken_not?: InputMaybe<Scalars['BigDecimal']>;
  purchasedInQuoteToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  purchasedInQuoteToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  purchasedInQuoteToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  purchasedInQuoteToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  purchasedInQuoteToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  purchasedInQuoteToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdDate?: InputMaybe<Scalars['String']>;
  createdDate_not?: InputMaybe<Scalars['String']>;
  createdDate_gt?: InputMaybe<Scalars['String']>;
  createdDate_lt?: InputMaybe<Scalars['String']>;
  createdDate_gte?: InputMaybe<Scalars['String']>;
  createdDate_lte?: InputMaybe<Scalars['String']>;
  createdDate_in?: InputMaybe<Array<Scalars['String']>>;
  createdDate_not_in?: InputMaybe<Array<Scalars['String']>>;
  createdDate_contains?: InputMaybe<Scalars['String']>;
  createdDate_contains_nocase?: InputMaybe<Scalars['String']>;
  createdDate_not_contains?: InputMaybe<Scalars['String']>;
  createdDate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  createdDate_starts_with?: InputMaybe<Scalars['String']>;
  createdDate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdDate_not_starts_with?: InputMaybe<Scalars['String']>;
  createdDate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdDate_ends_with?: InputMaybe<Scalars['String']>;
  createdDate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdDate_not_ends_with?: InputMaybe<Scalars['String']>;
  createdDate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedBlock?: InputMaybe<Scalars['BigInt']>;
  closedBlock_not?: InputMaybe<Scalars['BigInt']>;
  closedBlock_gt?: InputMaybe<Scalars['BigInt']>;
  closedBlock_lt?: InputMaybe<Scalars['BigInt']>;
  closedBlock_gte?: InputMaybe<Scalars['BigInt']>;
  closedBlock_lte?: InputMaybe<Scalars['BigInt']>;
  closedBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedDate?: InputMaybe<Scalars['String']>;
  closedDate_not?: InputMaybe<Scalars['String']>;
  closedDate_gt?: InputMaybe<Scalars['String']>;
  closedDate_lt?: InputMaybe<Scalars['String']>;
  closedDate_gte?: InputMaybe<Scalars['String']>;
  closedDate_lte?: InputMaybe<Scalars['String']>;
  closedDate_in?: InputMaybe<Array<Scalars['String']>>;
  closedDate_not_in?: InputMaybe<Array<Scalars['String']>>;
  closedDate_contains?: InputMaybe<Scalars['String']>;
  closedDate_contains_nocase?: InputMaybe<Scalars['String']>;
  closedDate_not_contains?: InputMaybe<Scalars['String']>;
  closedDate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  closedDate_starts_with?: InputMaybe<Scalars['String']>;
  closedDate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closedDate_not_starts_with?: InputMaybe<Scalars['String']>;
  closedDate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  closedDate_ends_with?: InputMaybe<Scalars['String']>;
  closedDate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closedDate_not_ends_with?: InputMaybe<Scalars['String']>;
  closedDate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  closedTimestamp?: InputMaybe<Scalars['BigInt']>;
  closedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  closedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  closedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  closedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  closedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  closedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum Market_OrderBy {
  Id = 'id',
  MarketId = 'marketId',
  BondContract = 'bondContract',
  BondType = 'bondType',
  Owner = 'owner',
  PayoutToken = 'payoutToken',
  QuoteToken = 'quoteToken',
  Vesting = 'vesting',
  DurationMilliseconds = 'durationMilliseconds',
  DurationActualMilliseconds = 'durationActualMilliseconds',
  CapacityInPayoutToken = 'capacityInPayoutToken',
  TotalDebtInPayoutToken = 'totalDebtInPayoutToken',
  MaxPayoutInPayoutToken = 'maxPayoutInPayoutToken',
  InitialPriceInQuoteToken = 'initialPriceInQuoteToken',
  MinPriceInQuoteToken = 'minPriceInQuoteToken',
  SoldInPayoutToken = 'soldInPayoutToken',
  PurchasedInQuoteToken = 'purchasedInQuoteToken',
  CreatedBlock = 'createdBlock',
  CreatedDate = 'createdDate',
  CreatedTimestamp = 'createdTimestamp',
  ClosedBlock = 'closedBlock',
  ClosedDate = 'closedDate',
  ClosedTimestamp = 'closedTimestamp'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketCreatedEvent?: Maybe<MarketCreatedEvent>;
  marketCreatedEvents: Array<MarketCreatedEvent>;
  marketClosedEvent?: Maybe<MarketClosedEvent>;
  marketClosedEvents: Array<MarketClosedEvent>;
  bondPurchase?: Maybe<BondPurchase>;
  bondPurchases: Array<BondPurchase>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryMarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketClosedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketClosedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketClosedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketClosedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondPurchaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondPurchase_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketCreatedEvent?: Maybe<MarketCreatedEvent>;
  marketCreatedEvents: Array<MarketCreatedEvent>;
  marketClosedEvent?: Maybe<MarketClosedEvent>;
  marketClosedEvents: Array<MarketClosedEvent>;
  bondPurchase?: Maybe<BondPurchase>;
  bondPurchases: Array<BondPurchase>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionMarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketCreatedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketCreatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketCreatedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketClosedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketClosedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketClosedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketClosedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondPurchaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondPurchase_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
