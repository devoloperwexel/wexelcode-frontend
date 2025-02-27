import { GetDoctorsRequest, GetDoctorsResponse } from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetDoctors = async ({ query }: GetDoctorsRequest) => {
  const response = await request<GetDoctorsResponse>(API.GET_ALL, {
    query,
  });

  return response;
};
