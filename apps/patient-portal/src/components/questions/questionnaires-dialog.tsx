'use client';

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@wexelcode/components';
import { useGetQuestionnaire } from '@wexelcode/hooks';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import QuestionForm from './questions-form';
import QuestionsNavigationMenu from './questions-navigation-menu';

interface QuestionnaireDialogProps {
  appointmentId?: string;
  disabled?: boolean;
}

export function QuestionnaireDialog({
  appointmentId,
  disabled,
}: QuestionnaireDialogProps) {
  const t = useTranslations('questionnaire.dialog');
  const local = useLocale();

  const { data: userData } = useSession();

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const { data: questionnaires } = useGetQuestionnaire({
    page: 1,
    limit: 20,
  });

  return (
    <DialogContent className="max-w-fit">
      <DialogHeader>
        <DialogTitle>{t('title')}</DialogTitle>
      </DialogHeader>

      {questionnaires?.results && (
        <QuestionsNavigationMenu
          local={local}
          questionnaires={questionnaires.results}
          currentIndex={currentCategoryIndex}
          onSelect={setCurrentCategoryIndex}
        />
      )}

      <div className="h-[calc(100vh-15rem)]">
        {questionnaires?.results && (
          <QuestionForm
            questionnaire={questionnaires.results[currentCategoryIndex]}
            index={currentCategoryIndex}
            total={questionnaires.results.length}
            local={local}
            gender={userData?.user.gender || 'male'}
            appointmentId={appointmentId}
            disabled={disabled}
            onChangeIndex={setCurrentCategoryIndex}
          />
        )}
      </div>
    </DialogContent>
  );
}
