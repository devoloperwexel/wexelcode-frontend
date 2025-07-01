import { BaseRequest, BaseResponse, PaginatedResponse, User } from '../..';

export interface Doctor {
  id: string;
  userId: string;
  user: User;
  specialty: string;
  description: string;
  totalYearsOfExperience: number;
}

export type GetDoctorsRequest = BaseRequest;

export type GetPaginatedDoctorsResponse = PaginatedResponse<Doctor>;

export type GetDoctorResponse = BaseResponse<Doctor>;

export type UpdateDoctorRequest = Partial<Doctor>;
