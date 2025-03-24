import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Dialog,
  DialogTrigger,
  ProgressIndicator,
  Text,
} from '@wexelcode/components';
import { useGetAnswers } from '@wexelcode/hooks';
import { ActivityIcon, CalculatorIcon, CheckCircleIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { QuestionnaireDialog } from '../questions';

export function ScreeningResultCard() {
  const t = useTranslations('dashboard.screeningResultCard');
  const { data: userData } = useSession();

  const { data: response } = useGetAnswers({
    userId: userData?.user.id,
  });

  const score = 80;

  return (
    <Card>
      <Dialog>
        <CardHeader>{t('title')}</CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-start">
            <ProgressIndicator percentage={score} size={140}>
              <div className="flex flex-col justify-center text-center">
                <Text>{score} %</Text>
                <Text variant="muted">{t('score')}</Text>
              </div>
            </ProgressIndicator>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <CalculatorIcon className="w-5 h-5 text-primary" />
              <Text>{t('date')}</Text>
            </div>
            <Text variant="muted">March 23, 2025 </Text>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <ActivityIcon className="w-5 h-5 text-primary" />
              <Text>{t('result')}</Text>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <Text variant="muted" className="!text-green-500">
                Normal
              </Text>
            </div>
          </div>
        </CardContent>

        <CardFooter className="w-full">
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              {t('startNew')}
            </Button>
          </DialogTrigger>
        </CardFooter>
        <QuestionnaireDialog />
      </Dialog>
    </Card>
  );
}
