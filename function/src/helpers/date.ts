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
