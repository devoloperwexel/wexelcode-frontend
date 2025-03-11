export interface CreateAppointmentRequest {
  userId: string;
  physioUserId: string;
  notes: string;
  appointmentTime: string;
}
