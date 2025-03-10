'use client';

import { useGetQuestionnaire } from '@wexelcode/hooks';
import { useState } from 'react';

import QuestionForm from './questions-form';
import QuestionsNavigationMenu from './questions-navigation-menu';

interface QuestionnaireSectionProps {
  local: string;
  gender: string;
}

export function QuestionnaireSection({
  local,
  gender,
}: QuestionnaireSectionProps) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const { data: questionnaires } = useGetQuestionnaire({
    page: 1,
    limit: 20,
  });

  return (
    <div className="bg-white rounded-lg shadow-lg transition-all duration-200">
      {questionnaires?.results && (
        <QuestionsNavigationMenu
          local={local}
          questionnaires={questionnaires.results}
          currentIndex={currentCategoryIndex}
          onSelect={setCurrentCategoryIndex}
        />
      )}
      <div className="p-4">
        {questionnaires?.results && (
          <QuestionForm
            questionnaire={questionnaires.results[currentCategoryIndex]}
            index={currentCategoryIndex}
            total={questionnaires.results.length}
            local={local}
            gender={gender}
            onChangeIndex={setCurrentCategoryIndex}
          />
        )}
      </div>
    </div>
  );
}
