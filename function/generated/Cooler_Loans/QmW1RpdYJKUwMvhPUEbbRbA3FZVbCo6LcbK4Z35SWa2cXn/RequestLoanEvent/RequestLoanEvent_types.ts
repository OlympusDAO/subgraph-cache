export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type ClaimDefaultedLoanEvent = {
  __typename?: "ClaimDefaultedLoanEvent";
  /**
   * Record ID.
   *
   * In the format of `cooler-loanId`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * Collateral quantity claimed.
   *
   */
  collateralQuantityClaimed: Scalars["BigDecimal"];
  /**
   * Price of the collateral token at the time of the event.
   *
   */
  collateralPrice: Scalars["BigDecimal"];
  /**
   * Value of the collateral claimed.
   *
   */
  collateralValueClaimed: Scalars["BigDecimal"];
  /**
   * Loan that was defaulted.
   *
   */
  loan: CoolerLoan;
  /**
   * Seconds since the loan expired.
   *
   */
  secondsSinceExpiry: Scalars["BigInt"];
  /**
   * Snapshot of the Clearinghouse at the time of the event.
   *
   */
  clearinghouseSnapshot: ClearinghouseSnapshot;
};

export type ClaimDefaultedLoanEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralQuantityClaimed?: InputMaybe<Scalars["BigDecimal"]>;
  collateralQuantityClaimed_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateralQuantityClaimed_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralQuantityClaimed_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralQuantityClaimed_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralQuantityClaimed_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralQuantityClaimed_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralQuantityClaimed_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralPrice?: InputMaybe<Scalars["BigDecimal"]>;
  collateralPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateralPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralValueClaimed?: InputMaybe<Scalars["BigDecimal"]>;
  collateralValueClaimed_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateralValueClaimed_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralValueClaimed_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralValueClaimed_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralValueClaimed_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralValueClaimed_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralValueClaimed_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<CoolerLoan_Filter>;
  secondsSinceExpiry?: InputMaybe<Scalars["BigInt"]>;
  secondsSinceExpiry_not?: InputMaybe<Scalars["BigInt"]>;
  secondsSinceExpiry_gt?: InputMaybe<Scalars["BigInt"]>;
  secondsSinceExpiry_lt?: InputMaybe<Scalars["BigInt"]>;
  secondsSinceExpiry_gte?: InputMaybe<Scalars["BigInt"]>;
  secondsSinceExpiry_lte?: InputMaybe<Scalars["BigInt"]>;
  secondsSinceExpiry_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  secondsSinceExpiry_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  clearinghouseSnapshot?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_?: InputMaybe<ClearinghouseSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimDefaultedLoanEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimDefaultedLoanEvent_Filter>>>;
};

export enum ClaimDefaultedLoanEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  CollateralQuantityClaimed = "collateralQuantityClaimed",
  CollateralPrice = "collateralPrice",
  CollateralValueClaimed = "collateralValueClaimed",
  Loan = "loan",
  LoanId = "loan__id",
  LoanCreatedBlock = "loan__createdBlock",
  LoanCreatedTimestamp = "loan__createdTimestamp",
  LoanCreatedTransaction = "loan__createdTransaction",
  LoanCooler = "loan__cooler",
  LoanLoanId = "loan__loanId",
  LoanBorrower = "loan__borrower",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  SecondsSinceExpiry = "secondsSinceExpiry",
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotTransactionHash = "clearinghouseSnapshot__transactionHash",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotReserveToken = "clearinghouseSnapshot__reserveToken",
  ClearinghouseSnapshotSReserveToken = "clearinghouseSnapshot__sReserveToken",
  ClearinghouseSnapshotReserveBalance = "clearinghouseSnapshot__reserveBalance",
  ClearinghouseSnapshotSReserveBalance = "clearinghouseSnapshot__sReserveBalance",
  ClearinghouseSnapshotSReserveInReserveBalance = "clearinghouseSnapshot__sReserveInReserveBalance",
  ClearinghouseSnapshotTreasuryReserveBalance = "clearinghouseSnapshot__treasuryReserveBalance",
  ClearinghouseSnapshotTreasurySReserveBalance = "clearinghouseSnapshot__treasurySReserveBalance",
  ClearinghouseSnapshotTreasurySReserveInReserveBalance = "clearinghouseSnapshot__treasurySReserveInReserveBalance",
}

export type ClearLoanRequestEvent = {
  __typename?: "ClearLoanRequestEvent";
  /**
   * Record ID.
   *
   * In the format of `cooler-requestId`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * Request that created the loan.
   *
   */
  request: CoolerLoanRequest;
  /**
   * The loan that was created.
   *
   */
  loan: CoolerLoan;
  /**
   * Snapshot of the Clearinghouse at the time of the event.
   *
   */
  clearinghouseSnapshot: ClearinghouseSnapshot;
};

export type ClearLoanRequestEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  request?: InputMaybe<Scalars["String"]>;
  request_not?: InputMaybe<Scalars["String"]>;
  request_gt?: InputMaybe<Scalars["String"]>;
  request_lt?: InputMaybe<Scalars["String"]>;
  request_gte?: InputMaybe<Scalars["String"]>;
  request_lte?: InputMaybe<Scalars["String"]>;
  request_in?: InputMaybe<Array<Scalars["String"]>>;
  request_not_in?: InputMaybe<Array<Scalars["String"]>>;
  request_contains?: InputMaybe<Scalars["String"]>;
  request_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_not_contains?: InputMaybe<Scalars["String"]>;
  request_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_starts_with?: InputMaybe<Scalars["String"]>;
  request_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_starts_with?: InputMaybe<Scalars["String"]>;
  request_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_ends_with?: InputMaybe<Scalars["String"]>;
  request_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_ends_with?: InputMaybe<Scalars["String"]>;
  request_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_?: InputMaybe<CoolerLoanRequest_Filter>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<CoolerLoan_Filter>;
  clearinghouseSnapshot?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_?: InputMaybe<ClearinghouseSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClearLoanRequestEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClearLoanRequestEvent_Filter>>>;
};

export enum ClearLoanRequestEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  Request = "request",
  RequestId = "request__id",
  RequestCreatedBlock = "request__createdBlock",
  RequestCreatedTimestamp = "request__createdTimestamp",
  RequestCreatedTransaction = "request__createdTransaction",
  RequestCooler = "request__cooler",
  RequestRequestId = "request__requestId",
  RequestBorrower = "request__borrower",
  RequestCollateralToken = "request__collateralToken",
  RequestDebtToken = "request__debtToken",
  RequestAmount = "request__amount",
  RequestInterestPercentage = "request__interestPercentage",
  RequestLoanToCollateralRatio = "request__loanToCollateralRatio",
  RequestDurationSeconds = "request__durationSeconds",
  RequestIsRescinded = "request__isRescinded",
  Loan = "loan",
  LoanId = "loan__id",
  LoanCreatedBlock = "loan__createdBlock",
  LoanCreatedTimestamp = "loan__createdTimestamp",
  LoanCreatedTransaction = "loan__createdTransaction",
  LoanCooler = "loan__cooler",
  LoanLoanId = "loan__loanId",
  LoanBorrower = "loan__borrower",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotTransactionHash = "clearinghouseSnapshot__transactionHash",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotReserveToken = "clearinghouseSnapshot__reserveToken",
  ClearinghouseSnapshotSReserveToken = "clearinghouseSnapshot__sReserveToken",
  ClearinghouseSnapshotReserveBalance = "clearinghouseSnapshot__reserveBalance",
  ClearinghouseSnapshotSReserveBalance = "clearinghouseSnapshot__sReserveBalance",
  ClearinghouseSnapshotSReserveInReserveBalance = "clearinghouseSnapshot__sReserveInReserveBalance",
  ClearinghouseSnapshotTreasuryReserveBalance = "clearinghouseSnapshot__treasuryReserveBalance",
  ClearinghouseSnapshotTreasurySReserveBalance = "clearinghouseSnapshot__treasurySReserveBalance",
  ClearinghouseSnapshotTreasurySReserveInReserveBalance = "clearinghouseSnapshot__treasurySReserveInReserveBalance",
}

