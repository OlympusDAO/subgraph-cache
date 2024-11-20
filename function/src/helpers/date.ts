export const getISO8601DateString = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const addDays = (date: Date, days: number, midnight: boolean): Date => {
  const newDate = new Date(date.getTime() + days * (24 * 60 * 60 * 1000));

  if (midnight) {
    newDate.setUTCHours(0, 0, 0, 0);
  }

  return newDate;
};

export const isTimestampInSeconds = (dateTimestamp: number): boolean => {
  return dateTimestamp < 10000000000;
};

export const getDateFromTimestamp = (dateTimestamp: number): Date => {
  return new Date(dateTimestamp * (isTimestampInSeconds(dateTimestamp) ? 1000 : 1));
};
