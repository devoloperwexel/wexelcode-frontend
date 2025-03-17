import { Patient } from '.';

export type UpdatePatientRequest = Partial<Patient> & { userId: string };
