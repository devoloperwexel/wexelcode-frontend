'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@wexelcode/components';
import { useGetAllQuestions } from '@wexelcode/hooks';

export function MedicalScreeningView() {
  const { data: questionsResponse, isLoading } = useGetAllQuestions({
    limit: 100,
    page: 1,
    includes: ['questionnaire', 'child-questions'],
    requiredQuestionId: 'null',
  });

  return (
    <div>
      {questionsResponse &&
        questionsResponse.map((questionnaire) => (
          <Accordion key={questionnaire.id} type="single" collapsible>
            <AccordionItem value={questionnaire.id}>
              <AccordionTrigger>{questionnaire.name.en}</AccordionTrigger>
              <AccordionContent>
                {questionnaire.questions?.map((question) => (
                  <div key={question.id}>
                    <h3>{question.text.en}</h3>
                    {question.childQuestions?.map((childQuestion) => (
                      <div key={childQuestion.id}>
                        <h4>{childQuestion.text.en}</h4>
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
