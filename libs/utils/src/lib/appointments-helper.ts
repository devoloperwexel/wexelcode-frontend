import { dateTimeDiff } from '..';

export const getAppointmentStatus = (dateTime: string): 'past' | 'upcoming' => {
  if (dateTimeDiff(new Date(), dateTime) > 0) {
    return 'past';
  } else {
    return 'upcoming';
  }
};
