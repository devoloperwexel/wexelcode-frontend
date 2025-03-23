import moment from 'moment';

export const dateTimeFormat = (date: string | Date, format: string) => {
  return moment(date).format(format);
};

export const dateTimeDiff = (first: string | Date, second: string | Date) => {
  return moment(first).diff(moment(second));
};
