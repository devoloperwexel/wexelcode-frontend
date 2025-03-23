import { Card, CardContent, CardHeader } from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import { QuestionnaireTrigger } from '../questions';

interface MedicalScreeningInfoCardProps {
  appointmentId?: string;
}

export function MedicalScreeningInfoCard({
  appointmentId,
}: MedicalScreeningInfoCardProps) {
  const t = useTranslations('appointments.medicalScreeningCard');

  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>

      <CardContent>
        <QuestionnaireTrigger
          className="text-center py-6 border-2 border-dashed border-gray-200 rounded-lg"
          appointmentId={appointmentId}
        />
      </CardContent>
    </Card>
  );
}
