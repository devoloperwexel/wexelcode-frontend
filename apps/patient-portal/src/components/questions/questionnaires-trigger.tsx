import {
  Button,
  Dialog,
  DialogTrigger,
  ProgressIndicator,
  Text,
} from '@wexelcode/components';
import { useGetAnswers } from '@wexelcode/hooks';
import {
  ClipboardListIcon,
  Edit,
  FileCheck,
  PlusCircleIcon,
} from 'lucide-react';
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
        {!response || response.length === 0 ? (
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
            <Text variant="muted" align="center">
              {t('result')}
            </Text>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-primary text-md">
                {disabled ? (
                  <>
                    <FileCheck className="w-5 h-5" />
                    {t('view')}{' '}
                  </>
                ) : (
                  <>
                    <Edit className="w-5 h-5" />
                    {t('edit')}
                  </>
                )}
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
