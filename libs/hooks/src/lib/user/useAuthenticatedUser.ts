import { User } from '@wexelcode/types';
import { useSession } from 'next-auth/react';

export const useAuthenticatedUser = () => {
  const { status, data } = useSession();

  if (status === 'unauthenticated') {
    return null;
  }

  return data?.user as Pick<User, 'name' | 'email'>;
};
