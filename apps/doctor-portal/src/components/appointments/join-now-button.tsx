import { Button } from '@wexelcode/components';
import { Appointment } from '@wexelcode/types';
import { dateTimeDiff } from '@wexelcode/utils';
import { VideoIcon } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import React from 'react';

import Routes from '../../constants/routes';

interface JoinNowButtonProps
  extends Omit<React.ComponentProps<typeof Button>, 'children'> {
  appointment: Appointment;
  patientUserId?: string;
}

export function JoinNowButton({
  appointment,
  patientUserId,
  ...rest
}: JoinNowButtonProps) {
  const t = useTranslations('appointments.detailsPage.overviewTab');
  const allowJoinBefore = 5 * 60 * 1000; // 5 minutes
  const isJoinable =
    dateTimeDiff(appointment.appointmentTime, new Date()) < allowJoinBefore;

  return (
    <>
      {isJoinable ? (
        <Link
          href={`${Routes.appointments}/${patientUserId}/${appointment.id}/video-call`}
        >
          <Button {...rest}>
            <VideoIcon className="w-12 h-12" />
            {t('joinVideoCall')}
          </Button>
        </Link>
      ) : (
        <Button {...rest} disabled={!isJoinable}>
          <VideoIcon className="w-12 h-12" />
          {t('joinVideoCall')}
        </Button>
      )}
    </>
  );
}
