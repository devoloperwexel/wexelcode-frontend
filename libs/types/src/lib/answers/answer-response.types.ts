import { BaseResponse } from '../..';
import { AnswerSummary, SavedAnswer } from '.';

export type GetAnswersResponse = BaseResponse<SavedAnswer[]>;

export type GetAnswersSummeryResponse = BaseResponse<AnswerSummary>;
