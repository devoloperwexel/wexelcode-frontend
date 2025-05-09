import 'moment/locale/de';

import moment from 'moment';

export const dateTimeFormat = (
  date: string | Date,
  format: string,
  language = 'en'
) => {
  return moment(date).locale(language).format(format);
};

export const dateTimeDiff = (
  first: string | Date,
  second: string | Date,
  unit?: moment.unitOfTime.Diff
) => {
  return moment(first).diff(moment(second), unit);
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
