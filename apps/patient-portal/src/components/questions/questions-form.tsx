'use client';

import {
  Button,
  Form,
  FormExpandedMultiSelector,
  FormExpandedSelector,
  FormInputField,
  Skeleton,
} from '@wexelcode/components';
import { useGetQuestionsByQuestionnaireId } from '@wexelcode/hooks';
import { useForm } from 'react-hook-form';

interface QuestionFormProps {
  questionnaireId: string;
}

export default function QuestionForm({ questionnaireId }: QuestionFormProps) {
  console.log('QuestionForm', questionnaireId);
  const { isLoading, data } = useGetQuestionsByQuestionnaireId({
    questionId: questionnaireId,
    page: 1,
    limit: 20,
  });

  const form = useForm({
    defaultValues: {
      name: 'Imasha Weerakoon',
      nums: [],
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-full h-2" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {data?.results.map((question, index) => {
          const title = `${index + 1}. ${question.text['en']}`;

          if (question.type === 'TEXT') {
            return (
              <div key={question.id}>
                <FormInputField
                  name={`question-${question.id}`}
                  label={title}
                  lines={3}
                />
              </div>
            );
          }
          if (question.type === 'MULTIPLE_CHOICE') {
            return (
              <div key={question.id}>
                <FormExpandedMultiSelector
                  name={`question-${question.id}`}
                  label={title}
                  options={question.options.map((option) => ({
                    label: option['en'],
                    value: option['en'],
                  }))}
                />
              </div>
            );
          }

          if (question.type === 'RADIO') {
            return (
              <div key={question.id}>
                <FormExpandedSelector
                  name={`question-${question.id}`}
                  label={title}
                  options={question.options.map((option) => ({
                    label: option['en'],
                    value: option['en'],
                  }))}
                />
              </div>
            );
          }
        })}
        <div className="flex space-x-4 justify-end">
          <Button variant="outline">Back</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}
