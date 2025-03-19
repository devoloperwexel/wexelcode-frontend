import {
  CreatePatientRequest,
  GetPatientRequest,
  UpdatePatientRequest,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetPatientsByUserId = async (userId: string) => {
  const response = await request<GetPatientRequest>(API.GET_BY_ID, null, {
    params: { userId },
  });

  return response?.data;
};

export const CreatePatient = async ({ id, ...data }: CreatePatientRequest) => {
  const response = await request<GetPatientRequest>(API.CREATE, data, {
    params: { userId: id },
  });

  return response?.data;
};

export const UpdatePatient = async ({
  id,
  userId,
  ...data
}: UpdatePatientRequest) => {
  const response = await request<GetPatientRequest>(API.UPDATE, data, {
    params: { patientId: id, userId },
  });

  return response?.data;
};
