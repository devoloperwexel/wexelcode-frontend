'use client';

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@wexelcode/components';
import { useGetQuestionnaire } from '@wexelcode/hooks';
import { useState } from 'react';

import QuestionForm from './questions-form';
import QuestionsNavigationMenu from './questions-navigation-menu';

export function QuestionnaireDialog() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const { data: questionnaires } = useGetQuestionnaire({
    page: 1,
    limit: 20,
  });

  return (
    <DialogContent className="max-w-fit">
      <DialogHeader>
        <DialogTitle>Screening</DialogTitle>
      </DialogHeader>

      {questionnaires?.results && (
        <QuestionsNavigationMenu
          local={'en'}
          questionnaires={questionnaires.results}
          currentIndex={currentCategoryIndex}
          onSelect={setCurrentCategoryIndex}
        />
      )}

      <div className="p-4 h-[calc(100vh-15rem)] overflow-y-auto">
        {questionnaires?.results && (
          <QuestionForm
            questionnaire={questionnaires.results[currentCategoryIndex]}
            index={currentCategoryIndex}
            total={questionnaires.results.length}
            local={'en'}
            gender={'male'}
            onChangeIndex={setCurrentCategoryIndex}
          />
        )}
      </div>
    </DialogContent>
  );
}
