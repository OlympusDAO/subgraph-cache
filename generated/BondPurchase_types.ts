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

export type BalancerPool = {
  __typename?: 'BalancerPool';
  id: Scalars['String'];
  vaultAddress: Scalars['String'];
  poolId: Scalars['String'];
  constituentTokens: Array<Token>;
};


export type BalancerPoolConstituentTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
};

export type BalancerPool_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress?: InputMaybe<Scalars['String']>;
  vaultAddress_not?: InputMaybe<Scalars['String']>;
  vaultAddress_gt?: InputMaybe<Scalars['String']>;
  vaultAddress_lt?: InputMaybe<Scalars['String']>;
  vaultAddress_gte?: InputMaybe<Scalars['String']>;
  vaultAddress_lte?: InputMaybe<Scalars['String']>;
  vaultAddress_in?: InputMaybe<Array<Scalars['String']>>;
  vaultAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  vaultAddress_contains?: InputMaybe<Scalars['String']>;
  vaultAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_not_contains?: InputMaybe<Scalars['String']>;
  vaultAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_starts_with?: InputMaybe<Scalars['String']>;
  vaultAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  vaultAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_ends_with?: InputMaybe<Scalars['String']>;
  vaultAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  vaultAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  constituentTokens?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_not?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  constituentTokens_?: InputMaybe<Token_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum BalancerPool_OrderBy {
  Id = 'id',
  VaultAddress = 'vaultAddress',
  PoolId = 'poolId',
  ConstituentTokens = 'constituentTokens'
}

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
  id: Scalars['String'];
  marketId: Scalars['String'];
  owner: Scalars['String'];
  amount: Scalars['BigDecimal'];
  payout: Scalars['BigDecimal'];
  recipient: Scalars['String'];
  referrer: Scalars['String'];
  timestamp: Scalars['BigInt'];
  teller: Scalars['String'];
  auctioneer: Scalars['String'];
  payoutToken: Token;
  quoteToken: Token;
  network: Scalars['String'];
  purchasePrice: Scalars['BigDecimal'];
  postPurchasePrice: Scalars['BigDecimal'];
  ownerTokenTbv?: Maybe<OwnerTokenTbv>;
};

