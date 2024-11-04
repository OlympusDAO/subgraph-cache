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
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
  collateralQuantityClaimed: Scalars["BigDecimal"];
  collateralPrice: Scalars["BigDecimal"];
  collateralValueClaimed: Scalars["BigDecimal"];
  loan: CoolerLoan;
  secondsSinceExpiry: Scalars["BigInt"];
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
  LoanLender = "loan__lender",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  LoanCollateralToken = "loan__collateralToken",
  LoanDebtToken = "loan__debtToken",
  SecondsSinceExpiry = "secondsSinceExpiry",
}

export type ClearLoanRequestEvent = {
  __typename?: "ClearLoanRequestEvent";
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
  request: CoolerLoanRequest;
  loan: CoolerLoan;
  clearinghouseDaiBalance: Scalars["BigDecimal"];
  clearinghouseSDaiBalance: Scalars["BigDecimal"];
  clearinghouseSDaiInDaiBalance: Scalars["BigDecimal"];
  treasuryDaiBalance: Scalars["BigDecimal"];
  treasurySDaiBalance: Scalars["BigDecimal"];
  treasurySDaiInDaiBalance: Scalars["BigDecimal"];
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
  clearinghouseDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  LoanLender = "loan__lender",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  LoanCollateralToken = "loan__collateralToken",
  LoanDebtToken = "loan__debtToken",
  ClearinghouseDaiBalance = "clearinghouseDaiBalance",
  ClearinghouseSDaiBalance = "clearinghouseSDaiBalance",
  ClearinghouseSDaiInDaiBalance = "clearinghouseSDaiInDaiBalance",
  TreasuryDaiBalance = "treasuryDaiBalance",
  TreasurySDaiBalance = "treasurySDaiBalance",
  TreasurySDaiInDaiBalance = "treasurySDaiInDaiBalance",
}

export type ClearinghouseSnapshot = {
  __typename?: "ClearinghouseSnapshot";
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  clearinghouse: Scalars["Bytes"];
  coolerFactoryAddress: Scalars["Bytes"];
  collateralAddress: Scalars["Bytes"];
  debtAddress: Scalars["Bytes"];
  isActive: Scalars["Boolean"];
  nextRebalanceTimestamp: Scalars["BigInt"];
  interestReceivables: Scalars["BigDecimal"];
  principalReceivables: Scalars["BigDecimal"];
  interestRate: Scalars["BigDecimal"];
  duration: Scalars["BigInt"];
  fundCadence: Scalars["BigInt"];
  fundAmount: Scalars["BigDecimal"];
  loanToCollateral: Scalars["BigDecimal"];
  daiBalance: Scalars["BigDecimal"];
  sDaiBalance: Scalars["BigDecimal"];
  sDaiInDaiBalance: Scalars["BigDecimal"];
  treasuryDaiBalance: Scalars["BigDecimal"];
  treasurySDaiBalance: Scalars["BigDecimal"];
  treasurySDaiInDaiBalance: Scalars["BigDecimal"];
  rebalanceEvents: Array<RebalanceEvent>;
  defundEvents: Array<DefundEvent>;
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
  clearinghouse?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_not?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_gt?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_lt?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_gte?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_lte?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  clearinghouse_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  clearinghouse_contains?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_not_contains?: InputMaybe<Scalars["Bytes"]>;
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
  collateralAddress?: InputMaybe<Scalars["Bytes"]>;
  collateralAddress_not?: InputMaybe<Scalars["Bytes"]>;
  collateralAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  debtAddress?: InputMaybe<Scalars["Bytes"]>;
  debtAddress_not?: InputMaybe<Scalars["Bytes"]>;
  debtAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  debtAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  debtAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  debtAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  debtAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  debtAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  debtAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  debtAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
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
  daiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  daiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  daiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  daiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  daiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  daiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  daiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  daiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  sDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  sDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  rebalanceEvents_?: InputMaybe<RebalanceEvent_Filter>;
  defundEvents_?: InputMaybe<DefundEvent_Filter>;
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
  Clearinghouse = "clearinghouse",
  CoolerFactoryAddress = "coolerFactoryAddress",
  CollateralAddress = "collateralAddress",
  DebtAddress = "debtAddress",
  IsActive = "isActive",
  NextRebalanceTimestamp = "nextRebalanceTimestamp",
  InterestReceivables = "interestReceivables",
  PrincipalReceivables = "principalReceivables",
  InterestRate = "interestRate",
  Duration = "duration",
  FundCadence = "fundCadence",
  FundAmount = "fundAmount",
  LoanToCollateral = "loanToCollateral",
  DaiBalance = "daiBalance",
  SDaiBalance = "sDaiBalance",
  SDaiInDaiBalance = "sDaiInDaiBalance",
  TreasuryDaiBalance = "treasuryDaiBalance",
  TreasurySDaiBalance = "treasurySDaiBalance",
  TreasurySDaiInDaiBalance = "treasurySDaiInDaiBalance",
  RebalanceEvents = "rebalanceEvents",
  DefundEvents = "defundEvents",
}

