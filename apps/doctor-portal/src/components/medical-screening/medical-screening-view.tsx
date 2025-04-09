'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Text,
} from '@wexelcode/components';
import {
  useGetAllQuestions,
  useGetAnswers,
  useGetPatientByUserId,
} from '@wexelcode/hooks';
import { Question } from '@wexelcode/types';
import { useLocale } from 'next-intl';

interface MedicalScreeningViewProps {
  appointmentId?: string;
  patientId: string;
}

export function MedicalScreeningView({
  patientId,
  appointmentId,
}: MedicalScreeningViewProps) {
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
    <div>
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
