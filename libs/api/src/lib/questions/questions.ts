import {
  GetQuestionnaireByQuestionnaireIdRequest,
  GetQuestionnaireRequest,
  GetQuestionnaireResponse,
  GetQuestionsResponse,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetQuestionnaire = async (params: GetQuestionnaireRequest) => {
  const response = await request<GetQuestionnaireResponse>(
    API.GET_ALL_QUESTIONNAIRES,
    null,
    {
      params,
    }
  );

  return response?.data;
};

export const GetQuestionnaireByQuestionnaireId = async (
  params: GetQuestionnaireByQuestionnaireIdRequest
) => {
  const response = await request<GetQuestionsResponse>(
    API.GET_QUESTIONS_BY_QUESTIONNAIRE_ID,
    null,
    {
      params,
    }
  );

  return response?.data;
};
