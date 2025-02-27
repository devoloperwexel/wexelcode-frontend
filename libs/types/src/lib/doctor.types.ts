import { PaginatedResponse, QueryRequest, User } from '..';

export interface Doctor {
  id: string;
  userId: string;
  user: User;
  specialty: string;
  description: string;
  totalYearsOfExperience: number;
}

export type GetDoctorsRequest = QueryRequest;

export type GetDoctorsResponse = PaginatedResponse<Doctor>;
