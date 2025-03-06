'use client';

import { signIn, useSession } from 'next-auth/react';
import { PropsWithChildren, useEffect } from 'react';

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn('keycloak', {
        callbackUrl: window.location.href,
      });
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return children;
  }

  return null;
};