export type Clearinghouse = {
  __typename?: "Clearinghouse";
  /**
   * Record ID.
   *
   * In the format of `address`.
   *
   */
  id: Scalars["String"];
  /**
   * Address of the Clearinghouse.
   *
   */
  address: Scalars["Bytes"];
  /**
   * Version of the Clearinghouse.
   *
   */
  version: Scalars["String"];
  /**
   * ClearinghouseSingleton allows all Clearinghouses to be linked to the same record.
   *
   */
  singleton: ClearinghouseSingleton;
  /**
   * Address of the CoolerFactory.
   *
   */
  coolerFactoryAddress: Scalars["Bytes"];
  /**
   * Address of the collateral token.
   *
   */
  collateralToken: Scalars["Bytes"];
  /**
   * Number of decimals of the collateral token.
   *
   */
  collateralTokenDecimals: Scalars["Int"];
  /**
   * Address of the reserve (and debt) token.
   *
   */
  reserveToken: Scalars["Bytes"];
  /**
   * Number of decimals of the reserve token.
   *
   */
  reserveTokenDecimals: Scalars["Int"];
  /**
   * Address of the sReserve token.
   *
   */
  sReserveToken: Scalars["Bytes"];
  /**
   * Number of decimals of the sReserve token.
   *
   */
  sReserveTokenDecimals: Scalars["Int"];
  /**
   * Annual interest rate.
   *
   * In the format of 0.1 = 10%.
   *
   */
  interestRate: Scalars["BigDecimal"];
  /**
   * Duration of loans in seconds.
   *
   */
  duration: Scalars["BigInt"];
  /**
   * Frequency of rebalances in seconds.
   *
   */
  fundCadence: Scalars["BigInt"];
  /**
   * Amount of reserves required to be in the Clearinghouse.
   *
   */
  fundAmount: Scalars["BigDecimal"];
  /**
   * Ratio of the quantity of debt token to 1 collateral token, e.g. 3000 reserve/gOHM
   *
   */
  loanToCollateral: Scalars["BigDecimal"];
  loans: Array<CoolerLoan>;
  snapshots: Array<ClearinghouseSnapshot>;
};

export type ClearinghouseLoansArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CoolerLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoolerLoan_Filter>;
};

export type ClearinghouseSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearinghouseSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearinghouseSnapshot_Filter>;
};

export type ClearinghouseSingleton = {
  __typename?: "ClearinghouseSingleton";
  /**
   * Record ID.
   *
   */
  id: Scalars["String"];
  clearinghouses: Array<Clearinghouse>;
};

export type ClearinghouseSingletonClearinghousesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Clearinghouse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clearinghouse_Filter>;
};

export type ClearinghouseSingleton_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouses_?: InputMaybe<Clearinghouse_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClearinghouseSingleton_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClearinghouseSingleton_Filter>>>;
};

export enum ClearinghouseSingleton_OrderBy {
  Id = "id",
  Clearinghouses = "clearinghouses",
}

export type ClearinghouseSnapshot = {
  __typename?: "ClearinghouseSnapshot";
  /**
   * The id of the snapshot.
   *
   * In the format of `address-blockNumber-logIndex`.
   *
   */
  id: Scalars["String"];
  /**
   * Snapshot date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * The Clearinghouse that the snapshot is for.
   *
   */
  clearinghouse: Clearinghouse;
  /**
   * Whether the Clearinghouse is active.
   *
   */
  isActive: Scalars["Boolean"];
  /**
   * Timestamp of the next rebalance.
   *
   */
  nextRebalanceTimestamp: Scalars["BigInt"];
  /**
   * Total interest receivables.
   *
   */
  interestReceivables: Scalars["BigDecimal"];
  /**
   * Total principal receivables.
   *
   */
  principalReceivables: Scalars["BigDecimal"];
  /**
   * Address of the reserve token.
   *
   */
  reserveToken: Scalars["Bytes"];
  /**
   * Address of the sReserve token.
   *
   */
  sReserveToken: Scalars["Bytes"];
  /**
   * Reserve balance of the clearinghouse.
   *
   */
  reserveBalance: Scalars["BigDecimal"];
  /**
   * sReserve balance of the clearinghouse.
   *
   */
  sReserveBalance: Scalars["BigDecimal"];
  /**
   * sReserve balance of the clearinghouse, in terms of reserve tokens.
   *
   */
  sReserveInReserveBalance: Scalars["BigDecimal"];
  /**
   * Reserve balance of the treasury.
   *
   */
  treasuryReserveBalance: Scalars["BigDecimal"];
  /**
   * sReserve balance of the treasury.
   *
   */
  treasurySReserveBalance: Scalars["BigDecimal"];
  /**
   * sReserve balance of the treasury, in terms of reserve tokens.
   *
   */
  treasurySReserveInReserveBalance: Scalars["BigDecimal"];
  rebalanceEvents: Array<RebalanceEvent>;
  defundEvents: Array<DefundEvent>;
  creationEvents: Array<ClearLoanRequestEvent>;
  defaultedClaimEvents: Array<ClaimDefaultedLoanEvent>;
  repaymentEvents: Array<RepayLoanEvent>;
  extendEvents: Array<ExtendLoanEvent>;
};

export type ClearinghouseSnapshotRebalanceEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceEvent_Filter>;
};

export type ClearinghouseSnapshotDefundEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DefundEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DefundEvent_Filter>;
};

export type ClearinghouseSnapshotCreationEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearLoanRequestEvent_Filter>;
};

export type ClearinghouseSnapshotDefaultedClaimEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimDefaultedLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimDefaultedLoanEvent_Filter>;
};

export type ClearinghouseSnapshotRepaymentEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RepayLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayLoanEvent_Filter>;
};

export type ClearinghouseSnapshotExtendEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ExtendLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExtendLoanEvent_Filter>;
};

export type ClearinghouseSnapshot_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse?: InputMaybe<Scalars["String"]>;
  clearinghouse_not?: InputMaybe<Scalars["String"]>;
  clearinghouse_gt?: InputMaybe<Scalars["String"]>;
  clearinghouse_lt?: InputMaybe<Scalars["String"]>;
  clearinghouse_gte?: InputMaybe<Scalars["String"]>;
  clearinghouse_lte?: InputMaybe<Scalars["String"]>;
  clearinghouse_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_?: InputMaybe<Clearinghouse_Filter>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isActive_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isActive_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  nextRebalanceTimestamp?: InputMaybe<Scalars["BigInt"]>;
  nextRebalanceTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  nextRebalanceTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  nextRebalanceTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  nextRebalanceTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  nextRebalanceTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  nextRebalanceTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nextRebalanceTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  interestReceivables?: InputMaybe<Scalars["BigDecimal"]>;
  interestReceivables_not?: InputMaybe<Scalars["BigDecimal"]>;
  interestReceivables_gt?: InputMaybe<Scalars["BigDecimal"]>;
  interestReceivables_lt?: InputMaybe<Scalars["BigDecimal"]>;
  interestReceivables_gte?: InputMaybe<Scalars["BigDecimal"]>;
  interestReceivables_lte?: InputMaybe<Scalars["BigDecimal"]>;
  interestReceivables_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interestReceivables_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  principalReceivables?: InputMaybe<Scalars["BigDecimal"]>;
  principalReceivables_not?: InputMaybe<Scalars["BigDecimal"]>;
  principalReceivables_gt?: InputMaybe<Scalars["BigDecimal"]>;
  principalReceivables_lt?: InputMaybe<Scalars["BigDecimal"]>;
  principalReceivables_gte?: InputMaybe<Scalars["BigDecimal"]>;
  principalReceivables_lte?: InputMaybe<Scalars["BigDecimal"]>;
  principalReceivables_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  principalReceivables_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveToken?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_not?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_gt?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_lt?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_gte?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_lte?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveToken_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_not?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_gt?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_lt?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_gte?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_lte?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sReserveToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sReserveToken_contains?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  reserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  reserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  reserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  reserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  reserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sReserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sReserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sReserveInReserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveInReserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveInReserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveInReserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveInReserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveInReserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sReserveInReserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sReserveInReserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryReserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryReserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryReserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySReserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySReserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySReserveInReserveBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveInReserveBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveInReserveBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveInReserveBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveInReserveBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveInReserveBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySReserveInReserveBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySReserveInReserveBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rebalanceEvents_?: InputMaybe<RebalanceEvent_Filter>;
  defundEvents_?: InputMaybe<DefundEvent_Filter>;
  creationEvents_?: InputMaybe<ClearLoanRequestEvent_Filter>;
  defaultedClaimEvents_?: InputMaybe<ClaimDefaultedLoanEvent_Filter>;
  repaymentEvents_?: InputMaybe<RepayLoanEvent_Filter>;
  extendEvents_?: InputMaybe<ExtendLoanEvent_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClearinghouseSnapshot_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClearinghouseSnapshot_Filter>>>;
};

