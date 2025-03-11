import { Timestamps } from '../..';

export interface Appointment extends Timestamps {
  id: string;
  physioUserId: string;
  patientUserId: string;
  notes: string;
  appointmentTime: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED'; // TODO: Need confirmation on the status
}
