export const prepareApiUrl = (lat: string, lon: string): string => {
  return `${process.env.API_URL}?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.APY_KEY}`;
};

const MS_PER_DAY: number = 1000 * 60 * 60 * 24;

export const getDifferenceDate = (date1: Date, date2: Date): number => {
  const utc1: number = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2: number = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
};