export enum ClearinghouseSnapshot_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  Clearinghouse = "clearinghouse",
  ClearinghouseId = "clearinghouse__id",
  ClearinghouseAddress = "clearinghouse__address",
  ClearinghouseVersion = "clearinghouse__version",
  ClearinghouseCoolerFactoryAddress = "clearinghouse__coolerFactoryAddress",
  ClearinghouseCollateralToken = "clearinghouse__collateralToken",
  ClearinghouseCollateralTokenDecimals = "clearinghouse__collateralTokenDecimals",
  ClearinghouseReserveToken = "clearinghouse__reserveToken",
  ClearinghouseReserveTokenDecimals = "clearinghouse__reserveTokenDecimals",
  ClearinghouseSReserveToken = "clearinghouse__sReserveToken",
  ClearinghouseSReserveTokenDecimals = "clearinghouse__sReserveTokenDecimals",
  ClearinghouseInterestRate = "clearinghouse__interestRate",
  ClearinghouseDuration = "clearinghouse__duration",
  ClearinghouseFundCadence = "clearinghouse__fundCadence",
  ClearinghouseFundAmount = "clearinghouse__fundAmount",
  ClearinghouseLoanToCollateral = "clearinghouse__loanToCollateral",
  IsActive = "isActive",
  NextRebalanceTimestamp = "nextRebalanceTimestamp",
  InterestReceivables = "interestReceivables",
  PrincipalReceivables = "principalReceivables",
  ReserveToken = "reserveToken",
  SReserveToken = "sReserveToken",
  ReserveBalance = "reserveBalance",
  SReserveBalance = "sReserveBalance",
  SReserveInReserveBalance = "sReserveInReserveBalance",
  TreasuryReserveBalance = "treasuryReserveBalance",
  TreasurySReserveBalance = "treasurySReserveBalance",
  TreasurySReserveInReserveBalance = "treasurySReserveInReserveBalance",
  RebalanceEvents = "rebalanceEvents",
  DefundEvents = "defundEvents",
  CreationEvents = "creationEvents",
  DefaultedClaimEvents = "defaultedClaimEvents",
  RepaymentEvents = "repaymentEvents",
  ExtendEvents = "extendEvents",
}

export type Clearinghouse_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  version?: InputMaybe<Scalars["String"]>;
  version_not?: InputMaybe<Scalars["String"]>;
  version_gt?: InputMaybe<Scalars["String"]>;
  version_lt?: InputMaybe<Scalars["String"]>;
  version_gte?: InputMaybe<Scalars["String"]>;
  version_lte?: InputMaybe<Scalars["String"]>;
  version_in?: InputMaybe<Array<Scalars["String"]>>;
  version_not_in?: InputMaybe<Array<Scalars["String"]>>;
  version_contains?: InputMaybe<Scalars["String"]>;
  version_contains_nocase?: InputMaybe<Scalars["String"]>;
  version_not_contains?: InputMaybe<Scalars["String"]>;
  version_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  version_starts_with?: InputMaybe<Scalars["String"]>;
  version_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  version_not_starts_with?: InputMaybe<Scalars["String"]>;
  version_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  version_ends_with?: InputMaybe<Scalars["String"]>;
  version_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  version_not_ends_with?: InputMaybe<Scalars["String"]>;
  version_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  singleton?: InputMaybe<Scalars["String"]>;
  singleton_not?: InputMaybe<Scalars["String"]>;
  singleton_gt?: InputMaybe<Scalars["String"]>;
  singleton_lt?: InputMaybe<Scalars["String"]>;
  singleton_gte?: InputMaybe<Scalars["String"]>;
  singleton_lte?: InputMaybe<Scalars["String"]>;
  singleton_in?: InputMaybe<Array<Scalars["String"]>>;
  singleton_not_in?: InputMaybe<Array<Scalars["String"]>>;
  singleton_contains?: InputMaybe<Scalars["String"]>;
  singleton_contains_nocase?: InputMaybe<Scalars["String"]>;
  singleton_not_contains?: InputMaybe<Scalars["String"]>;
  singleton_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  singleton_starts_with?: InputMaybe<Scalars["String"]>;
  singleton_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  singleton_not_starts_with?: InputMaybe<Scalars["String"]>;
  singleton_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  singleton_ends_with?: InputMaybe<Scalars["String"]>;
  singleton_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  singleton_not_ends_with?: InputMaybe<Scalars["String"]>;
  singleton_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  singleton_?: InputMaybe<ClearinghouseSingleton_Filter>;
  coolerFactoryAddress?: InputMaybe<Scalars["Bytes"]>;
  coolerFactoryAddress_not?: InputMaybe<Scalars["Bytes"]>;
  coolerFactoryAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  coolerFactoryAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  coolerFactoryAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  coolerFactoryAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  coolerFactoryAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  coolerFactoryAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  coolerFactoryAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  coolerFactoryAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralToken_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralTokenDecimals?: InputMaybe<Scalars["Int"]>;
  collateralTokenDecimals_not?: InputMaybe<Scalars["Int"]>;
  collateralTokenDecimals_gt?: InputMaybe<Scalars["Int"]>;
  collateralTokenDecimals_lt?: InputMaybe<Scalars["Int"]>;
  collateralTokenDecimals_gte?: InputMaybe<Scalars["Int"]>;
  collateralTokenDecimals_lte?: InputMaybe<Scalars["Int"]>;
  collateralTokenDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  collateralTokenDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  reserveToken?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_not?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_gt?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_lt?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_gte?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_lte?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  reserveToken_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  reserveTokenDecimals?: InputMaybe<Scalars["Int"]>;
  reserveTokenDecimals_not?: InputMaybe<Scalars["Int"]>;
  reserveTokenDecimals_gt?: InputMaybe<Scalars["Int"]>;
  reserveTokenDecimals_lt?: InputMaybe<Scalars["Int"]>;
  reserveTokenDecimals_gte?: InputMaybe<Scalars["Int"]>;
  reserveTokenDecimals_lte?: InputMaybe<Scalars["Int"]>;
  reserveTokenDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  reserveTokenDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  sReserveToken?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_not?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_gt?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_lt?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_gte?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_lte?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sReserveToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sReserveToken_contains?: InputMaybe<Scalars["Bytes"]>;
  sReserveToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sReserveTokenDecimals?: InputMaybe<Scalars["Int"]>;
  sReserveTokenDecimals_not?: InputMaybe<Scalars["Int"]>;
  sReserveTokenDecimals_gt?: InputMaybe<Scalars["Int"]>;
  sReserveTokenDecimals_lt?: InputMaybe<Scalars["Int"]>;
  sReserveTokenDecimals_gte?: InputMaybe<Scalars["Int"]>;
  sReserveTokenDecimals_lte?: InputMaybe<Scalars["Int"]>;
  sReserveTokenDecimals_in?: InputMaybe<Array<Scalars["Int"]>>;
  sReserveTokenDecimals_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  interestRate?: InputMaybe<Scalars["BigDecimal"]>;
  interestRate_not?: InputMaybe<Scalars["BigDecimal"]>;
  interestRate_gt?: InputMaybe<Scalars["BigDecimal"]>;
  interestRate_lt?: InputMaybe<Scalars["BigDecimal"]>;
  interestRate_gte?: InputMaybe<Scalars["BigDecimal"]>;
  interestRate_lte?: InputMaybe<Scalars["BigDecimal"]>;
  interestRate_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interestRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  duration?: InputMaybe<Scalars["BigInt"]>;
  duration_not?: InputMaybe<Scalars["BigInt"]>;
  duration_gt?: InputMaybe<Scalars["BigInt"]>;
  duration_lt?: InputMaybe<Scalars["BigInt"]>;
  duration_gte?: InputMaybe<Scalars["BigInt"]>;
  duration_lte?: InputMaybe<Scalars["BigInt"]>;
  duration_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  duration_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundCadence?: InputMaybe<Scalars["BigInt"]>;
  fundCadence_not?: InputMaybe<Scalars["BigInt"]>;
  fundCadence_gt?: InputMaybe<Scalars["BigInt"]>;
  fundCadence_lt?: InputMaybe<Scalars["BigInt"]>;
  fundCadence_gte?: InputMaybe<Scalars["BigInt"]>;
  fundCadence_lte?: InputMaybe<Scalars["BigInt"]>;
  fundCadence_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundCadence_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundAmount?: InputMaybe<Scalars["BigDecimal"]>;
  fundAmount_not?: InputMaybe<Scalars["BigDecimal"]>;
  fundAmount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  fundAmount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  fundAmount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  fundAmount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  fundAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  fundAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  loanToCollateral?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateral_not?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateral_gt?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateral_lt?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateral_gte?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateral_lte?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateral_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  loanToCollateral_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  loans_?: InputMaybe<CoolerLoan_Filter>;
  snapshots_?: InputMaybe<ClearinghouseSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Clearinghouse_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<Clearinghouse_Filter>>>;
};

export enum Clearinghouse_OrderBy {
  Id = "id",
  Address = "address",
  Version = "version",
  Singleton = "singleton",
  SingletonId = "singleton__id",
  CoolerFactoryAddress = "coolerFactoryAddress",
  CollateralToken = "collateralToken",
  CollateralTokenDecimals = "collateralTokenDecimals",
  ReserveToken = "reserveToken",
  ReserveTokenDecimals = "reserveTokenDecimals",
  SReserveToken = "sReserveToken",
  SReserveTokenDecimals = "sReserveTokenDecimals",
  InterestRate = "interestRate",
  Duration = "duration",
  FundCadence = "fundCadence",
  FundAmount = "fundAmount",
  LoanToCollateral = "loanToCollateral",
  Loans = "loans",
  Snapshots = "snapshots",
}

