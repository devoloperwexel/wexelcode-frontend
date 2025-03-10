'use client';

import { Button, Form, Text } from '@wexelcode/components';
import { useGetQuestionsByQuestionnaireId } from '@wexelcode/hooks';
import { Questionnaire } from '@wexelcode/types';
import { useForm } from 'react-hook-form';

import {
  ChildQuestionsFormInput,
  ParentQuestionsFormInput,
} from './questions-form-input';
import QuestionsLoading from './questions-loading';

interface QuestionFormProps {
  questionnaire: Questionnaire;
  index: number;
  total: number;
  local: string;
  gender: string;
  onChangeIndex: (page: number) => void;
}

export default function QuestionForm({
  questionnaire,
  index,
  total,
  local,
  gender,
  onChangeIndex,
}: QuestionFormProps) {
  const { isLoading, data } = useGetQuestionsByQuestionnaireId({
    id: questionnaire.id,
    page: 1,
    limit: 20,
    includes: ['child-questions'],
    requiredQuestionId: 'null',
  });

  const form = useForm();

  const handleOnClickPrevious = () => {
    onChangeIndex(index - 1);
  };

  const handleOnClickNext = () => {
    if (index === total) {
      // TODO: Navigate to the back
    } else {
      onChangeIndex(index + 1);
    }
  };

  const handleSubmit = (data: any) => {
    console.log(data);
    handleOnClickNext();
  };

  if (isLoading) {
    return <QuestionsLoading />;
  }

  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
        {questionnaire.name['en']}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          {data?.results.map((question, index) => (
            <div key={index}>
              <ParentQuestionsFormInput
                question={question}
                local={local}
                gender={gender}
              />
              {question.childQuestions && (
                <div className="pl-4">
                  {question.childQuestions.map((childQuestion, index) => (
                    <div key={index} className="pl-6 space-y-4 relative">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-100" />
                      <ChildQuestionsFormInput
                        question={childQuestion}
                        local={local}
                        gender={gender}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-between py-2">
            <Button disabled={index === 0} onClick={handleOnClickPrevious}>
              Previous
            </Button>
            <Text variant="muted">
              {index + 1} / {total}
            </Text>
            <Button type="submit">{index === total ? 'Finish' : 'Next'}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
