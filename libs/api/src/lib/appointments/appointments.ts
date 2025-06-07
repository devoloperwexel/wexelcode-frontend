import {
  CreateAppointmentRequest,
  GetAppointmentRequest,
  GetAppointmentResponse,
  GetAppointmentsRequest,
  GetAppointmentsResponse,
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
      isSecure: true,
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
      isSecure: true,
    }
  );

  return response?.data;
};

export const GetAppointmentsByUserId = async (
  params: GetAppointmentsRequest
) => {
  const response = await request<GetAppointmentsResponse>(
    API.GET_APPOINTMENTS_BY_USER_ID,
    null,
    {
      params,
      isSecure: true,
    }
  );

  return response?.data;
};

export const GetAllAppointments = async (params: GetAppointmentsRequest) => {
  const response = await request<GetAppointmentsResponse>(
    API.GET_ALL_APPOINTMENTS,
    null,
    {
      params,
      isSecure: true,
    }
  );

  return response?.data;
};
