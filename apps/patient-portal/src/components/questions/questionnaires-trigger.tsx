import { Button, Dialog, ProgressIndicator, Text } from '@wexelcode/components';
import { useGetAnswersSummery } from '@wexelcode/hooks';
import {
  ClipboardListIcon,
  Edit,
  FileCheck,
  PlusCircleIcon,
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { useScreeningDialogStore } from '../../app/store';
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

  const { data: response } = useGetAnswersSummery({
    userId: userData?.user.id,
    appointmentId,
  });

  const { isOpen, openDialog } = useScreeningDialogStore();

  return (
    <Dialog open={isOpen}>
      <div {...rest}>
        {!response || response.completedPercentage === 0 ? (
          <>
            <ClipboardListIcon className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-2 text-gray-600">{t('noScreening')}</p>

            <Button
              variant="ghost"
              className="text-primary"
              onClick={openDialog}
            >
              <PlusCircleIcon className="w-5 h-5 mr-1" />
              {t('complete')}
            </Button>
            <p className=" text-red-400 text-[11px] font-semibold">{t('screeningComplete')}</p>
          </>
        ) : (
          <>
            <ProgressIndicator percentage={response.completedPercentage}>
              <div className="flex flex-col justify-center text-center">
                <Text>{response.completedPercentage} %</Text>
                <Text variant="muted">{t('score')}</Text>
              </div>
            </ProgressIndicator>
            <Text variant="muted" align="center">
              {t('result')}
            </Text>

            <Button
              variant="ghost"
              className="text-primary text-md"
              onClick={openDialog}
            >
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
