/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Question } from '@wexelcode/types';
import { useForm, useFormContext } from 'react-hook-form';

import {
  MultipleSelectQuestion,
  SingleSelectQuestion,
  TextQuestion,
} from './inputs';

interface QuestionFormInputProps {
  question: Question;
  local: string;
  gender: string;
}

const ParentQuestionsFormInput: React.FC<QuestionFormInputProps> = ({
  question,
  local,
  gender,
}) => {
  if (
    question.requiredGenders.length > 0 &&
    !question.requiredGenders.includes(gender)
  ) {
    return null;
  }

  switch (question.type) {
    case 'TEXT':
      return <TextQuestion question={question} />;
    case 'MULTIPLE_CHOICE':
      return <MultipleSelectQuestion question={question} />;
    case 'RADIO':
      return <SingleSelectQuestion question={question} />;
    default:
      return null;
  }
};

const ChildQuestionsFormInput: React.FC<QuestionFormInputProps> = ({
  question,
  local,
  gender,
}) => {
  const { watch } = useFormContext();

  const requiredQuestionValue = watch(question.requiredQuestionId!);

  if (requiredQuestionValue !== question.requiredAnswer![local]) {
    return null;
  }

  return (
    <ParentQuestionsFormInput
      question={question}
      local={local}
      gender={gender}
    />
  );
};

export { ChildQuestionsFormInput, ParentQuestionsFormInput };
