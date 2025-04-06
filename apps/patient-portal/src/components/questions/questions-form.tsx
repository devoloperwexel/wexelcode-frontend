'use client';

import { Button, Form, Text } from '@wexelcode/components';
import {
  useGetAnswers,
  useGetQuestionsByQuestionnaireId,
  useSaveAnswers,
} from '@wexelcode/hooks';
import { Questionnaire } from '@wexelcode/types';
import { extractAnswers } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
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
  disabled?: boolean;
  appointmentId?: string;
  onChangeIndex: (page: number) => void;
}

export default function QuestionForm({
  questionnaire,
  index,
  total,
  local,
  gender,
  appointmentId,
  disabled,
  onChangeIndex,
}: QuestionFormProps) {
  const t = useTranslations('questionnaire.dialog');

  const { data: userData } = useSession();

  const { isLoading, data } = useGetQuestionsByQuestionnaireId({
    id: questionnaire?.id,
    page: 1,
    limit: 20,
    includes: ['child-questions'],
    requiredQuestionId: 'null',
  });

  const { data: answers } = useGetAnswers({
    userId: userData?.user?.id,
    appointmentId,
  });

  const form = useForm({
    disabled: disabled,
  });

  const { mutateAsync: save } = useSaveAnswers();

  const handleOnClickPrevious = () => {
    onChangeIndex(index - 1);
  };

  const handleOnClickNext = () => {
    if (index + 1 === total) {
      // TODO: Navigate to the back
    } else {
      onChangeIndex(index + 1);
    }
  };

  const handleSubmit = async (data: any) => {
    if (!userData) return;
    if (!disabled) {
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(
          ([_, value]) => value !== null && value !== undefined
        )
      );

      await save({ userId: userData.user?.id, ...filteredData });
    }
    handleOnClickNext();
  };

  useEffect(() => {
    if (answers) {
      form.reset(extractAnswers(answers));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  if (isLoading) {
    return <QuestionsLoading />;
  }

  return (
    <div className="animate-fadeIn h-full pb-4">
      <Text variant="large" weight="semibold">
        {questionnaire?.name[local]}
      </Text>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <div className="space-y-8 overflow-y-auto my-4">
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
          </div>

          <div className="flex justify-between pt-4 z-10 border-t">
            <Button
              disabled={index === 0}
              onClick={handleOnClickPrevious}
              type="button"
            >
              {t('previous')}
            </Button>
            <Text variant="muted">
              {index + 1} / {total}
            </Text>
            <Button type="submit">
              {index + 1 === total ? t('finish') : t('next')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
