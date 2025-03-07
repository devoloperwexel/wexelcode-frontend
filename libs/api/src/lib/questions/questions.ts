import {
  GetQuestionnaireResponse,
  GetQuestionsRequest,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetQuestionnaire = async (params: GetQuestionsRequest) => {
  const response = await request<GetQuestionnaireResponse>(API.GET_ALL, null, {
    params,
  });

  return response?.data;
};
