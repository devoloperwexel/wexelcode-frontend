/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomAdapterUser } from '@wexelcode/types';
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'next-auth' {
  interface Session {
    user: CustomAdapterUser;
  }
}
