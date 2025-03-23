import { Answer } from './answer.types';

export interface SaveAnswersRequest extends Answer {
  userId: string;
}

export interface GetAnswersRequest {
  userId?: string;
  appointmentId?: string;
  questionnaireId?: string;
}
