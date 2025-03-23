import { TranslatedField } from '../..';

export type Answer = Record<string, any>;

export interface SavedAnswer {
  id: string;
  userId: string;
  questionId: string;
  response: TranslatedField;
}
