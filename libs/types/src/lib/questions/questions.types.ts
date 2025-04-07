import { TranslatedField } from '../..';

export interface Question {
  id: string;
  questionnaireId: string;
  questionnaire?: Questionnaire;
  type: 'RADIO' | 'MULTIPLE_CHOICE' | 'TEXT';
  requiredQuestionId?: string;
  requiredAnswer?: TranslatedField;
  requiredGenders: string[];
  text: TranslatedField;
  options: TranslatedField[];
  childQuestions?: Question[];
  tooltip?: TranslatedField;
}

export interface Questionnaire {
  id: string;
  name: TranslatedField;
  questions?: Question[];
}
