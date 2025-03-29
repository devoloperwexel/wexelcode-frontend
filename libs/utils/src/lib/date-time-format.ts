import moment from 'moment';

export const dateTimeFormat = (date: string | Date, format: string) => {
  return moment(date).local().format(format);
};

export const dateTimeDiff = (first: string | Date, second: string | Date) => {
  return moment(first).diff(moment(second));
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
