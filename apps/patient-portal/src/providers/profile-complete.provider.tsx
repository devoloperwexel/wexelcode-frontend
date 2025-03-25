'use client';

import { useSession } from 'next-auth/react';
import { PropsWithChildren, useEffect } from 'react';

import Routes from '../constants/routes';
import { useRouter } from '../i18n/routing';

export function ProfileCompleteProvider({ children }: PropsWithChildren) {
  const { status, data } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && !data?.user?.address) {
      push(`${Routes.profile.complete}/${data.user.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, data]);

  return children;
}
