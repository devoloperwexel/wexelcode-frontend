import { BaseRequest } from '../api';
import { Patient } from '.';

export type CreatePatientRequest = Patient;
export type UpdatePatientRequest = Partial<Patient> & { userId?: string };

export type GetAllPatientsRequest = BaseRequest & {
  physioUserId?: string;
  name?: string; // TODO: remove this and use search instead
};
