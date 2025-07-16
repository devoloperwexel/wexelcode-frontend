import {
  GetTotalCreditResponse,
  GetTotalCreditsRequest,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetUserTotalCredits = async (params: GetTotalCreditsRequest) => {
  const response = await request<GetTotalCreditResponse>(
    API.GET_TOTAL_CREDIT,
    null,
    {
      params,
      isSecure: true,
    }
  );

  return response?.data;
};
