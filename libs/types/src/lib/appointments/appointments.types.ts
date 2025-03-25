import { Timestamps, User } from '../..';

export interface Appointment extends Timestamps {
  id: string;
  physioUserId: string;
  patientUserId: string;
  notes: string;
  appointmentTime: string;
  status: 'PENDING' | 'SUCCESS' | 'CANCELLED'; // TODO: Need confirmation on the status
  physioUser?: User;
}
