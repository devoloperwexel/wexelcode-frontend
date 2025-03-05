import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    authenticated?: boolean;
  }
}
