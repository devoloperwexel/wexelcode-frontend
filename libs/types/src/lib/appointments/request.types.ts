export interface CreateAppointmentRequest {
  userId: string;
  physioUserId: string;
  notes: string;
  appointmentTime: string;
}

export interface GetAppointmentRequest {
  userId?: string; // TODO: should remove this in future
  appointmentId: string;
  includes?: string[];
}
