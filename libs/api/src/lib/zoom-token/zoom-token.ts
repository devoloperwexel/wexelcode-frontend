import { GetZoomTokenRequest, GetZoomTokenResponse } from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetZoomToken = async (data: GetZoomTokenRequest) => {
  const response = await request<GetZoomTokenResponse>(
    API.GET_ZOOM_TOKEN,
    data,
    { isSecure: true }
  );

  return response;
};
