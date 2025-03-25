import {
  GetAnswersRequest,
  GetAnswersResponse,
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
    }
  );

  return response?.data;
};

export const GetAnswers = async (params: GetAnswersRequest) => {
  const response = await request<GetAnswersResponse>(API.GET_ANSWERS, null, {
    params,
  });

  return response?.data;
};
