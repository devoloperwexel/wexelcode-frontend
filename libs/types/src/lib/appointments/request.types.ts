import { BaseRequest } from '../api';

export interface CreateAppointmentRequest {
  userId: string;
  physioUserId: string;
  notes: string;
  appointmentTime: string;
}

export interface UpdateAppointmentRequest {
  userId: string;
  appointmentId: string;
  status: string;
}

export interface GetAppointmentRequest {
  userId?: string; // TODO: should remove this in future
  appointmentId: string;
  includes?: string[];
}

export interface GetAppointmentsRequest extends BaseRequest {
  userId?: string;
  physioUserId?: string;
  startDate?: string;
  endDate?: string;
  timezone: string; 
  name?: string; // TODO: should remove this in future
}