export type CoolerLoan = {
  __typename?: "CoolerLoan";
  id: Scalars["String"];
  createdBlock: Scalars["BigInt"];
  createdTimestamp: Scalars["BigInt"];
  createdTransaction: Scalars["Bytes"];
  cooler: Scalars["Bytes"];
  request: CoolerLoanRequest;
  loanId: Scalars["BigInt"];
  borrower: Scalars["Bytes"];
  lender: Scalars["Bytes"];
  interest: Scalars["BigDecimal"];
  principal: Scalars["BigDecimal"];
  collateral: Scalars["BigDecimal"];
  expiryTimestamp: Scalars["BigInt"];
  hasCallback: Scalars["Boolean"];
  collateralToken: Scalars["Bytes"];
  debtToken: Scalars["Bytes"];
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
  id: Scalars["String"];
  createdBlock: Scalars["BigInt"];
  createdTimestamp: Scalars["BigInt"];
  createdTransaction: Scalars["Bytes"];
  cooler: Scalars["Bytes"];
  requestId: Scalars["BigInt"];
  borrower: Scalars["Bytes"];
  collateralToken: Scalars["Bytes"];
  debtToken: Scalars["Bytes"];
  amount: Scalars["BigDecimal"];
  interestPercentage: Scalars["BigDecimal"];
  loanToCollateralRatio: Scalars["BigDecimal"];
  durationSeconds: Scalars["BigInt"];
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
  lender?: InputMaybe<Scalars["Bytes"]>;
  lender_not?: InputMaybe<Scalars["Bytes"]>;
  lender_gt?: InputMaybe<Scalars["Bytes"]>;
  lender_lt?: InputMaybe<Scalars["Bytes"]>;
  lender_gte?: InputMaybe<Scalars["Bytes"]>;
  lender_lte?: InputMaybe<Scalars["Bytes"]>;
  lender_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lender_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  lender_contains?: InputMaybe<Scalars["Bytes"]>;
  lender_not_contains?: InputMaybe<Scalars["Bytes"]>;
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
  Lender = "lender",
  Interest = "interest",
  Principal = "principal",
  Collateral = "collateral",
  ExpiryTimestamp = "expiryTimestamp",
  HasCallback = "hasCallback",
  CollateralToken = "collateralToken",
  DebtToken = "debtToken",
  CreationEvents = "creationEvents",
  DefaultedClaimEvents = "defaultedClaimEvents",
  RepaymentEvents = "repaymentEvents",
  ExtendEvents = "extendEvents",
}

