'use client';

import { useGetQuestionnaire } from '@wexelcode/hooks';
import { useEffect, useState } from 'react';

import QuestionForm from './questions-form';
import QuestionsNavigationMenu from './questions-navigation-menu';

export function QuestionnaireSection() {
  const [selectedQuestionnaireId, setSelectedQuestionnaireId] = useState<
    string | undefined
  >();

  const { data: questionnaires } = useGetQuestionnaire({
    page: 1,
    limit: 20,
  });

  useEffect(() => {
    if (questionnaires?.results.length) {
      setSelectedQuestionnaireId(questionnaires.results[0].id);
    }
  }, [questionnaires]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <QuestionsNavigationMenu
          questionnaires={questionnaires?.results ?? []}
          selectedQuestionnaireId={selectedQuestionnaireId}
          onSelectQuestionnaire={setSelectedQuestionnaireId}
        />
      </div>
      <div className="col-span-2">
        {selectedQuestionnaireId && (
          <QuestionForm questionnaireId={selectedQuestionnaireId} />
        )}
      </div>
    </div>
  );
}
