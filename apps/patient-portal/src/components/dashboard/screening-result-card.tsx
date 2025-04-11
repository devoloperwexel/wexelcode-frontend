'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Dialog,
  ProgressIndicator,
  Text,
} from '@wexelcode/components';
import { useGetAnswers, useGetAnswersSummery } from '@wexelcode/hooks';
import { dateTimeFormat, extractLastScreening } from '@wexelcode/utils';
import {
  ActivityIcon,
  CalculatorIcon,
  CheckCircleIcon,
  FileX,
} from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { useScreeningDialogStore } from '../../app/store';
import { NoDataBanner } from '../common';
import { QuestionnaireDialog } from '../questions';
import { LoadingAppointmentCard } from './loading';

export function ScreeningResultCard() {
  const t = useTranslations('dashboard.screeningResultCard');
  const { data: userData } = useSession();

  const { isOpen, openDialog } = useScreeningDialogStore();

  const { data: response, isLoading } = useGetAnswers({
    userId: userData?.user.id,
  });

  const { data: summeryResponse } = useGetAnswersSummery({
    userId: userData?.user.id,
  });

  if (isLoading) {
    return <LoadingAppointmentCard />;
  }

  if (!response || response.length === 0) {
    return (
      <Card className="flex flex-col">
        <CardHeader>{t('title')}</CardHeader>
        <CardContent className="flex flex-grow items-center justify-center">
          <NoDataBanner
            message={t('noDataFound')}
            icon={<FileX size={36} className="text-primary" />}
          />
        </CardContent>
        <CardFooter className="w-full">
          <Dialog open={isOpen}>
            <Button variant="outline" className="w-full" onClick={openDialog}>
              {t('startNew')}
            </Button>
            <QuestionnaireDialog />
          </Dialog>
        </CardFooter>
      </Card>
    );
  }

  const lastScreening = extractLastScreening(response);

  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-start">
          <ProgressIndicator
            percentage={summeryResponse?.completedPercentage || 0}
            size={140}
          >
            <div className="flex flex-col justify-center text-center">
              <Text weight="semibold">
                {summeryResponse?.completedPercentage} %
              </Text>
            </div>
          </ProgressIndicator>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <CalculatorIcon className="w-5 h-5 text-primary" />
            <Text>{t('date')}</Text>
          </div>
          {lastScreening?.createdAt && (
            <Text variant="muted">
              {dateTimeFormat(lastScreening.createdAt, 'Do MMMM, yyyy')}
            </Text>
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <ActivityIcon className="w-5 h-5 text-primary" />
            <Text>{t('result')}</Text>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
            <Text variant="muted" className="!text-green-500">
              {summeryResponse?.status}
            </Text>
          </div>
        </div>
      </CardContent>

      <CardFooter className="w-full">
        <Dialog open={isOpen}>
          <Button variant="outline" className="w-full" onClick={openDialog}>
            {t('startNew')}
          </Button>

          <QuestionnaireDialog />
        </Dialog>
      </CardFooter>
    </Card>
  );
}