export type CoolerLoan = {
  __typename?: "CoolerLoan";
  /**
   * Record ID.
   *
   * In the format of `cooler-loanId`.
   *
   */
  id: Scalars["String"];
  /**
   * Block number at the time of the loan.
   *
   */
  createdBlock: Scalars["BigInt"];
  /**
   * Timestamp at the time of the loan.
   *
   */
  createdTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the loan.
   *
   */
  createdTransaction: Scalars["Bytes"];
  /**
   * Address of the Cooler.
   *
   */
  cooler: Scalars["Bytes"];
  /**
   * Request that created this loan.
   *
   */
  request: CoolerLoanRequest;
  /**
   * Loan ID.
   *
   * The ID is unique to the Cooler.
   *
   */
  loanId: Scalars["BigInt"];
  /**
   * Address of the borrower.
   *
   */
  borrower: Scalars["Bytes"];
  /**
   * The Clearinghouse that created the loan.
   *
   */
  clearinghouse: Clearinghouse;
  /**
   * Interest to be paid.
   *
   */
  interest: Scalars["BigDecimal"];
  /**
   * Principal to be paid.
   *
   */
  principal: Scalars["BigDecimal"];
  /**
   * Collateral held.
   *
   */
  collateral: Scalars["BigDecimal"];
  /**
   * Expiry timestamp.
   *
   */
  expiryTimestamp: Scalars["BigInt"];
  /**
   * Whether the loan has a callback.
   *
   */
  hasCallback: Scalars["Boolean"];
  creationEvents: Array<ClearLoanRequestEvent>;
  defaultedClaimEvents: Array<ClaimDefaultedLoanEvent>;
  repaymentEvents: Array<RepayLoanEvent>;
  extendEvents: Array<ExtendLoanEvent>;
};

export type CoolerLoanCreationEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearLoanRequestEvent_Filter>;
};

export type CoolerLoanDefaultedClaimEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimDefaultedLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimDefaultedLoanEvent_Filter>;
};

export type CoolerLoanRepaymentEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RepayLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayLoanEvent_Filter>;
};

export type CoolerLoanExtendEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ExtendLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExtendLoanEvent_Filter>;
};

export type CoolerLoanRequest = {
  __typename?: "CoolerLoanRequest";
  /**
   * Record ID.
   *
   * In the format of `cooler-requestId`.
   *
   */
  id: Scalars["String"];
  /**
   * Block number at the time of the request.
   *
   */
  createdBlock: Scalars["BigInt"];
  /**
   * Timestamp at the time of the request.
   *
   */
  createdTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the request.
   *
   */
  createdTransaction: Scalars["Bytes"];
  /**
   * Address of the Cooler.
   *
   */
  cooler: Scalars["Bytes"];
  /**
   * Request id.
   *
   */
  requestId: Scalars["BigInt"];
  /**
   * Address of the borrower.
   *
   */
  borrower: Scalars["Bytes"];
  /**
   * Address of the collateral token.
   *
   */
  collateralToken: Scalars["Bytes"];
  /**
   * Address of the debt token.
   *
   */
  debtToken: Scalars["Bytes"];
  /**
   * Amount to be borrowed.
   *
   */
  amount: Scalars["BigDecimal"];
  /**
   * Annualized percentage to be paid as interest. Represented as a decimal, e.g. 0.1 = 10%
   *
   */
  interestPercentage: Scalars["BigDecimal"];
  /**
   * Ratio of the quantity of debt token to 1 collateral token, e.g. 3000 DAI/gOHM
   *
   */
  loanToCollateralRatio: Scalars["BigDecimal"];
  /**
   * Duration of the loan in seconds.
   *
   */
  durationSeconds: Scalars["BigInt"];
  /**
   * Whether the request has been rescinded.
   *
   */
  isRescinded: Scalars["Boolean"];
  requestEvents: Array<RequestLoanEvent>;
  rescindEvents: Array<RescindLoanRequestEvent>;
  clearEvents: Array<ClearLoanRequestEvent>;
  loans: Array<CoolerLoan>;
};

export type CoolerLoanRequestRequestEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestLoanEvent_Filter>;
};

export type CoolerLoanRequestRescindEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RescindLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RescindLoanRequestEvent_Filter>;
};

export type CoolerLoanRequestClearEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearLoanRequestEvent_Filter>;
};

export type CoolerLoanRequestLoansArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CoolerLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoolerLoan_Filter>;
};

export type CoolerLoanRequest_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  createdBlock?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_not?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTransaction?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_not?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_gt?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_lt?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_gte?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_lte?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  createdTransaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  createdTransaction_contains?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  cooler?: InputMaybe<Scalars["Bytes"]>;
  cooler_not?: InputMaybe<Scalars["Bytes"]>;
  cooler_gt?: InputMaybe<Scalars["Bytes"]>;
  cooler_lt?: InputMaybe<Scalars["Bytes"]>;
  cooler_gte?: InputMaybe<Scalars["Bytes"]>;
  cooler_lte?: InputMaybe<Scalars["Bytes"]>;
  cooler_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  cooler_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  cooler_contains?: InputMaybe<Scalars["Bytes"]>;
  cooler_not_contains?: InputMaybe<Scalars["Bytes"]>;
  requestId?: InputMaybe<Scalars["BigInt"]>;
  requestId_not?: InputMaybe<Scalars["BigInt"]>;
  requestId_gt?: InputMaybe<Scalars["BigInt"]>;
  requestId_lt?: InputMaybe<Scalars["BigInt"]>;
  requestId_gte?: InputMaybe<Scalars["BigInt"]>;
  requestId_lte?: InputMaybe<Scalars["BigInt"]>;
  requestId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  requestId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrower?: InputMaybe<Scalars["Bytes"]>;
  borrower_not?: InputMaybe<Scalars["Bytes"]>;
  borrower_gt?: InputMaybe<Scalars["Bytes"]>;
  borrower_lt?: InputMaybe<Scalars["Bytes"]>;
  borrower_gte?: InputMaybe<Scalars["Bytes"]>;
  borrower_lte?: InputMaybe<Scalars["Bytes"]>;
  borrower_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  borrower_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  borrower_contains?: InputMaybe<Scalars["Bytes"]>;
  borrower_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralToken_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  debtToken?: InputMaybe<Scalars["Bytes"]>;
  debtToken_not?: InputMaybe<Scalars["Bytes"]>;
  debtToken_gt?: InputMaybe<Scalars["Bytes"]>;
  debtToken_lt?: InputMaybe<Scalars["Bytes"]>;
  debtToken_gte?: InputMaybe<Scalars["Bytes"]>;
  debtToken_lte?: InputMaybe<Scalars["Bytes"]>;
  debtToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  debtToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  debtToken_contains?: InputMaybe<Scalars["Bytes"]>;
  debtToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interestPercentage?: InputMaybe<Scalars["BigDecimal"]>;
  interestPercentage_not?: InputMaybe<Scalars["BigDecimal"]>;
  interestPercentage_gt?: InputMaybe<Scalars["BigDecimal"]>;
  interestPercentage_lt?: InputMaybe<Scalars["BigDecimal"]>;
  interestPercentage_gte?: InputMaybe<Scalars["BigDecimal"]>;
  interestPercentage_lte?: InputMaybe<Scalars["BigDecimal"]>;
  interestPercentage_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interestPercentage_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  loanToCollateralRatio?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateralRatio_not?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateralRatio_gt?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateralRatio_lt?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateralRatio_gte?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateralRatio_lte?: InputMaybe<Scalars["BigDecimal"]>;
  loanToCollateralRatio_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  loanToCollateralRatio_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  durationSeconds?: InputMaybe<Scalars["BigInt"]>;
  durationSeconds_not?: InputMaybe<Scalars["BigInt"]>;
  durationSeconds_gt?: InputMaybe<Scalars["BigInt"]>;
  durationSeconds_lt?: InputMaybe<Scalars["BigInt"]>;
  durationSeconds_gte?: InputMaybe<Scalars["BigInt"]>;
  durationSeconds_lte?: InputMaybe<Scalars["BigInt"]>;
  durationSeconds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  durationSeconds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  isRescinded?: InputMaybe<Scalars["Boolean"]>;
  isRescinded_not?: InputMaybe<Scalars["Boolean"]>;
  isRescinded_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isRescinded_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  requestEvents_?: InputMaybe<RequestLoanEvent_Filter>;
  rescindEvents_?: InputMaybe<RescindLoanRequestEvent_Filter>;
  clearEvents_?: InputMaybe<ClearLoanRequestEvent_Filter>;
  loans_?: InputMaybe<CoolerLoan_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CoolerLoanRequest_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<CoolerLoanRequest_Filter>>>;
};

