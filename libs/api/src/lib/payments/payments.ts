import {
  CreateStripePaymentIntentRequest,
  CreateStripePaymentResponse,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const CreateStripePaymentIntent = async (
  data: CreateStripePaymentIntentRequest
) => {
  const response = await request<CreateStripePaymentResponse>(
    API.CREATE_STRIPE_PAYMENT_INTENT,
    data,
    {
      isSecure: true,
    }
  );

  return response?.data;
};
