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

/**
 * Interface for defining account provider details.
 * This captures the provider ID and provider name from the authentication provider.
 */
export interface AccountProvider {
  providerAccountId: string;
  provider: string;
}

/**
 * Interface for defining the structure of a token response.
 * This includes the access token returned from authentication or authorization requests.
 */
export interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  scope: string;
}
