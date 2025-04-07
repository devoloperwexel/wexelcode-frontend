import {
  GetAllQuestionsRequest,
  GetQuestionnaireByQuestionnaireIdRequest,
  GetQuestionnaireRequest,
  GetQuestionnaireResponse,
  GetQuestionsResponse,
  Questionnaire,
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

export const GetAllQuestions = async (params: GetAllQuestionsRequest) => {
  const response = await request<GetQuestionsResponse>(
    API.GET_ALL_QUESTIONS,
    null,
    {
      params,
    }
  );

  return response?.data.results.reduce<Questionnaire[]>((acc, question) => {
    const questionnaireIndex = acc.findIndex(
      (q) => q.id === question.questionnaireId
    );

    if (questionnaireIndex === -1 && question.questionnaire) {
      const questionnaire = question.questionnaire;
      questionnaire.questions = [question];
      acc.push(questionnaire);
    } else {
      acc[questionnaireIndex].questions?.push(question);
    }

    return acc;
  }, []);
};