export type BondPurchase_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketId?: InputMaybe<Scalars['String']>;
  marketId_not?: InputMaybe<Scalars['String']>;
  marketId_gt?: InputMaybe<Scalars['String']>;
  marketId_lt?: InputMaybe<Scalars['String']>;
  marketId_gte?: InputMaybe<Scalars['String']>;
  marketId_lte?: InputMaybe<Scalars['String']>;
  marketId_in?: InputMaybe<Array<Scalars['String']>>;
  marketId_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketId_contains?: InputMaybe<Scalars['String']>;
  marketId_contains_nocase?: InputMaybe<Scalars['String']>;
  marketId_not_contains?: InputMaybe<Scalars['String']>;
  marketId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketId_starts_with?: InputMaybe<Scalars['String']>;
  marketId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketId_not_starts_with?: InputMaybe<Scalars['String']>;
  marketId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketId_ends_with?: InputMaybe<Scalars['String']>;
  marketId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketId_not_ends_with?: InputMaybe<Scalars['String']>;
  marketId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  payout?: InputMaybe<Scalars['BigDecimal']>;
  payout_not?: InputMaybe<Scalars['BigDecimal']>;
  payout_gt?: InputMaybe<Scalars['BigDecimal']>;
  payout_lt?: InputMaybe<Scalars['BigDecimal']>;
  payout_gte?: InputMaybe<Scalars['BigDecimal']>;
  payout_lte?: InputMaybe<Scalars['BigDecimal']>;
  payout_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  payout_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_not?: InputMaybe<Scalars['String']>;
  recipient_gt?: InputMaybe<Scalars['String']>;
  recipient_lt?: InputMaybe<Scalars['String']>;
  recipient_gte?: InputMaybe<Scalars['String']>;
  recipient_lte?: InputMaybe<Scalars['String']>;
  recipient_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_contains?: InputMaybe<Scalars['String']>;
  recipient_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_contains?: InputMaybe<Scalars['String']>;
  recipient_not_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_starts_with?: InputMaybe<Scalars['String']>;
  recipient_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_ends_with?: InputMaybe<Scalars['String']>;
  recipient_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  referrer_not?: InputMaybe<Scalars['String']>;
  referrer_gt?: InputMaybe<Scalars['String']>;
  referrer_lt?: InputMaybe<Scalars['String']>;
  referrer_gte?: InputMaybe<Scalars['String']>;
  referrer_lte?: InputMaybe<Scalars['String']>;
  referrer_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_contains?: InputMaybe<Scalars['String']>;
  referrer_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_contains?: InputMaybe<Scalars['String']>;
  referrer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  referrer_starts_with?: InputMaybe<Scalars['String']>;
  referrer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']>;
  referrer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_ends_with?: InputMaybe<Scalars['String']>;
  referrer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  teller?: InputMaybe<Scalars['String']>;
  teller_not?: InputMaybe<Scalars['String']>;
  teller_gt?: InputMaybe<Scalars['String']>;
  teller_lt?: InputMaybe<Scalars['String']>;
  teller_gte?: InputMaybe<Scalars['String']>;
  teller_lte?: InputMaybe<Scalars['String']>;
  teller_in?: InputMaybe<Array<Scalars['String']>>;
  teller_not_in?: InputMaybe<Array<Scalars['String']>>;
  teller_contains?: InputMaybe<Scalars['String']>;
  teller_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_not_contains?: InputMaybe<Scalars['String']>;
  teller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_starts_with?: InputMaybe<Scalars['String']>;
  teller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_starts_with?: InputMaybe<Scalars['String']>;
  teller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_ends_with?: InputMaybe<Scalars['String']>;
  teller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_ends_with?: InputMaybe<Scalars['String']>;
  teller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer?: InputMaybe<Scalars['String']>;
  auctioneer_not?: InputMaybe<Scalars['String']>;
  auctioneer_gt?: InputMaybe<Scalars['String']>;
  auctioneer_lt?: InputMaybe<Scalars['String']>;
  auctioneer_gte?: InputMaybe<Scalars['String']>;
  auctioneer_lte?: InputMaybe<Scalars['String']>;
  auctioneer_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_not_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_contains?: InputMaybe<Scalars['String']>;
  auctioneer_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken?: InputMaybe<Scalars['String']>;
  payoutToken_not?: InputMaybe<Scalars['String']>;
  payoutToken_gt?: InputMaybe<Scalars['String']>;
  payoutToken_lt?: InputMaybe<Scalars['String']>;
  payoutToken_gte?: InputMaybe<Scalars['String']>;
  payoutToken_lte?: InputMaybe<Scalars['String']>;
  payoutToken_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_contains?: InputMaybe<Scalars['String']>;
  payoutToken_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_?: InputMaybe<Token_Filter>;
  quoteToken?: InputMaybe<Scalars['String']>;
  quoteToken_not?: InputMaybe<Scalars['String']>;
  quoteToken_gt?: InputMaybe<Scalars['String']>;
  quoteToken_lt?: InputMaybe<Scalars['String']>;
  quoteToken_gte?: InputMaybe<Scalars['String']>;
  quoteToken_lte?: InputMaybe<Scalars['String']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_contains?: InputMaybe<Scalars['String']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_?: InputMaybe<Token_Filter>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  purchasePrice?: InputMaybe<Scalars['BigDecimal']>;
  purchasePrice_not?: InputMaybe<Scalars['BigDecimal']>;
  purchasePrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  purchasePrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  purchasePrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  purchasePrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  purchasePrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  purchasePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  postPurchasePrice?: InputMaybe<Scalars['BigDecimal']>;
  postPurchasePrice_not?: InputMaybe<Scalars['BigDecimal']>;
  postPurchasePrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  postPurchasePrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  postPurchasePrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  postPurchasePrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  postPurchasePrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  postPurchasePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ownerTokenTbv?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_gt?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_lt?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_gte?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_lte?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_in?: InputMaybe<Array<Scalars['String']>>;
  ownerTokenTbv_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerTokenTbv_contains?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_contains?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_starts_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_ends_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerTokenTbv_?: InputMaybe<OwnerTokenTbv_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum BondPurchase_OrderBy {
  Id = 'id',
  MarketId = 'marketId',
  Owner = 'owner',
  Amount = 'amount',
  Payout = 'payout',
  Recipient = 'recipient',
  Referrer = 'referrer',
  Timestamp = 'timestamp',
  Teller = 'teller',
  Auctioneer = 'auctioneer',
  PayoutToken = 'payoutToken',
  QuoteToken = 'quoteToken',
  Network = 'network',
  PurchasePrice = 'purchasePrice',
  PostPurchasePrice = 'postPurchasePrice',
  OwnerTokenTbv = 'ownerTokenTbv'
}

