'use client';

import { Button, Form, Skeleton } from '@wexelcode/components';
import { useGetQuestionsByQuestionnaireId } from '@wexelcode/hooks';
import { Question, Questionnaire } from '@wexelcode/types';
import { useForm } from 'react-hook-form';

import { MultipleSelectQuestion, SingleSelectQuestion } from './inputs';
import { TextQuestion } from './inputs/text-question';

interface QuestionFormProps {
  questionnaire: Questionnaire;
}

export default function QuestionForm({ questionnaire }: QuestionFormProps) {
  const { isLoading, data } = useGetQuestionsByQuestionnaireId({
    id: questionnaire.id,
    page: 1,
    limit: 20,
  });

  const form = useForm();

  const handleSubmit = (data: any) => {
    console.log(data);
  };
  const renderQuestion = (question: Question) => {
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

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-full h-2" />
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
        {questionnaire.name['en']}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          {data?.results.map((question, index) => (
            <div key={index}>{renderQuestion(question)}</div>
          ))}
          <div className="flex justify-end">
            <Button size="lg">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
