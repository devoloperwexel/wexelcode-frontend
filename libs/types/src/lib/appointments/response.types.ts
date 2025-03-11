import { BaseResponse, PaginatedResponse } from '../..';
import { Appointment } from '.';

export type GetAppointmentResponse = BaseResponse<Appointment>;

export type GetAppointmentsResponse = PaginatedResponse<Appointment>;
