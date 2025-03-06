import { GetDoctorResponse } from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetUserById = async (id: string) => {
  const response = await request<GetDoctorResponse>(API.GET_BY_ID, null, {
    params: { id },
  });

  return response;
};
