'use client';

import { Button, Form, Text } from '@wexelcode/components';
import {
  useGetAnswers,
  useGetQuestionsByQuestionnaireId,
  useSaveAnswers,
} from '@wexelcode/hooks';
import { Questionnaire } from '@wexelcode/types';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
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
  const { data: userData } = useSession();

  const { isLoading, data } = useGetQuestionsByQuestionnaireId({
    id: questionnaire.id,
    page: 1,
    limit: 20,
    includes: ['child-questions'],
    requiredQuestionId: 'null',
  });

  const { data: answers } = useGetAnswers({
    userId: userData?.user?.id,
    questionnaireId: questionnaire.id,
  });

  const form = useForm();

  const { mutateAsync: save } = useSaveAnswers();

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

  const handleSubmit = async (data: any) => {
    if (!userData) return;
    await save({ userId: userData.user?.id, ...data });
    handleOnClickNext();
  };

  useEffect(() => {
    if (answers) {
      console.log('answers', answers);
      form.reset(answers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  if (isLoading) {
    return <QuestionsLoading />;
  }

  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
        {questionnaire.name[local]}
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
