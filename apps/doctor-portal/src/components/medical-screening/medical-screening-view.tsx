'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ProgressIndicator,
  Text,
} from '@wexelcode/components';
import {
  useGetAllQuestions,
  useGetAnswers,
  useGetAnswersSummery,
  useGetPatientByUserId,
} from '@wexelcode/hooks';
import { Question } from '@wexelcode/types';
import { dateTimeFormat, extractLastScreening } from '@wexelcode/utils';
import {
  ActivityIcon,
  CalculatorIcon,
  CheckCircleIcon,
  CircleAlert,
  FileWarning,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

interface MedicalScreeningViewProps {
  appointmentId?: string;
  patientId: string;
}

export function MedicalScreeningView({
  patientId,
  appointmentId,
}: MedicalScreeningViewProps) {
  const t = useTranslations('screening');

  const local = useLocale();

  const { data: questionsResponse, isLoading } = useGetAllQuestions({
    limit: 100,
    page: 1,
    includes: ['questionnaire', 'child-questions'],
    requiredQuestionId: 'null',
  });

  const { data: answersResponse } = useGetAnswers({
    appointmentId: appointmentId,
    userId: patientId,
  });

  const { data: patientResponse } = useGetPatientByUserId(patientId);

  const renderChildQuestion = (question: Question) => {
    const requiredAnswer = answersResponse?.find(
      (a) => a.questionId === question.requiredQuestionId
    );

    if (
      !question.requiredAnswer ||
      requiredAnswer?.response[local] !== question.requiredAnswer[local]
    ) {
      return null;
    }

    return renderParentQuestion(question);
  };

  const { data: summeryResponse } = useGetAnswersSummery({
    userId: patientId,
    appointmentId,
  }) as Awaited<ReturnType<typeof useGetAnswersSummery>>;

  const lastScreening = extractLastScreening(answersResponse || []);

  const renderParentQuestion = (question: Question) => {
    if (
      question.requiredGenders.length > 0 &&
      !question.requiredGenders.includes(patientResponse?.user.gender as string)
    ) {
      return;
    }

    const answer = answersResponse?.find((a) => a.questionId === question.id);

    return (
      <div key={question.id}>
        <Text>{question.text[local]}</Text>
        <Text variant="muted"> {answer && answer.response[local]}</Text>
      </div>
    );
  };

  return (
    <div className="p-4">
      {summeryResponse && (
        <div className="space-y-4 pb-4 mb-4 p-4">
          <div className="flex flex-col items-center justify-start">
            <ProgressIndicator
              percentage={summeryResponse?.completedPercentage || 0}
              size={120}
            >
              <div className="flex flex-col justify-center text-center">
                <Text weight="semibold">
                  {summeryResponse?.completedPercentage} %
                </Text>
              </div>
            </ProgressIndicator>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <CalculatorIcon className="w-5 h-5 text-primary" />
              <Text>{t('date')}</Text>
            </div>
            {lastScreening?.createdAt && (
              <Text variant="muted">
                {dateTimeFormat(lastScreening.createdAt, 'Do MMMM, yyyy')}
              </Text>
            )}
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <ActivityIcon className="w-5 h-5 text-primary" />
              <Text>{t('result')}</Text>
            </div>
            <div className="flex items-center space-x-2">
              {summeryResponse?.status === 'In Complete' ? (
                <FileWarning className="w-5 h-5 " />
              ) : summeryResponse?.status === 'Red' ? (
                <CircleAlert className="w-6 h-6 text-red-500" />
              ) : summeryResponse?.status === 'Yellow' ? (
                <CircleAlert className="w-6 h-6 text-yellow-500" />
              ) : (
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
              )}
              <Text
                variant="muted"
                className={`w-6 h-6 text-${summeryResponse?.status?.toLocaleLowerCase}-500`}
              >
                {t(
                  summeryResponse?.status === 'In Complete'
                    ? 'inComplete'
                    : summeryResponse?.status.toLowerCase()
                )}
              </Text>
            </div>
          </div>
        </div>
      )}

      {questionsResponse &&
        questionsResponse.map((questionnaire) => (
          <Accordion key={questionnaire.id} type="single" collapsible>
            <AccordionItem value={questionnaire.id}>
              <AccordionTrigger>{questionnaire.name[local]}</AccordionTrigger>
              <AccordionContent className="space-y-4">
                {questionnaire.questions?.map((question) => (
                  <div key={question.id}>
                    {renderParentQuestion(question)}

                    {question.childQuestions?.map((childQuestion) => (
                      <div
                        key={childQuestion.id}
                        className="pl-6 space-y-4 relative"
                      >
                        <div className="absolute left-0 top-0 h-full w-0.5 bg-border" />
                        {renderChildQuestion(childQuestion)}
                      </div>
                    ))}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </div>
  );
}
