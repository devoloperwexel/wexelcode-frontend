/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth';

import config from './config';

export const { handlers, signIn, signOut, auth } = NextAuth(config) as any;
