'use client';

import { Button } from '@wexelcode/components';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Routes from '../../../../../constants/routes';
import { Link } from '../../../../../i18n/routing';

interface Props {
  appointmentId: string;
}

export default function AppointmentSuccessPageContent({
  appointmentId,
}: Props) {
  const t = useTranslations('appointments.paymentSuccess');
  return (
    <div className="h-fill flex flex-col items-center justify-center h-full space-y-6">
      <div className="text-center space-y-6 animate-[fade-in_0.5s_ease-out]">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-foreground">
            {t('success')}
          </h1>
          <p className="text-xl text-muted-foreground">{t('message')}</p>
          <div>
            <Link href={`${Routes.appointments}/${appointmentId}`}>
              <Button>{t('goToAppointment')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
