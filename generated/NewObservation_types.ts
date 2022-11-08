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

export type MovingAverageDurationChanged = {
  __typename?: 'MovingAverageDurationChanged';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  movingAverageDuration: Scalars['BigInt'];
};

export type MovingAverageDurationChanged_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  movingAverageDuration?: InputMaybe<Scalars['BigInt']>;
  movingAverageDuration_not?: InputMaybe<Scalars['BigInt']>;
  movingAverageDuration_gt?: InputMaybe<Scalars['BigInt']>;
  movingAverageDuration_lt?: InputMaybe<Scalars['BigInt']>;
  movingAverageDuration_gte?: InputMaybe<Scalars['BigInt']>;
  movingAverageDuration_lte?: InputMaybe<Scalars['BigInt']>;
  movingAverageDuration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  movingAverageDuration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum MovingAverageDurationChanged_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  MovingAverageDuration = 'movingAverageDuration'
}

export type NewObservation = {
  __typename?: 'NewObservation';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  timestamp: Scalars['BigInt'];
  price: Scalars['BigDecimal'];
  priceMovingAverage: Scalars['BigDecimal'];
  cushionHighPrice?: Maybe<Scalars['BigDecimal']>;
  cushionLowPrice?: Maybe<Scalars['BigDecimal']>;
  wallHighPrice?: Maybe<Scalars['BigDecimal']>;
  wallLowPrice?: Maybe<Scalars['BigDecimal']>;
};

export type NewObservation_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceMovingAverage?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_not?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceMovingAverage_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionHighPrice?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionHighPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionLowPrice?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionLowPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallHighPrice?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallHighPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallLowPrice?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallLowPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum NewObservation_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  Timestamp = 'timestamp',
  Price = 'price',
  PriceMovingAverage = 'priceMovingAverage',
  CushionHighPrice = 'cushionHighPrice',
  CushionLowPrice = 'cushionLowPrice',
  WallHighPrice = 'wallHighPrice',
  WallLowPrice = 'wallLowPrice'
}

export type ObservationFrequencyChanged = {
  __typename?: 'ObservationFrequencyChanged';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  observationFrequencySeconds: Scalars['BigInt'];
};

export type ObservationFrequencyChanged_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  observationFrequencySeconds?: InputMaybe<Scalars['BigInt']>;
  observationFrequencySeconds_not?: InputMaybe<Scalars['BigInt']>;
  observationFrequencySeconds_gt?: InputMaybe<Scalars['BigInt']>;
  observationFrequencySeconds_lt?: InputMaybe<Scalars['BigInt']>;
  observationFrequencySeconds_gte?: InputMaybe<Scalars['BigInt']>;
  observationFrequencySeconds_lte?: InputMaybe<Scalars['BigInt']>;
  observationFrequencySeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationFrequencySeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum ObservationFrequencyChanged_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  ObservationFrequencySeconds = 'observationFrequencySeconds'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PriceEvent = {
  __typename?: 'PriceEvent';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  type: PriceEventType;
  isHigh: Scalars['Boolean'];
  timestamp: Scalars['BigInt'];
  capacityOhm?: Maybe<Scalars['BigDecimal']>;
  price?: Maybe<Scalars['BigDecimal']>;
  priceMovingAverage?: Maybe<Scalars['BigDecimal']>;
  cushionHighPrice?: Maybe<Scalars['BigDecimal']>;
  cushionLowPrice?: Maybe<Scalars['BigDecimal']>;
  wallHighPrice?: Maybe<Scalars['BigDecimal']>;
  wallLowPrice?: Maybe<Scalars['BigDecimal']>;
};

export enum PriceEventType {
  CushionDown = 'CushionDown',
  CushionUp = 'CushionUp',
  WallDown = 'WallDown',
  WallUp = 'WallUp'
}

