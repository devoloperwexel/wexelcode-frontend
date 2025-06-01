/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomAdapterUser } from '@wexelcode/types';
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    idToken?: string;
    user: CustomAdapterUser;
  }
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    authenticated?: boolean;
  }
}
