import { Card, CardContent, CardHeader } from '@wexelcode/components';
import { Questionnaire } from '@wexelcode/types';
import { ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface QuestionsNavigationMenuProps {
  questionnaires: Questionnaire[];
  selectedQuestionnaireId?: string;
  onSelectQuestionnaire: (questionnaireId: string) => void;
}

export default function QuestionsNavigationMenu({
  selectedQuestionnaireId,
  questionnaires,
  onSelectQuestionnaire,
}: QuestionsNavigationMenuProps) {
  return (
    <Card>
      <CardHeader>Questionnaires</CardHeader>
      <CardContent className="flex flex-col space-y-2">
        {questionnaires.map((questionnaire) => (
          <div
            key={questionnaire.id}
            className={twMerge(
              'flex justify-between items-center border-b p-2 rounded-sm cursor-pointer',
              questionnaire.id === selectedQuestionnaireId
                ? 'bg-primary text-white'
                : 'hover:bg-border'
            )}
            onClick={() => onSelectQuestionnaire(questionnaire.id)}
          >
            {questionnaire.name['en']}
            <ChevronRight size={16} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
