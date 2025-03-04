'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  // NOTE: refetchInterval must be the time of access token expiration in seconds = 5 minutes
  return (
    <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  );
};
