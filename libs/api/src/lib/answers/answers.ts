import {
  GetAnswersRequest,
  GetAnswersResponse,
  GetAnswersSummaryRequest,
  GetAnswersSummeryResponse,
  SaveAnswersRequest,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const SaveAnswer = async ({ userId, ...rest }: SaveAnswersRequest) => {
  const answers = Object.entries(rest).map(([key, value]) => ({
    questionId: key,
    response: value,
  }));

  const dataToSave = {
    answers,
  };

  const response = await request<GetAnswersResponse>(
    API.SAVE_ANSWER,
    dataToSave,
    {
      params: {
        userId,
      },
      isSecure: true,
    }
  );

  return response?.data;
};

export const GetAnswers = async (params: GetAnswersRequest) => {
  const response = await request<GetAnswersResponse>(API.GET_ANSWERS, null, {
    params,
    isSecure: true,
  });

  return response?.data;
};

export const GetAnswersSummary = async (params: GetAnswersSummaryRequest) => {
  const response = await request<GetAnswersSummeryResponse>(
    API.GET_ANSWER_SUMMARY,
    null,
    { params, isSecure: true }
  );

  return response?.data;
};
