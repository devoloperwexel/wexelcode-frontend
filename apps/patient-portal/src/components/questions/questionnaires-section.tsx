'use client';

import { Tabs, TabsList, TabsTrigger } from '@wexelcode/components';
import { useGetQuestionnaire } from '@wexelcode/hooks';
import { ClipboardListIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import QuestionForm from './questions-form';
import QuestionsNavigationMenu from './questions-navigation-menu';

export function QuestionnaireSection() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const { data: questionnaires } = useGetQuestionnaire({
    page: 1,
    limit: 20,
  });

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200">
      {questionnaires?.results && (
        <QuestionsNavigationMenu
          questionnaires={questionnaires.results}
          currentIndex={currentCategoryIndex}
          onSelect={setCurrentCategoryIndex}
        />
      )}
      <div className="p-4">
        {questionnaires?.results && (
          <QuestionForm
            questionnaire={questionnaires.results[currentCategoryIndex]}
          />
        )}
      </div>
    </div>
  );
}
