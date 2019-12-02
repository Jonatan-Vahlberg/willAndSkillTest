export const isUndefiendOrNull = value => value === undefined || value === null;

export const breakoutDate = (ISO_Date_String = '') =>
  ISO_Date_String.substr(0, 10);
export const breakoutTime = (ISO_Date_String = '') =>
  ISO_Date_String.substr(11, 5);
