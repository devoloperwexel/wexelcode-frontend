import { Account } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';

import { User } from '../..';

export type CustomAdapterUser = User & AdapterUser;

export interface RPTTokenResponse {
  upgraded: boolean;
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  'not-before-policy': number;
}

export interface RefreshToken extends RPTTokenResponse {
  id_token: string;
}

export interface CustomToken extends JWT {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expires: number;
  refreshTokenExpires: number;
  user: CustomAdapterUser;
}

export interface KeycloakAccount extends Account {
  refresh_token?: string;
  refresh_expires_in: number;
  expires_in: number;
  providerAccountId: string;
}
