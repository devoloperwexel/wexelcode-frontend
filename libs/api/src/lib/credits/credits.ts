import { GetTotalCreditResponse } from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetUserTotalCredits = async (userId?: string) => {
  const response = await request<GetTotalCreditResponse>(
    API.GET_TOTAL_CREDIT,
    null,
    {
      params: { userId },
      isSecure: true,
    }
  );

  return response?.data;
};
