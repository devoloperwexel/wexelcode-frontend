import {
  ValidateCouponRequest,
  ValidateCouponResponse,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const ValidateCoupon = async (params: ValidateCouponRequest) => {
  const response = await request<ValidateCouponResponse>(
    API.VALIDATE_COUPON,
    null,
    {
      params,
      isSecure: false,
    }
  );

  return response?.data;
};
