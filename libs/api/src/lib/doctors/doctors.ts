import {
  GetDoctorAvailabilityRequest,
  GetDoctorResponse,
  GetDoctorsAvailabilityResponse,
  GetDoctorsRequest,
  GetPaginatedDoctorsResponse,
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

export const GetDoctorById = async (id: string) => {
  const response = await request<GetDoctorResponse>(API.GET_BY_ID, null, {
    params: { id },
  });

  return response;
};

export const GetDoctorAvailability = async (
  params: GetDoctorAvailabilityRequest
) => {
  const response = await request<GetDoctorsAvailabilityResponse>(
    API.GET_AVAILABILITY,
    null,
    {
      params,
    }
  );

  return response;
};