export type BondToken = {
  __typename?: 'BondToken';
  id: Scalars['String'];
  decimals?: Maybe<Scalars['BigInt']>;
  symbol?: Maybe<Scalars['String']>;
  underlying: Token;
  expiry: Scalars['BigInt'];
  teller: Scalars['String'];
  network: Scalars['String'];
  type: Scalars['String'];
};

export type BondToken_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlying?: InputMaybe<Scalars['String']>;
  underlying_not?: InputMaybe<Scalars['String']>;
  underlying_gt?: InputMaybe<Scalars['String']>;
  underlying_lt?: InputMaybe<Scalars['String']>;
  underlying_gte?: InputMaybe<Scalars['String']>;
  underlying_lte?: InputMaybe<Scalars['String']>;
  underlying_in?: InputMaybe<Array<Scalars['String']>>;
  underlying_not_in?: InputMaybe<Array<Scalars['String']>>;
  underlying_contains?: InputMaybe<Scalars['String']>;
  underlying_contains_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_contains?: InputMaybe<Scalars['String']>;
  underlying_not_contains_nocase?: InputMaybe<Scalars['String']>;
  underlying_starts_with?: InputMaybe<Scalars['String']>;
  underlying_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_starts_with?: InputMaybe<Scalars['String']>;
  underlying_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_ends_with?: InputMaybe<Scalars['String']>;
  underlying_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_not_ends_with?: InputMaybe<Scalars['String']>;
  underlying_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  underlying_?: InputMaybe<Token_Filter>;
  expiry?: InputMaybe<Scalars['BigInt']>;
  expiry_not?: InputMaybe<Scalars['BigInt']>;
  expiry_gt?: InputMaybe<Scalars['BigInt']>;
  expiry_lt?: InputMaybe<Scalars['BigInt']>;
  expiry_gte?: InputMaybe<Scalars['BigInt']>;
  expiry_lte?: InputMaybe<Scalars['BigInt']>;
  expiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  teller?: InputMaybe<Scalars['String']>;
  teller_not?: InputMaybe<Scalars['String']>;
  teller_gt?: InputMaybe<Scalars['String']>;
  teller_lt?: InputMaybe<Scalars['String']>;
  teller_gte?: InputMaybe<Scalars['String']>;
  teller_lte?: InputMaybe<Scalars['String']>;
  teller_in?: InputMaybe<Array<Scalars['String']>>;
  teller_not_in?: InputMaybe<Array<Scalars['String']>>;
  teller_contains?: InputMaybe<Scalars['String']>;
  teller_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_not_contains?: InputMaybe<Scalars['String']>;
  teller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_starts_with?: InputMaybe<Scalars['String']>;
  teller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_starts_with?: InputMaybe<Scalars['String']>;
  teller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_ends_with?: InputMaybe<Scalars['String']>;
  teller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_ends_with?: InputMaybe<Scalars['String']>;
  teller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum BondToken_OrderBy {
  Id = 'id',
  Decimals = 'decimals',
  Symbol = 'symbol',
  Underlying = 'underlying',
  Expiry = 'expiry',
  Teller = 'teller',
  Network = 'network',
  Type = 'type'
}

export type Market = {
  __typename?: 'Market';
  id: Scalars['String'];
  name: Scalars['String'];
  network: Scalars['String'];
  auctioneer: Scalars['String'];
  teller: Scalars['String'];
  marketId: Scalars['BigInt'];
  owner: Scalars['String'];
  payoutToken: Token;
  quoteToken: Token;
  vesting: Scalars['BigInt'];
  vestingType: Scalars['String'];
  isLive: Scalars['Boolean'];
  isInstantSwap: Scalars['Boolean'];
  totalBondedAmount: Scalars['BigDecimal'];
  totalPayoutAmount: Scalars['BigDecimal'];
  scaleAdjustment: Scalars['BigInt'];
  creationBlockTimestamp: Scalars['BigInt'];
};

