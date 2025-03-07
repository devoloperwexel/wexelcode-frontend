import { PaginatedResponse } from '../..';
import { Question, Questionnaire } from '.';

export type GetQuestionnaireResponse = PaginatedResponse<Questionnaire>;
export type GetQuestionsResponse = PaginatedResponse<Question>;
