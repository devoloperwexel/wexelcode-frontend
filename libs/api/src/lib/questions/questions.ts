import {
  GetQuestionnaireResponse,
  GetQuestionsRequest,
  GetQuestionsResponse,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetQuestionnaire = async (params: GetQuestionsRequest) => {
  const response = await request<GetQuestionnaireResponse>(
    API.GET_ALL_QUESTIONNAIRES,
    null,
    {
      params,
    }
  );

  return response?.data;
};

export const GetQuestionnaireByQuestionnaireId = async (id: string) => {
  const response = await request<GetQuestionsResponse>(
    API.GET_QUESTIONS_BY_QUESTIONNAIRE_ID,
    {
      id,
    }
  );

  return response?.data;
};
