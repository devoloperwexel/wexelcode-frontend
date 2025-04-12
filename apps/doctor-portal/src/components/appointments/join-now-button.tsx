import { Button } from '@wexelcode/components';
import { Appointment } from '@wexelcode/types';
import { dateTimeDiff } from '@wexelcode/utils';
import { VideoIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

interface JoinNowButtonProps
  extends Omit<React.ComponentProps<typeof Button>, 'children'> {
  appointment: Appointment;
}

export function JoinNowButton({ appointment, ...rest }: JoinNowButtonProps) {
  const t = useTranslations('appointments.detailsPage.overviewTab');

  const allowJoinBefore = 5 * 60 * 1000; // 5 minutes
  const isJoinable =
    dateTimeDiff(appointment.appointmentTime, new Date()) < allowJoinBefore;

  return (
    <Button {...rest} disabled={!isJoinable}>
      <VideoIcon className="w-12 h-12" />
      {t('joinVideoCall')}
    </Button>
  );
}