export type DefundEvent = {
  __typename?: "DefundEvent";
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
  clearinghouse: Scalars["Bytes"];
  clearinghouseSnapshot: ClearinghouseSnapshot;
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
  clearinghouse?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_not?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_gt?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_lt?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_gte?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_lte?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  clearinghouse_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  clearinghouse_contains?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_not_contains?: InputMaybe<Scalars["Bytes"]>;
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
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotClearinghouse = "clearinghouseSnapshot__clearinghouse",
  ClearinghouseSnapshotCoolerFactoryAddress = "clearinghouseSnapshot__coolerFactoryAddress",
  ClearinghouseSnapshotCollateralAddress = "clearinghouseSnapshot__collateralAddress",
  ClearinghouseSnapshotDebtAddress = "clearinghouseSnapshot__debtAddress",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotInterestRate = "clearinghouseSnapshot__interestRate",
  ClearinghouseSnapshotDuration = "clearinghouseSnapshot__duration",
  ClearinghouseSnapshotFundCadence = "clearinghouseSnapshot__fundCadence",
  ClearinghouseSnapshotFundAmount = "clearinghouseSnapshot__fundAmount",
  ClearinghouseSnapshotLoanToCollateral = "clearinghouseSnapshot__loanToCollateral",
  ClearinghouseSnapshotDaiBalance = "clearinghouseSnapshot__daiBalance",
  ClearinghouseSnapshotSDaiBalance = "clearinghouseSnapshot__sDaiBalance",
  ClearinghouseSnapshotSDaiInDaiBalance = "clearinghouseSnapshot__sDaiInDaiBalance",
  ClearinghouseSnapshotTreasuryDaiBalance = "clearinghouseSnapshot__treasuryDaiBalance",
  ClearinghouseSnapshotTreasurySDaiBalance = "clearinghouseSnapshot__treasurySDaiBalance",
  ClearinghouseSnapshotTreasurySDaiInDaiBalance = "clearinghouseSnapshot__treasurySDaiInDaiBalance",
  Amount = "amount",
}

export type ExtendLoanEvent = {
  __typename?: "ExtendLoanEvent";
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
  periods: Scalars["Int"];
  loan: CoolerLoan;
  expiryTimestamp: Scalars["BigInt"];
  interestDue: Scalars["BigDecimal"];
  clearinghouseDaiBalance: Scalars["BigDecimal"];
  clearinghouseSDaiBalance: Scalars["BigDecimal"];
  clearinghouseSDaiInDaiBalance: Scalars["BigDecimal"];
  treasuryDaiBalance: Scalars["BigDecimal"];
  treasurySDaiBalance: Scalars["BigDecimal"];
  treasurySDaiInDaiBalance: Scalars["BigDecimal"];
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
  clearinghouseDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  LoanLender = "loan__lender",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  LoanCollateralToken = "loan__collateralToken",
  LoanDebtToken = "loan__debtToken",
  ExpiryTimestamp = "expiryTimestamp",
  InterestDue = "interestDue",
  ClearinghouseDaiBalance = "clearinghouseDaiBalance",
  ClearinghouseSDaiBalance = "clearinghouseSDaiBalance",
  ClearinghouseSDaiInDaiBalance = "clearinghouseSDaiInDaiBalance",
  TreasuryDaiBalance = "treasuryDaiBalance",
  TreasurySDaiBalance = "treasurySDaiBalance",
  TreasurySDaiInDaiBalance = "treasurySDaiInDaiBalance",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  __typename?: "Query";
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
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
  clearinghouse: Scalars["Bytes"];
  clearinghouseSnapshot: ClearinghouseSnapshot;
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
  clearinghouse?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_not?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_gt?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_lt?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_gte?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_lte?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  clearinghouse_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  clearinghouse_contains?: InputMaybe<Scalars["Bytes"]>;
  clearinghouse_not_contains?: InputMaybe<Scalars["Bytes"]>;
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
  ClearinghouseSnapshot = "clearinghouseSnapshot",
  ClearinghouseSnapshotId = "clearinghouseSnapshot__id",
  ClearinghouseSnapshotDate = "clearinghouseSnapshot__date",
  ClearinghouseSnapshotBlockNumber = "clearinghouseSnapshot__blockNumber",
  ClearinghouseSnapshotBlockTimestamp = "clearinghouseSnapshot__blockTimestamp",
  ClearinghouseSnapshotClearinghouse = "clearinghouseSnapshot__clearinghouse",
  ClearinghouseSnapshotCoolerFactoryAddress = "clearinghouseSnapshot__coolerFactoryAddress",
  ClearinghouseSnapshotCollateralAddress = "clearinghouseSnapshot__collateralAddress",
  ClearinghouseSnapshotDebtAddress = "clearinghouseSnapshot__debtAddress",
  ClearinghouseSnapshotIsActive = "clearinghouseSnapshot__isActive",
  ClearinghouseSnapshotNextRebalanceTimestamp = "clearinghouseSnapshot__nextRebalanceTimestamp",
  ClearinghouseSnapshotInterestReceivables = "clearinghouseSnapshot__interestReceivables",
  ClearinghouseSnapshotPrincipalReceivables = "clearinghouseSnapshot__principalReceivables",
  ClearinghouseSnapshotInterestRate = "clearinghouseSnapshot__interestRate",
  ClearinghouseSnapshotDuration = "clearinghouseSnapshot__duration",
  ClearinghouseSnapshotFundCadence = "clearinghouseSnapshot__fundCadence",
  ClearinghouseSnapshotFundAmount = "clearinghouseSnapshot__fundAmount",
  ClearinghouseSnapshotLoanToCollateral = "clearinghouseSnapshot__loanToCollateral",
  ClearinghouseSnapshotDaiBalance = "clearinghouseSnapshot__daiBalance",
  ClearinghouseSnapshotSDaiBalance = "clearinghouseSnapshot__sDaiBalance",
  ClearinghouseSnapshotSDaiInDaiBalance = "clearinghouseSnapshot__sDaiInDaiBalance",
  ClearinghouseSnapshotTreasuryDaiBalance = "clearinghouseSnapshot__treasuryDaiBalance",
  ClearinghouseSnapshotTreasurySDaiBalance = "clearinghouseSnapshot__treasurySDaiBalance",
  ClearinghouseSnapshotTreasurySDaiInDaiBalance = "clearinghouseSnapshot__treasurySDaiInDaiBalance",
  Amount = "amount",
}

