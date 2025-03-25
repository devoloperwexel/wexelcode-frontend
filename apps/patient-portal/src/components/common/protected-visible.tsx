'use client';

import { useSession } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export function ProtectedVisible({ children }: PropsWithChildren) {
  const { status } = useSession();

  if (status === 'loading' || status === 'unauthenticated') {
    return null;
  }

  return children;
}
