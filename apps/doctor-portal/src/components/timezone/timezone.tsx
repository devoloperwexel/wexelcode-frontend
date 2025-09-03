'use client';

import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export const Timezone = () => {
  const t = useTranslations('timezone');
  const { data, status: sessionStatus } = useSession();
  const timezone =
    sessionStatus === 'loading'
      ? ''
      : data?.user?.timeZone ||
        Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className=" mr-4 text-sm capitalize">
      {t('timezone')}: {timezone.replaceAll('_', ' ')}
    </div>
  );
};