export type Market_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer?: InputMaybe<Scalars['String']>;
  auctioneer_not?: InputMaybe<Scalars['String']>;
  auctioneer_gt?: InputMaybe<Scalars['String']>;
  auctioneer_lt?: InputMaybe<Scalars['String']>;
  auctioneer_gte?: InputMaybe<Scalars['String']>;
  auctioneer_lte?: InputMaybe<Scalars['String']>;
  auctioneer_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_not_in?: InputMaybe<Array<Scalars['String']>>;
  auctioneer_contains?: InputMaybe<Scalars['String']>;
  auctioneer_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains?: InputMaybe<Scalars['String']>;
  auctioneer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with?: InputMaybe<Scalars['String']>;
  auctioneer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller?: InputMaybe<Scalars['String']>;
  teller_not?: InputMaybe<Scalars['String']>;
  teller_gt?: InputMaybe<Scalars['String']>;
  teller_lt?: InputMaybe<Scalars['String']>;
  teller_gte?: InputMaybe<Scalars['String']>;
  teller_lte?: InputMaybe<Scalars['String']>;
  teller_in?: InputMaybe<Array<Scalars['String']>>;
  teller_not_in?: InputMaybe<Array<Scalars['String']>>;
  teller_contains?: InputMaybe<Scalars['String']>;
  teller_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_not_contains?: InputMaybe<Scalars['String']>;
  teller_not_contains_nocase?: InputMaybe<Scalars['String']>;
  teller_starts_with?: InputMaybe<Scalars['String']>;
  teller_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_starts_with?: InputMaybe<Scalars['String']>;
  teller_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  teller_ends_with?: InputMaybe<Scalars['String']>;
  teller_ends_with_nocase?: InputMaybe<Scalars['String']>;
  teller_not_ends_with?: InputMaybe<Scalars['String']>;
  teller_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketId?: InputMaybe<Scalars['BigInt']>;
  marketId_not?: InputMaybe<Scalars['BigInt']>;
  marketId_gt?: InputMaybe<Scalars['BigInt']>;
  marketId_lt?: InputMaybe<Scalars['BigInt']>;
  marketId_gte?: InputMaybe<Scalars['BigInt']>;
  marketId_lte?: InputMaybe<Scalars['BigInt']>;
  marketId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken?: InputMaybe<Scalars['String']>;
  payoutToken_not?: InputMaybe<Scalars['String']>;
  payoutToken_gt?: InputMaybe<Scalars['String']>;
  payoutToken_lt?: InputMaybe<Scalars['String']>;
  payoutToken_gte?: InputMaybe<Scalars['String']>;
  payoutToken_lte?: InputMaybe<Scalars['String']>;
  payoutToken_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  payoutToken_contains?: InputMaybe<Scalars['String']>;
  payoutToken_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains?: InputMaybe<Scalars['String']>;
  payoutToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with?: InputMaybe<Scalars['String']>;
  payoutToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payoutToken_?: InputMaybe<Token_Filter>;
  quoteToken?: InputMaybe<Scalars['String']>;
  quoteToken_not?: InputMaybe<Scalars['String']>;
  quoteToken_gt?: InputMaybe<Scalars['String']>;
  quoteToken_lt?: InputMaybe<Scalars['String']>;
  quoteToken_gte?: InputMaybe<Scalars['String']>;
  quoteToken_lte?: InputMaybe<Scalars['String']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  quoteToken_contains?: InputMaybe<Scalars['String']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  quoteToken_?: InputMaybe<Token_Filter>;
  vesting?: InputMaybe<Scalars['BigInt']>;
  vesting_not?: InputMaybe<Scalars['BigInt']>;
  vesting_gt?: InputMaybe<Scalars['BigInt']>;
  vesting_lt?: InputMaybe<Scalars['BigInt']>;
  vesting_gte?: InputMaybe<Scalars['BigInt']>;
  vesting_lte?: InputMaybe<Scalars['BigInt']>;
  vesting_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vesting_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestingType?: InputMaybe<Scalars['String']>;
  vestingType_not?: InputMaybe<Scalars['String']>;
  vestingType_gt?: InputMaybe<Scalars['String']>;
  vestingType_lt?: InputMaybe<Scalars['String']>;
  vestingType_gte?: InputMaybe<Scalars['String']>;
  vestingType_lte?: InputMaybe<Scalars['String']>;
  vestingType_in?: InputMaybe<Array<Scalars['String']>>;
  vestingType_not_in?: InputMaybe<Array<Scalars['String']>>;
  vestingType_contains?: InputMaybe<Scalars['String']>;
  vestingType_contains_nocase?: InputMaybe<Scalars['String']>;
  vestingType_not_contains?: InputMaybe<Scalars['String']>;
  vestingType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vestingType_starts_with?: InputMaybe<Scalars['String']>;
  vestingType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vestingType_not_starts_with?: InputMaybe<Scalars['String']>;
  vestingType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vestingType_ends_with?: InputMaybe<Scalars['String']>;
  vestingType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vestingType_not_ends_with?: InputMaybe<Scalars['String']>;
  vestingType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isLive?: InputMaybe<Scalars['Boolean']>;
  isLive_not?: InputMaybe<Scalars['Boolean']>;
  isLive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isInstantSwap?: InputMaybe<Scalars['Boolean']>;
  isInstantSwap_not?: InputMaybe<Scalars['Boolean']>;
  isInstantSwap_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isInstantSwap_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalBondedAmount?: InputMaybe<Scalars['BigDecimal']>;
  totalBondedAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBondedAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBondedAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBondedAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBondedAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBondedAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBondedAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalPayoutAmount?: InputMaybe<Scalars['BigDecimal']>;
  totalPayoutAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  totalPayoutAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalPayoutAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalPayoutAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalPayoutAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalPayoutAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalPayoutAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  scaleAdjustment?: InputMaybe<Scalars['BigInt']>;
  scaleAdjustment_not?: InputMaybe<Scalars['BigInt']>;
  scaleAdjustment_gt?: InputMaybe<Scalars['BigInt']>;
  scaleAdjustment_lt?: InputMaybe<Scalars['BigInt']>;
  scaleAdjustment_gte?: InputMaybe<Scalars['BigInt']>;
  scaleAdjustment_lte?: InputMaybe<Scalars['BigInt']>;
  scaleAdjustment_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaleAdjustment_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationBlockTimestamp?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  creationBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum Market_OrderBy {
  Id = 'id',
  Name = 'name',
  Network = 'network',
  Auctioneer = 'auctioneer',
  Teller = 'teller',
  MarketId = 'marketId',
  Owner = 'owner',
  PayoutToken = 'payoutToken',
  QuoteToken = 'quoteToken',
  Vesting = 'vesting',
  VestingType = 'vestingType',
  IsLive = 'isLive',
  IsInstantSwap = 'isInstantSwap',
  TotalBondedAmount = 'totalBondedAmount',
  TotalPayoutAmount = 'totalPayoutAmount',
  ScaleAdjustment = 'scaleAdjustment',
  CreationBlockTimestamp = 'creationBlockTimestamp'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnerBalance = {
  __typename?: 'OwnerBalance';
  id: Scalars['String'];
  tokenId: Scalars['BigInt'];
  owner: Scalars['String'];
  balance: Scalars['BigInt'];
  network: Scalars['String'];
  bondToken?: Maybe<BondToken>;
};

export type OwnerBalance_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken?: InputMaybe<Scalars['String']>;
  bondToken_not?: InputMaybe<Scalars['String']>;
  bondToken_gt?: InputMaybe<Scalars['String']>;
  bondToken_lt?: InputMaybe<Scalars['String']>;
  bondToken_gte?: InputMaybe<Scalars['String']>;
  bondToken_lte?: InputMaybe<Scalars['String']>;
  bondToken_in?: InputMaybe<Array<Scalars['String']>>;
  bondToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  bondToken_contains?: InputMaybe<Scalars['String']>;
  bondToken_contains_nocase?: InputMaybe<Scalars['String']>;
  bondToken_not_contains?: InputMaybe<Scalars['String']>;
  bondToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bondToken_starts_with?: InputMaybe<Scalars['String']>;
  bondToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_not_starts_with?: InputMaybe<Scalars['String']>;
  bondToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_ends_with?: InputMaybe<Scalars['String']>;
  bondToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_not_ends_with?: InputMaybe<Scalars['String']>;
  bondToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bondToken_?: InputMaybe<BondToken_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum OwnerBalance_OrderBy {
  Id = 'id',
  TokenId = 'tokenId',
  Owner = 'owner',
  Balance = 'balance',
  Network = 'network',
  BondToken = 'bondToken'
}

export type OwnerTokenTbv = {
  __typename?: 'OwnerTokenTbv';
  id: Scalars['String'];
  owner: Scalars['String'];
  token: Scalars['String'];
  network: Scalars['String'];
  tbv: Scalars['BigDecimal'];
  bondPurchases?: Maybe<Array<BondPurchase>>;
};


export type OwnerTokenTbvBondPurchasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondPurchase_Filter>;
};

