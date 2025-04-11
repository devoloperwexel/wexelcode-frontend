import { BaseRequest, BaseResponse, PaginatedResponse, User } from '../..';

export interface Doctor {
  id: string;
  userId: string;
  user: User;
  specialty: string;
  description: string;
  totalYearsOfExperience: number;
}

export interface DoctorAvailability {
  date: string;
  appointmentTimes: Date[];
}

export interface GetDoctorAvailabilityRequest {
  id: string;
  date: string;
}

export type GetDoctorsRequest = BaseRequest;

export type GetPaginatedDoctorsResponse = PaginatedResponse<Doctor>;

export type GetDoctorResponse = BaseResponse<Doctor>;

export type GetDoctorsAvailabilityResponse = BaseResponse<DoctorAvailability>;
