import {
  Button,
  Dialog,
  DialogTrigger,
  ProgressIndicator,
  Text,
} from '@wexelcode/components';
import { useGetAnswers } from '@wexelcode/hooks';
import { ClipboardListIcon, Edit, PlusCircleIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { QuestionnaireDialog } from './questionnaires-dialog';

interface QuestionnaireTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  appointmentId?: string;
  disabled?: boolean;
}

export function QuestionnaireTrigger({
  appointmentId,
  disabled,
  ...rest
}: QuestionnaireTriggerProps) {
  const t = useTranslations('questionnaire.trigger');

  const { data: userData } = useSession();

  const { data: response } = useGetAnswers({
    userId: userData?.user.id,
    appointmentId,
  });

  const score = 80;

  return (
    <Dialog>
      <div {...rest}>
        {score < 75 ? (
          <>
            <ClipboardListIcon className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-2 text-gray-600">{t('noScreening')}</p>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-primary">
                <PlusCircleIcon className="w-5 h-5 mr-1" />
                {t('complete')}
              </Button>
            </DialogTrigger>
          </>
        ) : (
          <>
            <ProgressIndicator percentage={score}>
              <div className="flex flex-col justify-center text-center">
                <Text>{score} %</Text>
                <Text variant="muted">Score</Text>
              </div>
            </ProgressIndicator>
            <p className="text-sm text-gray-600">{t('result')}</p>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-primary">
                <Edit className="w-5 h-5 mr-1" />
                {t('edit')}
              </Button>
            </DialogTrigger>
          </>
        )}
      </div>
      <QuestionnaireDialog
        appointmentId={appointmentId}
        disabled={!!appointmentId}
      />
    </Dialog>
  );
}
