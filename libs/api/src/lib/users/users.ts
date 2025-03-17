import {
  GetDoctorResponse,
  GetUserResponse,
  UpdateUserRequest,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetUserById = async (id: string) => {
  const response = await request<GetDoctorResponse>(API.GET_BY_ID, null, {
    params: { id },
  });

  return response;
};

export const UpdateUser = async ({ id, ...data }: UpdateUserRequest) => {
  const response = await request<GetUserResponse>(API.UPDATE, data, {
    params: { userId: id },
  });

  return response;
};
