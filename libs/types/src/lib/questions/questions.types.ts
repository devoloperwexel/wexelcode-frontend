import { TranslatedField } from '../..';

export interface Question {
  id: string;
  questionnaireId: string;
  type: 'RADIO' | 'MULTIPLE_CHOICE' | 'TEXT';
  requiredQuestionId?: string;
  requiredAnswer?: string;
  requiredGenders: string[];
  text: TranslatedField;
  options: TranslatedField[];
  tooltip?: TranslatedField;
}

export interface Questionnaire {
  id: string;
  title: string;
  name: TranslatedField;
  questions?: Question[];
}
