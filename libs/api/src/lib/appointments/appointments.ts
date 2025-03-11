import {
  CreateAppointmentRequest,
  GetQuestionnaireResponse,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const CreateAppointment = async ({
  userId,
  ...data
}: CreateAppointmentRequest) => {
  const response = await request<GetQuestionnaireResponse>(
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
