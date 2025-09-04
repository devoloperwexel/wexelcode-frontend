import 'moment/locale/de';

import moment from 'moment-timezone';

export const dateTimeFormat = (
  date: string | Date,
  format: string,
  language = 'en',
  zone = 'UTC'
) => {
  return moment.tz(date, zone).locale(language).format(format);
};

export const dateTimeDiff = (
  first: string | Date,
  second: string | Date,
  zone = 'UTC',
  unit?: moment.unitOfTime.Diff
) => {
  return moment.tz(first, zone).diff(moment(second), unit);
};

export const dateTimeAdd = (
  date: string | Date,
  amount: number,
  unit: moment.unitOfTime.DurationConstructor
) => {
  return moment(date).add(amount, unit).toDate();
};

export const dateTimeSubtract = (
  date: string | Date,
  amount: number,
  unit: moment.unitOfTime.DurationConstructor
) => {
  return moment(date).subtract(amount, unit).toDate();
};

export const dateTimeSet = (
  date: string | Date,
  object: moment.MomentSetObject
) => {
  return moment(date).set(object).toDate();
};

export const createDateTimeWithZone = (
  date: string,
  time: string,
  zone = 'UTC'
) => {
  return moment.tz(`${date} ${time}`, 'YYYY-MM-DD HH:mm', zone);
};

export const toDateTime = (date: string, time: string) =>
  new Date(`${date}T${time}:00`);

export const getLocalISODate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDatesBetween = (
  startDate: Date | string,
  endDate: Date | string
): string[] => {
  const dates: string[] = [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Loop through each day
  while (start <= end) {
    dates.push(getLocalISODate(start));
    start.setDate(start.getDate() + 1);
  }

  return dates;
};

export const isToday = (date: Date) => {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
};

export const isMorning = () => {
  const now = new Date();
  return now.getHours() < 14;
};