export enum CoolerLoanRequest_OrderBy {
  Id = "id",
  CreatedBlock = "createdBlock",
  CreatedTimestamp = "createdTimestamp",
  CreatedTransaction = "createdTransaction",
  Cooler = "cooler",
  RequestId = "requestId",
  Borrower = "borrower",
  CollateralToken = "collateralToken",
  DebtToken = "debtToken",
  Amount = "amount",
  InterestPercentage = "interestPercentage",
  LoanToCollateralRatio = "loanToCollateralRatio",
  DurationSeconds = "durationSeconds",
  IsRescinded = "isRescinded",
  RequestEvents = "requestEvents",
  RescindEvents = "rescindEvents",
  ClearEvents = "clearEvents",
  Loans = "loans",
}

export type CoolerLoan_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  createdBlock?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_not?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_gt?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_lt?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_gte?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_lte?: InputMaybe<Scalars["BigInt"]>;
  createdBlock_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  createdTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdTransaction?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_not?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_gt?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_lt?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_gte?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_lte?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  createdTransaction_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  createdTransaction_contains?: InputMaybe<Scalars["Bytes"]>;
  createdTransaction_not_contains?: InputMaybe<Scalars["Bytes"]>;
  cooler?: InputMaybe<Scalars["Bytes"]>;
  cooler_not?: InputMaybe<Scalars["Bytes"]>;
  cooler_gt?: InputMaybe<Scalars["Bytes"]>;
  cooler_lt?: InputMaybe<Scalars["Bytes"]>;
  cooler_gte?: InputMaybe<Scalars["Bytes"]>;
  cooler_lte?: InputMaybe<Scalars["Bytes"]>;
  cooler_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  cooler_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  cooler_contains?: InputMaybe<Scalars["Bytes"]>;
  cooler_not_contains?: InputMaybe<Scalars["Bytes"]>;
  request?: InputMaybe<Scalars["String"]>;
  request_not?: InputMaybe<Scalars["String"]>;
  request_gt?: InputMaybe<Scalars["String"]>;
  request_lt?: InputMaybe<Scalars["String"]>;
  request_gte?: InputMaybe<Scalars["String"]>;
  request_lte?: InputMaybe<Scalars["String"]>;
  request_in?: InputMaybe<Array<Scalars["String"]>>;
  request_not_in?: InputMaybe<Array<Scalars["String"]>>;
  request_contains?: InputMaybe<Scalars["String"]>;
  request_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_not_contains?: InputMaybe<Scalars["String"]>;
  request_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_starts_with?: InputMaybe<Scalars["String"]>;
  request_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_starts_with?: InputMaybe<Scalars["String"]>;
  request_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_ends_with?: InputMaybe<Scalars["String"]>;
  request_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_ends_with?: InputMaybe<Scalars["String"]>;
  request_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_?: InputMaybe<CoolerLoanRequest_Filter>;
  loanId?: InputMaybe<Scalars["BigInt"]>;
  loanId_not?: InputMaybe<Scalars["BigInt"]>;
  loanId_gt?: InputMaybe<Scalars["BigInt"]>;
  loanId_lt?: InputMaybe<Scalars["BigInt"]>;
  loanId_gte?: InputMaybe<Scalars["BigInt"]>;
  loanId_lte?: InputMaybe<Scalars["BigInt"]>;
  loanId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loanId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  borrower?: InputMaybe<Scalars["Bytes"]>;
  borrower_not?: InputMaybe<Scalars["Bytes"]>;
  borrower_gt?: InputMaybe<Scalars["Bytes"]>;
  borrower_lt?: InputMaybe<Scalars["Bytes"]>;
  borrower_gte?: InputMaybe<Scalars["Bytes"]>;
  borrower_lte?: InputMaybe<Scalars["Bytes"]>;
  borrower_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  borrower_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  borrower_contains?: InputMaybe<Scalars["Bytes"]>;
  borrower_not_contains?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse?: InputMaybe<Scalars["String"]>;
  clearinghouse_not?: InputMaybe<Scalars["String"]>;
  clearinghouse_gt?: InputMaybe<Scalars["String"]>;
  clearinghouse_lt?: InputMaybe<Scalars["String"]>;
  clearinghouse_gte?: InputMaybe<Scalars["String"]>;
  clearinghouse_lte?: InputMaybe<Scalars["String"]>;
  clearinghouse_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_?: InputMaybe<Clearinghouse_Filter>;
  interest?: InputMaybe<Scalars["BigDecimal"]>;
  interest_not?: InputMaybe<Scalars["BigDecimal"]>;
  interest_gt?: InputMaybe<Scalars["BigDecimal"]>;
  interest_lt?: InputMaybe<Scalars["BigDecimal"]>;
  interest_gte?: InputMaybe<Scalars["BigDecimal"]>;
  interest_lte?: InputMaybe<Scalars["BigDecimal"]>;
  interest_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interest_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  principal?: InputMaybe<Scalars["BigDecimal"]>;
  principal_not?: InputMaybe<Scalars["BigDecimal"]>;
  principal_gt?: InputMaybe<Scalars["BigDecimal"]>;
  principal_lt?: InputMaybe<Scalars["BigDecimal"]>;
  principal_gte?: InputMaybe<Scalars["BigDecimal"]>;
  principal_lte?: InputMaybe<Scalars["BigDecimal"]>;
  principal_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  principal_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateral?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateral_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateral_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  expiryTimestamp?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  expiryTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  hasCallback?: InputMaybe<Scalars["Boolean"]>;
  hasCallback_not?: InputMaybe<Scalars["Boolean"]>;
  hasCallback_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  hasCallback_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  creationEvents_?: InputMaybe<ClearLoanRequestEvent_Filter>;
  defaultedClaimEvents_?: InputMaybe<ClaimDefaultedLoanEvent_Filter>;
  repaymentEvents_?: InputMaybe<RepayLoanEvent_Filter>;
  extendEvents_?: InputMaybe<ExtendLoanEvent_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CoolerLoan_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<CoolerLoan_Filter>>>;
};

export enum CoolerLoan_OrderBy {
  Id = "id",
  CreatedBlock = "createdBlock",
  CreatedTimestamp = "createdTimestamp",
  CreatedTransaction = "createdTransaction",
  Cooler = "cooler",
  Request = "request",
  RequestId = "request__id",
  RequestCreatedBlock = "request__createdBlock",
  RequestCreatedTimestamp = "request__createdTimestamp",
  RequestCreatedTransaction = "request__createdTransaction",
  RequestCooler = "request__cooler",
  RequestRequestId = "request__requestId",
  RequestBorrower = "request__borrower",
  RequestCollateralToken = "request__collateralToken",
  RequestDebtToken = "request__debtToken",
  RequestAmount = "request__amount",
  RequestInterestPercentage = "request__interestPercentage",
  RequestLoanToCollateralRatio = "request__loanToCollateralRatio",
  RequestDurationSeconds = "request__durationSeconds",
  RequestIsRescinded = "request__isRescinded",
  LoanId = "loanId",
  Borrower = "borrower",
  Clearinghouse = "clearinghouse",
  ClearinghouseId = "clearinghouse__id",
  ClearinghouseAddress = "clearinghouse__address",
  ClearinghouseVersion = "clearinghouse__version",
  ClearinghouseCoolerFactoryAddress = "clearinghouse__coolerFactoryAddress",
  ClearinghouseCollateralToken = "clearinghouse__collateralToken",
  ClearinghouseCollateralTokenDecimals = "clearinghouse__collateralTokenDecimals",
  ClearinghouseReserveToken = "clearinghouse__reserveToken",
  ClearinghouseReserveTokenDecimals = "clearinghouse__reserveTokenDecimals",
  ClearinghouseSReserveToken = "clearinghouse__sReserveToken",
  ClearinghouseSReserveTokenDecimals = "clearinghouse__sReserveTokenDecimals",
  ClearinghouseInterestRate = "clearinghouse__interestRate",
  ClearinghouseDuration = "clearinghouse__duration",
  ClearinghouseFundCadence = "clearinghouse__fundCadence",
  ClearinghouseFundAmount = "clearinghouse__fundAmount",
  ClearinghouseLoanToCollateral = "clearinghouse__loanToCollateral",
  Interest = "interest",
  Principal = "principal",
  Collateral = "collateral",
  ExpiryTimestamp = "expiryTimestamp",
  HasCallback = "hasCallback",
  CreationEvents = "creationEvents",
  DefaultedClaimEvents = "defaultedClaimEvents",
  RepaymentEvents = "repaymentEvents",
  ExtendEvents = "extendEvents",
}

