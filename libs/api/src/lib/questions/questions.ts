import { GetQuestionsRequest, GetQuestionsResponse } from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetQuestions = async (params: GetQuestionsRequest) => {
  const response = await request<GetQuestionsResponse>(API.GET_ALL, null, {
    params,
  });

  return response?.data;
};
