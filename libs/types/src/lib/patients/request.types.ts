import { Patient } from '.';

export type CreatePatientRequest = Patient;
export type UpdatePatientRequest = Partial<Patient> & { userId: string };
