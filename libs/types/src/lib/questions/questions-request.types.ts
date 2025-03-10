import { BaseRequest } from '../..';

export type GetQuestionnaireRequest = BaseRequest;

export interface GetQuestionnaireByQuestionnaireIdRequest extends BaseRequest {
  id: string;
  requiredQuestionId?: string;
}