export type DefundEvent = {
  __typename?: "DefundEvent";
  /**
   * Record ID.
   *
   * In the format of `clearinghouse-blockNumber`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * Address of the Clearinghouse.
   *
   */
  clearinghouse: Clearinghouse;
  /**
   * Snapshot of the Clearinghouse at the time of the event.
   *
   */
  clearinghouseSnapshot: ClearinghouseSnapshot;
  /**
   * Amount of reserve tokens in (positive)/out (negative) of the Clearinghouse.
   *
   */
  amount: Scalars["BigDecimal"];
};

export type DefundEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse?: InputMaybe<Scalars["String"]>;
  clearinghouse_not?: InputMaybe<Scalars["String"]>;
  clearinghouse_gt?: InputMaybe<Scalars["String"]>;
  clearinghouse_lt?: InputMaybe<Scalars["String"]>;
  clearinghouse_gte?: InputMaybe<Scalars["String"]>;
  clearinghouse_lte?: InputMaybe<Scalars["String"]>;
  clearinghouse_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_?: InputMaybe<Clearinghouse_Filter>;
  clearinghouseSnapshot?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_?: InputMaybe<ClearinghouseSnapshot_Filter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DefundEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<DefundEvent_Filter>>>;
};

export enum DefundEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  Clearinghouse = "clearinghouse",
  ClearinghouseId = "clearinghouse__id",
  ClearinghouseAddress = "clearinghouse__address",
  ClearinghouseVersion = "clearinghouse__version",
  ClearinghouseCoolerFactoryAddress = "clearinghouse__coolerFactoryAddress",
  ClearinghouseCollateralToken = "clearinghouse__collateralToken",
  ClearinghouseCollateralTokenDecimals = "clearinghouse__collateralTokenDecimals",
  ClearinghouseReserveToken = "clearinghouse__reserveToken",
  ClearinghouseReserveTokenDecimals = "clearinghouse__reserveTokenDecimals",
  ClearinghouseSReserveToken = "clearinghouse__sReserveToken",
  ClearinghouseSReserveTokenDecimals = "clearinghouse__sReserveTokenDecimals",
  ClearinghouseInterestRate = "clearinghouse__interestRate",
  ClearinghouseDuration = "clearinghouse__duration",
  ClearinghouseFundCadence = "clearinghouse__fundCadence",
  ClearinghouseFundAmount = "clearinghouse__fundAmount",
  ClearinghouseLoanToCollateral = "clearinghouse__loanToCollateral",
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotTransactionHash = "clearinghouseSnapshot__transactionHash",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotReserveToken = "clearinghouseSnapshot__reserveToken",
  ClearinghouseSnapshotSReserveToken = "clearinghouseSnapshot__sReserveToken",
  ClearinghouseSnapshotReserveBalance = "clearinghouseSnapshot__reserveBalance",
  ClearinghouseSnapshotSReserveBalance = "clearinghouseSnapshot__sReserveBalance",
  ClearinghouseSnapshotSReserveInReserveBalance = "clearinghouseSnapshot__sReserveInReserveBalance",
  ClearinghouseSnapshotTreasuryReserveBalance = "clearinghouseSnapshot__treasuryReserveBalance",
  ClearinghouseSnapshotTreasurySReserveBalance = "clearinghouseSnapshot__treasurySReserveBalance",
  ClearinghouseSnapshotTreasurySReserveInReserveBalance = "clearinghouseSnapshot__treasurySReserveInReserveBalance",
  Amount = "amount",
}

export type ExtendLoanEvent = {
  __typename?: "ExtendLoanEvent";
  /**
   * Record ID.
   *
   * In the format of `cooler-loanId`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * Number of duration periods the loan has been extended for.
   *
   */
  periods: Scalars["Int"];
  /**
   * Loan that was extended.
   *
   */
  loan: CoolerLoan;
  /**
   * The new expiry timestamp.
   *
   */
  expiryTimestamp: Scalars["BigInt"];
  /**
   * Amount of interest due after the extension.
   *
   */
  interestDue: Scalars["BigDecimal"];
  /**
   * Snapshot of the Clearinghouse at the time of the event.
   *
   */
  clearinghouseSnapshot: ClearinghouseSnapshot;
};

export type ExtendLoanEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  periods?: InputMaybe<Scalars["Int"]>;
  periods_not?: InputMaybe<Scalars["Int"]>;
  periods_gt?: InputMaybe<Scalars["Int"]>;
  periods_lt?: InputMaybe<Scalars["Int"]>;
  periods_gte?: InputMaybe<Scalars["Int"]>;
  periods_lte?: InputMaybe<Scalars["Int"]>;
  periods_in?: InputMaybe<Array<Scalars["Int"]>>;
  periods_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<CoolerLoan_Filter>;
  expiryTimestamp?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  expiryTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  expiryTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  interestDue?: InputMaybe<Scalars["BigDecimal"]>;
  interestDue_not?: InputMaybe<Scalars["BigDecimal"]>;
  interestDue_gt?: InputMaybe<Scalars["BigDecimal"]>;
  interestDue_lt?: InputMaybe<Scalars["BigDecimal"]>;
  interestDue_gte?: InputMaybe<Scalars["BigDecimal"]>;
  interestDue_lte?: InputMaybe<Scalars["BigDecimal"]>;
  interestDue_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interestDue_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSnapshot?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_?: InputMaybe<ClearinghouseSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ExtendLoanEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<ExtendLoanEvent_Filter>>>;
};

export enum ExtendLoanEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  Periods = "periods",
  Loan = "loan",
  LoanId = "loan__id",
  LoanCreatedBlock = "loan__createdBlock",
  LoanCreatedTimestamp = "loan__createdTimestamp",
  LoanCreatedTransaction = "loan__createdTransaction",
  LoanCooler = "loan__cooler",
  LoanLoanId = "loan__loanId",
  LoanBorrower = "loan__borrower",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  ExpiryTimestamp = "expiryTimestamp",
  InterestDue = "interestDue",
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotTransactionHash = "clearinghouseSnapshot__transactionHash",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotReserveToken = "clearinghouseSnapshot__reserveToken",
  ClearinghouseSnapshotSReserveToken = "clearinghouseSnapshot__sReserveToken",
  ClearinghouseSnapshotReserveBalance = "clearinghouseSnapshot__reserveBalance",
  ClearinghouseSnapshotSReserveBalance = "clearinghouseSnapshot__sReserveBalance",
  ClearinghouseSnapshotSReserveInReserveBalance = "clearinghouseSnapshot__sReserveInReserveBalance",
  ClearinghouseSnapshotTreasuryReserveBalance = "clearinghouseSnapshot__treasuryReserveBalance",
  ClearinghouseSnapshotTreasurySReserveBalance = "clearinghouseSnapshot__treasurySReserveBalance",
  ClearinghouseSnapshotTreasurySReserveInReserveBalance = "clearinghouseSnapshot__treasurySReserveInReserveBalance",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  __typename?: "Query";
  clearinghouseSingleton?: Maybe<ClearinghouseSingleton>;
  clearinghouseSingletons: Array<ClearinghouseSingleton>;
  clearinghouse?: Maybe<Clearinghouse>;
  clearinghouses: Array<Clearinghouse>;
  coolerLoanRequest?: Maybe<CoolerLoanRequest>;
  coolerLoanRequests: Array<CoolerLoanRequest>;
  coolerLoan?: Maybe<CoolerLoan>;
  coolerLoans: Array<CoolerLoan>;
  clearinghouseSnapshot?: Maybe<ClearinghouseSnapshot>;
  clearinghouseSnapshots: Array<ClearinghouseSnapshot>;
  rebalanceEvent?: Maybe<RebalanceEvent>;
  rebalanceEvents: Array<RebalanceEvent>;
  defundEvent?: Maybe<DefundEvent>;
  defundEvents: Array<DefundEvent>;
  requestLoanEvent?: Maybe<RequestLoanEvent>;
  requestLoanEvents: Array<RequestLoanEvent>;
  rescindLoanRequestEvent?: Maybe<RescindLoanRequestEvent>;
  rescindLoanRequestEvents: Array<RescindLoanRequestEvent>;
  clearLoanRequestEvent?: Maybe<ClearLoanRequestEvent>;
  clearLoanRequestEvents: Array<ClearLoanRequestEvent>;
  claimDefaultedLoanEvent?: Maybe<ClaimDefaultedLoanEvent>;
  claimDefaultedLoanEvents: Array<ClaimDefaultedLoanEvent>;
  repayLoanEvent?: Maybe<RepayLoanEvent>;
  repayLoanEvents: Array<RepayLoanEvent>;
  extendLoanEvent?: Maybe<ExtendLoanEvent>;
  extendLoanEvents: Array<ExtendLoanEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type QueryClearinghouseSingletonArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearinghouseSingletonsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearinghouseSingleton_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearinghouseSingleton_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearinghouseArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearinghousesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Clearinghouse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clearinghouse_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCoolerLoanRequestArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCoolerLoanRequestsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CoolerLoanRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoolerLoanRequest_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCoolerLoanArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCoolerLoansArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CoolerLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoolerLoan_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearinghouseSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearinghouseSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearinghouseSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearinghouseSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRebalanceEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRebalanceEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDefundEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDefundEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DefundEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DefundEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRequestLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRequestLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRescindLoanRequestEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRescindLoanRequestEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RescindLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RescindLoanRequestEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearLoanRequestEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClearLoanRequestEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearLoanRequestEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClaimDefaultedLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClaimDefaultedLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimDefaultedLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimDefaultedLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRepayLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRepayLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RepayLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryExtendLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryExtendLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ExtendLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExtendLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type RebalanceEvent = {
  __typename?: "RebalanceEvent";
  /**
   * Record ID.
   *
   * In the format of `clearinghouse-blockNumber`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * The Clearinghouse that the snapshot is for.
   *
   */
  clearinghouse: Clearinghouse;
  /**
   * Snapshot of the Clearinghouse at the time of the event.
   *
   */
  clearinghouseSnapshot: ClearinghouseSnapshot;
  /**
   * Amount of reserve tokens in (positive)/out (negative) of the Clearinghouse.
   *
   */
  amount: Scalars["BigDecimal"];
};

