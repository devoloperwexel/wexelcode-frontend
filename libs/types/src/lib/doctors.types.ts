import { BaseRequest, BaseResponse, User } from '..';

export interface Doctor {
  id: string;
  userId: string;
  user: User;
  specialty: string;
  description: string;
  totalYearsOfExperience: number;
}

export type GetDoctorsRequest = BaseRequest;

export type GetDoctorsResponse = BaseResponse<Doctor>;
