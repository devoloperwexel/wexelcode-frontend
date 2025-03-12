import moment from 'moment';

export const dateTimeFormat = (date: string | Date, format: string) => {
  return moment(date).format(format);
};
