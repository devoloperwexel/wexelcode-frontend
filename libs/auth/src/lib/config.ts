/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  CustomAdapterUser,
  CustomSession,
  CustomToken,
  KeycloakAccount,
} from '@wexelcode/types';
import { NextAuthConfig } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import KeycloakProvider from 'next-auth/providers/keycloak';

import AuthAdapter from './auth-adapter';
import { FederatedSignOut, RefreshTokens } from './auth-api';

const config: NextAuthConfig = {
  trustHost: true,
  adapter: AuthAdapter() as unknown as Adapter,
  secret: process.env['AUTH_SECRET'],
  providers: [
    KeycloakProvider({
      clientId: process.env['AUTH_KEYCLOAK_ID'],
      clientSecret: process.env['AUTH_KEYCLOAK_SECRET'],
      issuer: process.env['AUTH_KEYCLOAK_ISSUER'],
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60,
  },
  events: {
    signOut: async (message) => {
      if ('token' in message) {
        const customToken = message.token as CustomToken;
        await FederatedSignOut(customToken);
      }
    },
  },
  callbacks: {
    jwt: async ({ token, user, account, trigger, session }) => {
      let customToken = token as CustomToken;
      const customUser = user as CustomAdapterUser;

      if (account && user) {
        const keycloakAccount = account as KeycloakAccount;
        const currentTime = Math.floor(Date.now() / 1000);
        const expiresAt = currentTime + keycloakAccount.expires_in;
        const refreshTokenExpiresAt =
          currentTime + keycloakAccount.refresh_expires_in;

        customToken = {
          accessToken: keycloakAccount.access_token!,
          refreshToken: keycloakAccount.refresh_token!,
          idToken: keycloakAccount.id_token!,
          expires: expiresAt,
          refreshTokenExpires: refreshTokenExpiresAt,
          user: customUser,
        };
      }

      if (trigger === 'update') {
        customToken.user = session.user as CustomAdapterUser;
      }

      if (Date.now() / 1000 < customToken.expires) {
        return customToken;
      }

      const newToken = await RefreshTokens(customToken.refreshToken);

      if (newToken) {
        const currentTime = Math.floor(Date.now() / 1000);
        const expiresAt = currentTime + newToken.expires_in;
        const refreshTokenExpiresAt = currentTime + newToken.refresh_expires_in;

        return {
          ...customToken,
          accessToken: newToken.access_token,
          refreshToken: newToken.refresh_token,
          idToken: customToken.idToken,
          expires: expiresAt,
          refreshTokenExpires: refreshTokenExpiresAt,
        };
      }

      return {
        ...customToken,
        error: 'RefreshAccessTokenError',
      };
    },
    session: async ({ session, token }) => {
      const customToken = token as CustomToken;
      const extendedSession = session as CustomSession;

      extendedSession.accessToken = customToken.accessToken;
      extendedSession.idToken = customToken.idToken;
      extendedSession.refreshToken = customToken.refreshToken;
      extendedSession.expires = customToken.expires as unknown as string; // Ensure 'expires' is a string
      extendedSession.user = { ...customToken.user };
      //
      return extendedSession;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
};

export default config;