export type RepayLoanEvent = {
  __typename?: "RepayLoanEvent";
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
  amountPaid: Scalars["BigDecimal"];
  loan: CoolerLoan;
  secondsToExpiry: Scalars["BigInt"];
  principalPayable: Scalars["BigDecimal"];
  interestPayable: Scalars["BigDecimal"];
  collateralDeposited: Scalars["BigDecimal"];
  clearinghouseDaiBalance: Scalars["BigDecimal"];
  clearinghouseSDaiBalance: Scalars["BigDecimal"];
  clearinghouseSDaiInDaiBalance: Scalars["BigDecimal"];
  treasuryDaiBalance: Scalars["BigDecimal"];
  treasurySDaiBalance: Scalars["BigDecimal"];
  treasurySDaiInDaiBalance: Scalars["BigDecimal"];
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
  clearinghouseDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  clearinghouseSDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  clearinghouseSDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasuryDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasuryDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_not?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  treasurySDaiInDaiBalance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  treasurySDaiInDaiBalance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
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
  LoanLender = "loan__lender",
  LoanInterest = "loan__interest",
  LoanPrincipal = "loan__principal",
  LoanCollateral = "loan__collateral",
  LoanExpiryTimestamp = "loan__expiryTimestamp",
  LoanHasCallback = "loan__hasCallback",
  LoanCollateralToken = "loan__collateralToken",
  LoanDebtToken = "loan__debtToken",
  SecondsToExpiry = "secondsToExpiry",
  PrincipalPayable = "principalPayable",
  InterestPayable = "interestPayable",
  CollateralDeposited = "collateralDeposited",
  ClearinghouseDaiBalance = "clearinghouseDaiBalance",
  ClearinghouseSDaiBalance = "clearinghouseSDaiBalance",
  ClearinghouseSDaiInDaiBalance = "clearinghouseSDaiInDaiBalance",
  TreasuryDaiBalance = "treasuryDaiBalance",
  TreasurySDaiBalance = "treasurySDaiBalance",
  TreasurySDaiInDaiBalance = "treasurySDaiInDaiBalance",
}

export type RequestLoanEvent = {
  __typename?: "RequestLoanEvent";
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
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
  id: Scalars["String"];
  date: Scalars["String"];
  blockNumber: Scalars["BigInt"];
  blockTimestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
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
