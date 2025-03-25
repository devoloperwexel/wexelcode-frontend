import { Timestamps, TranslatedField } from '../..';

export type Answer = Record<string, any>;

export interface SavedAnswer extends Timestamps {
  id: string;
  userId: string;
  questionId: string;
  response: TranslatedField;
}
