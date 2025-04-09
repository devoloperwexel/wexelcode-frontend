'use client';

import { Button } from '@wexelcode/components';
import { dateTimeDiff } from '@wexelcode/utils';
import { VideoIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

type Props = {
  appointmentId: string;
  appointmentTime: string;
};

const AppointmentVideoCallCard = ({
  appointmentId,
  appointmentTime,
}: Props) => {
  const t = useTranslations('appointments.videoCallCard');

  const allowJoinBefore = 5 * 60 * 1000; // 5 minutes
  const isJoinable =
    dateTimeDiff(appointmentTime, new Date()) < allowJoinBefore;
  return (
    <aside className="space-y-6 mt-1 ml-1">
      <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary">
        <h2 className="text-xl font-semibold mb-4">{t('title')}</h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="font-medium">1.</span>
            {t('ensureInternet')}
          </li>
          <li className="flex items-start gap-2">
            <span className="font-medium">2.</span>
            {t('joinCallFromQuiet')}
          </li>
          <li className="flex items-start gap-2">
            <span className="font-medium">3.</span>
            {t('testCamera')}
          </li>
          <li className="flex items-start gap-2">
            <span className="font-medium">4.</span>
            {t('beReady')}
          </li>
        </ul>
      </div>
      <div className="div">
        {isJoinable ? (
          <Link href={`${Routes.appointments}/${appointmentId}/video-call`}>
            <Button className="w-full min-h-12">
              <VideoIcon className="w-12 h-12" />
              {t('joinVideoCall')}
            </Button>
          </Link>
        ) : (
          <Button className="w-full min-h-12" disabled>
            <VideoIcon className="w-12 h-12" />
            {t('joinVideoCall')}
          </Button>
        )}

        {!isJoinable && (
          <p className=" text-xs text-gray-600 text-center mt-2">
            {t('buttonEnableMessage')}
          </p>
        )}
      </div>
    </aside>
  );
};

export default AppointmentVideoCallCard;
