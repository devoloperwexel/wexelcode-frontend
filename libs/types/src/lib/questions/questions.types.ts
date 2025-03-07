import { TranslatedField } from '../..';

export interface Question {
  id: string;
  questionnaireId: string;
  type: 'radio' | 'MULTIPLE_CHOICE' | 'text';
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
  questions: Question[];
}