export type RebalanceEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse?: InputMaybe<Scalars["String"]>;
  clearinghouse_not?: InputMaybe<Scalars["String"]>;
  clearinghouse_gt?: InputMaybe<Scalars["String"]>;
  clearinghouse_lt?: InputMaybe<Scalars["String"]>;
  clearinghouse_gte?: InputMaybe<Scalars["String"]>;
  clearinghouse_lte?: InputMaybe<Scalars["String"]>;
  clearinghouse_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouse_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouse_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouse_?: InputMaybe<Clearinghouse_Filter>;
  clearinghouseSnapshot?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_?: InputMaybe<ClearinghouseSnapshot_Filter>;
  amount?: InputMaybe<Scalars["BigDecimal"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RebalanceEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RebalanceEvent_Filter>>>;
};

export enum RebalanceEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  Clearinghouse = "clearinghouse",
  ClearinghouseId = "clearinghouse__id",
  ClearinghouseAddress = "clearinghouse__address",
  ClearinghouseVersion = "clearinghouse__version",
  ClearinghouseCoolerFactoryAddress = "clearinghouse__coolerFactoryAddress",
  ClearinghouseCollateralToken = "clearinghouse__collateralToken",
  ClearinghouseCollateralTokenDecimals = "clearinghouse__collateralTokenDecimals",
  ClearinghouseReserveToken = "clearinghouse__reserveToken",
  ClearinghouseReserveTokenDecimals = "clearinghouse__reserveTokenDecimals",
  ClearinghouseSReserveToken = "clearinghouse__sReserveToken",
  ClearinghouseSReserveTokenDecimals = "clearinghouse__sReserveTokenDecimals",
  ClearinghouseInterestRate = "clearinghouse__interestRate",
  ClearinghouseDuration = "clearinghouse__duration",
  ClearinghouseFundCadence = "clearinghouse__fundCadence",
  ClearinghouseFundAmount = "clearinghouse__fundAmount",
  ClearinghouseLoanToCollateral = "clearinghouse__loanToCollateral",
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotTransactionHash = "clearinghouseSnapshot__transactionHash",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotReserveToken = "clearinghouseSnapshot__reserveToken",
  ClearinghouseSnapshotSReserveToken = "clearinghouseSnapshot__sReserveToken",
  ClearinghouseSnapshotReserveBalance = "clearinghouseSnapshot__reserveBalance",
  ClearinghouseSnapshotSReserveBalance = "clearinghouseSnapshot__sReserveBalance",
  ClearinghouseSnapshotSReserveInReserveBalance = "clearinghouseSnapshot__sReserveInReserveBalance",
  ClearinghouseSnapshotTreasuryReserveBalance = "clearinghouseSnapshot__treasuryReserveBalance",
  ClearinghouseSnapshotTreasurySReserveBalance = "clearinghouseSnapshot__treasurySReserveBalance",
  ClearinghouseSnapshotTreasurySReserveInReserveBalance = "clearinghouseSnapshot__treasurySReserveInReserveBalance",
  Amount = "amount",
}

export type RepayLoanEvent = {
  __typename?: "RepayLoanEvent";
  /**
   * Record ID.
   *
   * In the format of `cooler-loanId`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * Amount paid.
   *
   */
  amountPaid: Scalars["BigDecimal"];
  /**
   * Loan that was repaid.
   *
   */
  loan: CoolerLoan;
  /**
   * Seconds to expiry.
   *
   */
  secondsToExpiry: Scalars["BigInt"];
  /**
   * Principal payable after the repayment.
   *
   */
  principalPayable: Scalars["BigDecimal"];
  /**
   * Interest payable after the repayment.
   *
   */
  interestPayable: Scalars["BigDecimal"];
  /**
   * Collateral deposited after the repayment.
   *
   */
  collateralDeposited: Scalars["BigDecimal"];
  /**
   * Snapshot of the Clearinghouse at the time of the event.
   *
   */
  clearinghouseSnapshot: ClearinghouseSnapshot;
};

export type RepayLoanEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  amountPaid?: InputMaybe<Scalars["BigDecimal"]>;
  amountPaid_not?: InputMaybe<Scalars["BigDecimal"]>;
  amountPaid_gt?: InputMaybe<Scalars["BigDecimal"]>;
  amountPaid_lt?: InputMaybe<Scalars["BigDecimal"]>;
  amountPaid_gte?: InputMaybe<Scalars["BigDecimal"]>;
  amountPaid_lte?: InputMaybe<Scalars["BigDecimal"]>;
  amountPaid_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  amountPaid_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<CoolerLoan_Filter>;
  secondsToExpiry?: InputMaybe<Scalars["BigInt"]>;
  secondsToExpiry_not?: InputMaybe<Scalars["BigInt"]>;
  secondsToExpiry_gt?: InputMaybe<Scalars["BigInt"]>;
  secondsToExpiry_lt?: InputMaybe<Scalars["BigInt"]>;
  secondsToExpiry_gte?: InputMaybe<Scalars["BigInt"]>;
  secondsToExpiry_lte?: InputMaybe<Scalars["BigInt"]>;
  secondsToExpiry_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  secondsToExpiry_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principalPayable?: InputMaybe<Scalars["BigDecimal"]>;
  principalPayable_not?: InputMaybe<Scalars["BigDecimal"]>;
  principalPayable_gt?: InputMaybe<Scalars["BigDecimal"]>;
  principalPayable_lt?: InputMaybe<Scalars["BigDecimal"]>;
  principalPayable_gte?: InputMaybe<Scalars["BigDecimal"]>;
  principalPayable_lte?: InputMaybe<Scalars["BigDecimal"]>;
  principalPayable_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  principalPayable_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interestPayable?: InputMaybe<Scalars["BigDecimal"]>;
  interestPayable_not?: InputMaybe<Scalars["BigDecimal"]>;
  interestPayable_gt?: InputMaybe<Scalars["BigDecimal"]>;
  interestPayable_lt?: InputMaybe<Scalars["BigDecimal"]>;
  interestPayable_gte?: InputMaybe<Scalars["BigDecimal"]>;
  interestPayable_lte?: InputMaybe<Scalars["BigDecimal"]>;
  interestPayable_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  interestPayable_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralDeposited?: InputMaybe<Scalars["BigDecimal"]>;
  collateralDeposited_not?: InputMaybe<Scalars["BigDecimal"]>;
  collateralDeposited_gt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralDeposited_lt?: InputMaybe<Scalars["BigDecimal"]>;
  collateralDeposited_gte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralDeposited_lte?: InputMaybe<Scalars["BigDecimal"]>;
  collateralDeposited_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  collateralDeposited_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSnapshot?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lt?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_gte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_lte?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_not_in?: InputMaybe<Array<Scalars["String"]>>;
  clearinghouseSnapshot_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  clearinghouseSnapshot_?: InputMaybe<ClearinghouseSnapshot_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RepayLoanEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RepayLoanEvent_Filter>>>;
};

