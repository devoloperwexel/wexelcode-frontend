import {
  GetDoctorResponse,
  GetDoctorsRequest,
  GetPaginatedDoctorsResponse,
  UpdateDoctorRequest,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetDoctors = async (params: GetDoctorsRequest) => {
  const response = await request<GetPaginatedDoctorsResponse>(
    API.GET_ALL,
    null,
    {
      params,
    }
  );

  return response;
};

export const GetDoctorByUserId = async (userId: string) => {
  const response = await request<GetDoctorResponse>(API.GET_BY_USER_ID, null, {
    params: { userId },
  });

  return response;
};

export const UpdateDoctor = async (payload: UpdateDoctorRequest) => {
  const { id, userId, ...data } = payload;

  const response = await request<GetDoctorResponse>(API.UPDATE, data, {
    params: { id, userId },
    isSecure: true,
  });

  return response;
};
