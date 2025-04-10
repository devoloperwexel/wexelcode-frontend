import { BaseResponse, PaginatedResponse } from '../..';
import { Patient } from '.';

export type GetPatientRequest = BaseResponse<Patient>;

export type GetAllPatientsResponse = PaginatedResponse<Patient>;