export type PriceEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  type?: InputMaybe<PriceEventType>;
  type_not?: InputMaybe<PriceEventType>;
  type_in?: InputMaybe<Array<PriceEventType>>;
  type_not_in?: InputMaybe<Array<PriceEventType>>;
  isHigh?: InputMaybe<Scalars['Boolean']>;
  isHigh_not?: InputMaybe<Scalars['Boolean']>;
  isHigh_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isHigh_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  capacityOhm?: InputMaybe<Scalars['BigDecimal']>;
  capacityOhm_not?: InputMaybe<Scalars['BigDecimal']>;
  capacityOhm_gt?: InputMaybe<Scalars['BigDecimal']>;
  capacityOhm_lt?: InputMaybe<Scalars['BigDecimal']>;
  capacityOhm_gte?: InputMaybe<Scalars['BigDecimal']>;
  capacityOhm_lte?: InputMaybe<Scalars['BigDecimal']>;
  capacityOhm_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  capacityOhm_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceMovingAverage?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_not?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceMovingAverage_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceMovingAverage_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionHighPrice?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionHighPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionLowPrice?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionLowPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallHighPrice?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallHighPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallLowPrice?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallLowPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum PriceEvent_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  Type = 'type',
  IsHigh = 'isHigh',
  Timestamp = 'timestamp',
  CapacityOhm = 'capacityOhm',
  Price = 'price',
  PriceMovingAverage = 'priceMovingAverage',
  CushionHighPrice = 'cushionHighPrice',
  CushionLowPrice = 'cushionLowPrice',
  WallHighPrice = 'wallHighPrice',
  WallLowPrice = 'wallLowPrice'
}

export type PricesChangedEvent = {
  __typename?: 'PricesChangedEvent';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  cushionHighPrice: Scalars['BigDecimal'];
  cushionLowPrice: Scalars['BigDecimal'];
  wallHighPrice: Scalars['BigDecimal'];
  wallLowPrice: Scalars['BigDecimal'];
};

export type PricesChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  cushionHighPrice?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  cushionHighPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionHighPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionLowPrice?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  cushionLowPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionLowPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallHighPrice?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  wallHighPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallHighPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallLowPrice?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  wallLowPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallLowPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum PricesChangedEvent_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  CushionHighPrice = 'cushionHighPrice',
  CushionLowPrice = 'cushionLowPrice',
  WallHighPrice = 'wallHighPrice',
  WallLowPrice = 'wallLowPrice'
}

export type Query = {
  __typename?: 'Query';
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryPriceEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPriceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPricesChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPricesChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PricesChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PricesChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySpreadsChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySpreadsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SpreadsChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpreadsChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryThresholdFactorChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryThresholdFactorChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ThresholdFactorChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ThresholdFactorChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMovingAverageDurationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMovingAverageDurationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MovingAverageDurationChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MovingAverageDurationChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewObservationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewObservationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewObservation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewObservation_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObservationFrequencyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObservationFrequencyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ObservationFrequencyChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObservationFrequencyChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUpdateThresholdsChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUpdateThresholdsChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UpdateThresholdsChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UpdateThresholdsChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SpreadsChangedEvent = {
  __typename?: 'SpreadsChangedEvent';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  cushionSpread: Scalars['BigDecimal'];
  wallSpread: Scalars['BigDecimal'];
};

export type SpreadsChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  cushionSpread?: InputMaybe<Scalars['BigDecimal']>;
  cushionSpread_not?: InputMaybe<Scalars['BigDecimal']>;
  cushionSpread_gt?: InputMaybe<Scalars['BigDecimal']>;
  cushionSpread_lt?: InputMaybe<Scalars['BigDecimal']>;
  cushionSpread_gte?: InputMaybe<Scalars['BigDecimal']>;
  cushionSpread_lte?: InputMaybe<Scalars['BigDecimal']>;
  cushionSpread_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cushionSpread_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallSpread?: InputMaybe<Scalars['BigDecimal']>;
  wallSpread_not?: InputMaybe<Scalars['BigDecimal']>;
  wallSpread_gt?: InputMaybe<Scalars['BigDecimal']>;
  wallSpread_lt?: InputMaybe<Scalars['BigDecimal']>;
  wallSpread_gte?: InputMaybe<Scalars['BigDecimal']>;
  wallSpread_lte?: InputMaybe<Scalars['BigDecimal']>;
  wallSpread_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  wallSpread_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum SpreadsChangedEvent_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  CushionSpread = 'cushionSpread',
  WallSpread = 'wallSpread'
}

