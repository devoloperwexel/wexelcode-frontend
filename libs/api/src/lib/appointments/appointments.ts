import {
  CreateAppointmentRequest,
  GetAppointmentRequest,
  GetAppointmentResponse,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const CreateAppointment = async ({
  userId,
  ...data
}: CreateAppointmentRequest) => {
  const response = await request<GetAppointmentResponse>(
    API.CREATE_APPOINTMENT,
    data,
    {
      params: {
        userId,
      },
    }
  );

  return response?.data;
};

export const GetAppointmentById = async (params: GetAppointmentRequest) => {
  const response = await request<GetAppointmentResponse>(
    API.GET_APPOINTMENT_BY_ID,
    {},
    {
      params,
    }
  );

  return response?.data;
};