export type OwnerTokenTbv_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tbv?: InputMaybe<Scalars['BigDecimal']>;
  tbv_not?: InputMaybe<Scalars['BigDecimal']>;
  tbv_gt?: InputMaybe<Scalars['BigDecimal']>;
  tbv_lt?: InputMaybe<Scalars['BigDecimal']>;
  tbv_gte?: InputMaybe<Scalars['BigDecimal']>;
  tbv_lte?: InputMaybe<Scalars['BigDecimal']>;
  tbv_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tbv_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  bondPurchases_?: InputMaybe<BondPurchase_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum OwnerTokenTbv_OrderBy {
  Id = 'id',
  Owner = 'owner',
  Token = 'token',
  Network = 'network',
  Tbv = 'tbv',
  BondPurchases = 'bondPurchases'
}

export type Pair = {
  __typename?: 'Pair';
  id: Scalars['String'];
  token0: Token;
  token1: Token;
};

export type Pair_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_Filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum Pair_OrderBy {
  Id = 'id',
  Token0 = 'token0',
  Token1 = 'token1'
}

export type Query = {
  __typename?: 'Query';
  ownerBalance?: Maybe<OwnerBalance>;
  ownerBalances: Array<OwnerBalance>;
  uniqueBonder?: Maybe<UniqueBonder>;
  uniqueBonders: Array<UniqueBonder>;
  bondToken?: Maybe<BondToken>;
  bondTokens: Array<BondToken>;
  ownerTokenTbv?: Maybe<OwnerTokenTbv>;
  ownerTokenTbvs: Array<OwnerTokenTbv>;
  bondPurchase?: Maybe<BondPurchase>;
  bondPurchases: Array<BondPurchase>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  balancerPool?: Maybe<BalancerPool>;
  balancerPools: Array<BalancerPool>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryOwnerBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnerBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnerBalance_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUniqueBonderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUniqueBondersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniqueBonder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniqueBonder_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBondTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondToken_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnerTokenTbvArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnerTokenTbvsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnerTokenTbv_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnerTokenTbv_Filter>;
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


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
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


export type QueryPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBalancerPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBalancerPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BalancerPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerPool_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  ownerBalance?: Maybe<OwnerBalance>;
  ownerBalances: Array<OwnerBalance>;
  uniqueBonder?: Maybe<UniqueBonder>;
  uniqueBonders: Array<UniqueBonder>;
  bondToken?: Maybe<BondToken>;
  bondTokens: Array<BondToken>;
  ownerTokenTbv?: Maybe<OwnerTokenTbv>;
  ownerTokenTbvs: Array<OwnerTokenTbv>;
  bondPurchase?: Maybe<BondPurchase>;
  bondPurchases: Array<BondPurchase>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  balancerPool?: Maybe<BalancerPool>;
  balancerPools: Array<BalancerPool>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionOwnerBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnerBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnerBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnerBalance_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUniqueBonderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUniqueBondersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniqueBonder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniqueBonder_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBondTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BondToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BondToken_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnerTokenTbvArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnerTokenTbvsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnerTokenTbv_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnerTokenTbv_Filter>;
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


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
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


export type SubscriptionPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBalancerPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBalancerPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BalancerPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerPool_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type Token = {
  __typename?: 'Token';
  id: Scalars['String'];
  network: Scalars['String'];
  address: Scalars['String'];
  decimals: Scalars['BigInt'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  typeName: Scalars['String'];
  lpPair?: Maybe<Pair>;
  balancerPool?: Maybe<BalancerPool>;
};

export type Token_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_contains_nocase?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  typeName?: InputMaybe<Scalars['String']>;
  typeName_not?: InputMaybe<Scalars['String']>;
  typeName_gt?: InputMaybe<Scalars['String']>;
  typeName_lt?: InputMaybe<Scalars['String']>;
  typeName_gte?: InputMaybe<Scalars['String']>;
  typeName_lte?: InputMaybe<Scalars['String']>;
  typeName_in?: InputMaybe<Array<Scalars['String']>>;
  typeName_not_in?: InputMaybe<Array<Scalars['String']>>;
  typeName_contains?: InputMaybe<Scalars['String']>;
  typeName_contains_nocase?: InputMaybe<Scalars['String']>;
  typeName_not_contains?: InputMaybe<Scalars['String']>;
  typeName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  typeName_starts_with?: InputMaybe<Scalars['String']>;
  typeName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  typeName_not_starts_with?: InputMaybe<Scalars['String']>;
  typeName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  typeName_ends_with?: InputMaybe<Scalars['String']>;
  typeName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  typeName_not_ends_with?: InputMaybe<Scalars['String']>;
  typeName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair?: InputMaybe<Scalars['String']>;
  lpPair_not?: InputMaybe<Scalars['String']>;
  lpPair_gt?: InputMaybe<Scalars['String']>;
  lpPair_lt?: InputMaybe<Scalars['String']>;
  lpPair_gte?: InputMaybe<Scalars['String']>;
  lpPair_lte?: InputMaybe<Scalars['String']>;
  lpPair_in?: InputMaybe<Array<Scalars['String']>>;
  lpPair_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpPair_contains?: InputMaybe<Scalars['String']>;
  lpPair_contains_nocase?: InputMaybe<Scalars['String']>;
  lpPair_not_contains?: InputMaybe<Scalars['String']>;
  lpPair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpPair_starts_with?: InputMaybe<Scalars['String']>;
  lpPair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_not_starts_with?: InputMaybe<Scalars['String']>;
  lpPair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_ends_with?: InputMaybe<Scalars['String']>;
  lpPair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_not_ends_with?: InputMaybe<Scalars['String']>;
  lpPair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpPair_?: InputMaybe<Pair_Filter>;
  balancerPool?: InputMaybe<Scalars['String']>;
  balancerPool_not?: InputMaybe<Scalars['String']>;
  balancerPool_gt?: InputMaybe<Scalars['String']>;
  balancerPool_lt?: InputMaybe<Scalars['String']>;
  balancerPool_gte?: InputMaybe<Scalars['String']>;
  balancerPool_lte?: InputMaybe<Scalars['String']>;
  balancerPool_in?: InputMaybe<Array<Scalars['String']>>;
  balancerPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  balancerPool_contains?: InputMaybe<Scalars['String']>;
  balancerPool_contains_nocase?: InputMaybe<Scalars['String']>;
  balancerPool_not_contains?: InputMaybe<Scalars['String']>;
  balancerPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  balancerPool_starts_with?: InputMaybe<Scalars['String']>;
  balancerPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balancerPool_not_starts_with?: InputMaybe<Scalars['String']>;
  balancerPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  balancerPool_ends_with?: InputMaybe<Scalars['String']>;
  balancerPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  balancerPool_not_ends_with?: InputMaybe<Scalars['String']>;
  balancerPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  balancerPool_?: InputMaybe<BalancerPool_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum Token_OrderBy {
  Id = 'id',
  Network = 'network',
  Address = 'address',
  Decimals = 'decimals',
  Symbol = 'symbol',
  Name = 'name',
  TypeName = 'typeName',
  LpPair = 'lpPair',
  BalancerPool = 'balancerPool'
}

export type UniqueBonder = {
  __typename?: 'UniqueBonder';
  id: Scalars['String'];
};

export type UniqueBonder_Filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum UniqueBonder_OrderBy {
  Id = 'id'
}

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