export type Subscription = {
  __typename?: 'Subscription';
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionPriceEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPriceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PriceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPricesChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPricesChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PricesChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PricesChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSpreadsChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSpreadsChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SpreadsChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpreadsChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionThresholdFactorChangedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionThresholdFactorChangedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ThresholdFactorChangedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ThresholdFactorChangedEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMovingAverageDurationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMovingAverageDurationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MovingAverageDurationChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MovingAverageDurationChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewObservationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewObservationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewObservation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewObservation_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionObservationFrequencyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionObservationFrequencyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ObservationFrequencyChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObservationFrequencyChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUpdateThresholdsChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUpdateThresholdsChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UpdateThresholdsChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UpdateThresholdsChanged_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type ThresholdFactorChangedEvent = {
  __typename?: 'ThresholdFactorChangedEvent';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  thresholdFactor: Scalars['BigDecimal'];
};

export type ThresholdFactorChangedEvent_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  thresholdFactor?: InputMaybe<Scalars['BigDecimal']>;
  thresholdFactor_not?: InputMaybe<Scalars['BigDecimal']>;
  thresholdFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
  thresholdFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
  thresholdFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
  thresholdFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
  thresholdFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  thresholdFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum ThresholdFactorChangedEvent_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  ThresholdFactor = 'thresholdFactor'
}

export type UpdateThresholdsChanged = {
  __typename?: 'UpdateThresholdsChanged';
  id: Scalars['ID'];
  blockchain: Scalars['String'];
  block: Scalars['BigInt'];
  transaction: Scalars['Bytes'];
  date: Scalars['String'];
  ohmEthUpdateThresholdSeconds: Scalars['BigInt'];
  reserveEthUpdateThresholdSeconds: Scalars['BigInt'];
};

export type UpdateThresholdsChanged_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockchain?: InputMaybe<Scalars['String']>;
  blockchain_not?: InputMaybe<Scalars['String']>;
  blockchain_gt?: InputMaybe<Scalars['String']>;
  blockchain_lt?: InputMaybe<Scalars['String']>;
  blockchain_gte?: InputMaybe<Scalars['String']>;
  blockchain_lte?: InputMaybe<Scalars['String']>;
  blockchain_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchain_contains?: InputMaybe<Scalars['String']>;
  blockchain_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_contains?: InputMaybe<Scalars['String']>;
  blockchain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchain_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['Bytes']>;
  transaction_not?: InputMaybe<Scalars['Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  ohmEthUpdateThresholdSeconds?: InputMaybe<Scalars['BigInt']>;
  ohmEthUpdateThresholdSeconds_not?: InputMaybe<Scalars['BigInt']>;
  ohmEthUpdateThresholdSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  ohmEthUpdateThresholdSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  ohmEthUpdateThresholdSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  ohmEthUpdateThresholdSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  ohmEthUpdateThresholdSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ohmEthUpdateThresholdSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveEthUpdateThresholdSeconds?: InputMaybe<Scalars['BigInt']>;
  reserveEthUpdateThresholdSeconds_not?: InputMaybe<Scalars['BigInt']>;
  reserveEthUpdateThresholdSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  reserveEthUpdateThresholdSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  reserveEthUpdateThresholdSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  reserveEthUpdateThresholdSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  reserveEthUpdateThresholdSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveEthUpdateThresholdSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export enum UpdateThresholdsChanged_OrderBy {
  Id = 'id',
  Blockchain = 'blockchain',
  Block = 'block',
  Transaction = 'transaction',
  Date = 'date',
  OhmEthUpdateThresholdSeconds = 'ohmEthUpdateThresholdSeconds',
  ReserveEthUpdateThresholdSeconds = 'reserveEthUpdateThresholdSeconds'
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
