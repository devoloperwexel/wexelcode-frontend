import { CustomToken } from '@wexelcode/types';
import { getSession } from 'next-auth/react';

import { auth } from './auth';

export const getAccessToken = async (): Promise<string | null> => {
  let session: CustomToken | null = null;

  // Check if running on the server-side
  if (typeof window === 'undefined') {
    try {
      // Fetch the session on the server-side
      session = (await auth()) as CustomToken | null;
    } catch (error) {
      console.error('Error fetching server-side session:', error);
      return null;
    }
  } else {
    try {
      // Fetch the session on the client-side
      session = (await getSession()) as CustomToken | null;
    } catch (error) {
      console.error('Error fetching client-side session:', error);
      return null;
    }
  }

  // Return the access token if available, or null
  return session?.accessToken ?? null;
};