export enum RepayLoanEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  AmountPaid = "amountPaid",
  Loan = "loan",
  LoanId = "loan__id",
  LoanCreatedBlock = "loan__createdBlock",
  LoanCreatedTimestamp = "loan__createdTimestamp",
  LoanCreatedTransaction = "loan__createdTransaction",
  LoanCooler = "loan__cooler",
  LoanLoanId = "loan__loanId",
  LoanBorrower = "loan__borrower",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  SecondsToExpiry = "secondsToExpiry",
  PrincipalPayable = "principalPayable",
  InterestPayable = "interestPayable",
  CollateralDeposited = "collateralDeposited",
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotTransactionHash = "clearinghouseSnapshot__transactionHash",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotReserveToken = "clearinghouseSnapshot__reserveToken",
  ClearinghouseSnapshotSReserveToken = "clearinghouseSnapshot__sReserveToken",
  ClearinghouseSnapshotReserveBalance = "clearinghouseSnapshot__reserveBalance",
  ClearinghouseSnapshotSReserveBalance = "clearinghouseSnapshot__sReserveBalance",
  ClearinghouseSnapshotSReserveInReserveBalance = "clearinghouseSnapshot__sReserveInReserveBalance",
  ClearinghouseSnapshotTreasuryReserveBalance = "clearinghouseSnapshot__treasuryReserveBalance",
  ClearinghouseSnapshotTreasurySReserveBalance = "clearinghouseSnapshot__treasurySReserveBalance",
  ClearinghouseSnapshotTreasurySReserveInReserveBalance = "clearinghouseSnapshot__treasurySReserveInReserveBalance",
}

export type RequestLoanEvent = {
  __typename?: "RequestLoanEvent";
  /**
   * Record ID.
   *
   * In the format of `cooler-requestId`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * Request that created the loan.
   *
   */
  request: CoolerLoanRequest;
};

export type RequestLoanEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  request?: InputMaybe<Scalars["String"]>;
  request_not?: InputMaybe<Scalars["String"]>;
  request_gt?: InputMaybe<Scalars["String"]>;
  request_lt?: InputMaybe<Scalars["String"]>;
  request_gte?: InputMaybe<Scalars["String"]>;
  request_lte?: InputMaybe<Scalars["String"]>;
  request_in?: InputMaybe<Array<Scalars["String"]>>;
  request_not_in?: InputMaybe<Array<Scalars["String"]>>;
  request_contains?: InputMaybe<Scalars["String"]>;
  request_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_not_contains?: InputMaybe<Scalars["String"]>;
  request_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_starts_with?: InputMaybe<Scalars["String"]>;
  request_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_starts_with?: InputMaybe<Scalars["String"]>;
  request_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_ends_with?: InputMaybe<Scalars["String"]>;
  request_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_ends_with?: InputMaybe<Scalars["String"]>;
  request_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_?: InputMaybe<CoolerLoanRequest_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RequestLoanEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RequestLoanEvent_Filter>>>;
};

export enum RequestLoanEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  Request = "request",
  RequestId = "request__id",
  RequestCreatedBlock = "request__createdBlock",
  RequestCreatedTimestamp = "request__createdTimestamp",
  RequestCreatedTransaction = "request__createdTransaction",
  RequestCooler = "request__cooler",
  RequestRequestId = "request__requestId",
  RequestBorrower = "request__borrower",
  RequestCollateralToken = "request__collateralToken",
  RequestDebtToken = "request__debtToken",
  RequestAmount = "request__amount",
  RequestInterestPercentage = "request__interestPercentage",
  RequestLoanToCollateralRatio = "request__loanToCollateralRatio",
  RequestDurationSeconds = "request__durationSeconds",
  RequestIsRescinded = "request__isRescinded",
}

export type RescindLoanRequestEvent = {
  __typename?: "RescindLoanRequestEvent";
  /**
   * Record ID.
   *
   * In the format of `cooler-requestId`.
   *
   */
  id: Scalars["String"];
  /**
   * Event date in YYYY-MM-DD format.
   *
   */
  date: Scalars["String"];
  /**
   * Block number at the time of the event.
   *
   */
  blockNumber: Scalars["BigInt"];
  /**
   * Block timestamp at the time of the event.
   *
   */
  blockTimestamp: Scalars["BigInt"];
  /**
   * Transaction hash of the event.
   *
   */
  transactionHash: Scalars["Bytes"];
  /**
   * Request that was rescinded.
   *
   */
  request: CoolerLoanRequest;
};

export type RescindLoanRequestEvent_Filter = {
  id?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
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
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  request?: InputMaybe<Scalars["String"]>;
  request_not?: InputMaybe<Scalars["String"]>;
  request_gt?: InputMaybe<Scalars["String"]>;
  request_lt?: InputMaybe<Scalars["String"]>;
  request_gte?: InputMaybe<Scalars["String"]>;
  request_lte?: InputMaybe<Scalars["String"]>;
  request_in?: InputMaybe<Array<Scalars["String"]>>;
  request_not_in?: InputMaybe<Array<Scalars["String"]>>;
  request_contains?: InputMaybe<Scalars["String"]>;
  request_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_not_contains?: InputMaybe<Scalars["String"]>;
  request_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  request_starts_with?: InputMaybe<Scalars["String"]>;
  request_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_starts_with?: InputMaybe<Scalars["String"]>;
  request_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  request_ends_with?: InputMaybe<Scalars["String"]>;
  request_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_not_ends_with?: InputMaybe<Scalars["String"]>;
  request_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  request_?: InputMaybe<CoolerLoanRequest_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RescindLoanRequestEvent_Filter>>>;
  or?: InputMaybe<Array<InputMaybe<RescindLoanRequestEvent_Filter>>>;
};

export enum RescindLoanRequestEvent_OrderBy {
  Id = "id",
  Date = "date",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  TransactionHash = "transactionHash",
  Request = "request",
  RequestId = "request__id",
  RequestCreatedBlock = "request__createdBlock",
  RequestCreatedTimestamp = "request__createdTimestamp",
  RequestCreatedTransaction = "request__createdTransaction",
  RequestCooler = "request__cooler",
  RequestRequestId = "request__requestId",
  RequestBorrower = "request__borrower",
  RequestCollateralToken = "request__collateralToken",
  RequestDebtToken = "request__debtToken",
  RequestAmount = "request__amount",
  RequestInterestPercentage = "request__interestPercentage",
  RequestLoanToCollateralRatio = "request__loanToCollateralRatio",
  RequestDurationSeconds = "request__durationSeconds",
  RequestIsRescinded = "request__isRescinded",
}

export type Subscription = {
  __typename?: "Subscription";
  clearinghouseSingleton?: Maybe<ClearinghouseSingleton>;
  clearinghouseSingletons: Array<ClearinghouseSingleton>;
  clearinghouse?: Maybe<Clearinghouse>;
  clearinghouses: Array<Clearinghouse>;
  coolerLoanRequest?: Maybe<CoolerLoanRequest>;
  coolerLoanRequests: Array<CoolerLoanRequest>;
  coolerLoan?: Maybe<CoolerLoan>;
  coolerLoans: Array<CoolerLoan>;
  clearinghouseSnapshot?: Maybe<ClearinghouseSnapshot>;
  clearinghouseSnapshots: Array<ClearinghouseSnapshot>;
  rebalanceEvent?: Maybe<RebalanceEvent>;
  rebalanceEvents: Array<RebalanceEvent>;
  defundEvent?: Maybe<DefundEvent>;
  defundEvents: Array<DefundEvent>;
  requestLoanEvent?: Maybe<RequestLoanEvent>;
  requestLoanEvents: Array<RequestLoanEvent>;
  rescindLoanRequestEvent?: Maybe<RescindLoanRequestEvent>;
  rescindLoanRequestEvents: Array<RescindLoanRequestEvent>;
  clearLoanRequestEvent?: Maybe<ClearLoanRequestEvent>;
  clearLoanRequestEvents: Array<ClearLoanRequestEvent>;
  claimDefaultedLoanEvent?: Maybe<ClaimDefaultedLoanEvent>;
  claimDefaultedLoanEvents: Array<ClaimDefaultedLoanEvent>;
  repayLoanEvent?: Maybe<RepayLoanEvent>;
  repayLoanEvents: Array<RepayLoanEvent>;
  extendLoanEvent?: Maybe<ExtendLoanEvent>;
  extendLoanEvents: Array<ExtendLoanEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type SubscriptionClearinghouseSingletonArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearinghouseSingletonsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearinghouseSingleton_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearinghouseSingleton_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearinghouseArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearinghousesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Clearinghouse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clearinghouse_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCoolerLoanRequestArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCoolerLoanRequestsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CoolerLoanRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoolerLoanRequest_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCoolerLoanArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCoolerLoansArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CoolerLoan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoolerLoan_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearinghouseSnapshotArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearinghouseSnapshotsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearinghouseSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearinghouseSnapshot_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRebalanceEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRebalanceEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RebalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebalanceEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDefundEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDefundEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DefundEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DefundEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRequestLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRequestLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRescindLoanRequestEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRescindLoanRequestEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RescindLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RescindLoanRequestEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearLoanRequestEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClearLoanRequestEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClearLoanRequestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClearLoanRequestEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClaimDefaultedLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClaimDefaultedLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ClaimDefaultedLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimDefaultedLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRepayLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRepayLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RepayLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionExtendLoanEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionExtendLoanEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ExtendLoanEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExtendLoanEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

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
