import { GetPatientRequest, UpdatePatientRequest } from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetPatientsByUserId = async (userId: string) => {
  const response = await request<GetPatientRequest>(API.GET_BY_ID, null, {
    params: { userId },
  });

  return response;
};

export const UpdatePatients = async ({
  id,
  userId,
  ...data
}: UpdatePatientRequest) => {
  const response = await request<GetPatientRequest>(API.UPDATE, data, {
    params: { patientId: id, userId },
  });

  return response;
};
