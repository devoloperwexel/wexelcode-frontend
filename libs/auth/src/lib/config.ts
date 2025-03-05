/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FederatedSignOut, GetUserInfo, RefreshTokens } from '@wexelcode/api';
import {
  CustomAdapterUser,
  CustomToken,
  KeycloakAccount,
} from '@wexelcode/types';
import { NextAuthConfig } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

const config: NextAuthConfig = {
  providers: [
    KeycloakProvider({
      clientId: process.env.AUTH_KEYCLOAK_ID,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER,
    }),
  ],
  session: {
    strategy: 'jwt',
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
    jwt: async ({ token, user, account }) => {
      let customToken = token as CustomToken;
      const customUser = user as CustomAdapterUser;

      if (account && user) {
        const keycloakAccount = account as KeycloakAccount;
        const currentTime = Math.floor(Date.now() / 1000);
        const expiresAt = currentTime + keycloakAccount.expires_in;
        const refreshTokenExpiresAt =
          currentTime + keycloakAccount.refresh_expires_in;
        console.log('keycloakAccount', keycloakAccount);
        const userInfo = await GetUserInfo({
          accessToken: keycloakAccount.access_token!,
          userId: keycloakAccount.providerAccountId,
        });

        if (!userInfo) {
          return {
            ...customToken,
            error: 'GetUserInfoError',
          };
        }

        customToken = {
          accessToken: keycloakAccount.access_token!,
          refreshToken: keycloakAccount.refresh_token!,
          idToken: keycloakAccount.id_token!,
          expires: expiresAt,
          refreshTokenExpires: refreshTokenExpiresAt,
          user: {
            ...customUser,
            ...userInfo,
          },
        };
      }

      if (Date.now() / 100 < customToken.expires) {
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
      session.user = token.user as CustomAdapterUser;
      return session;
    },
  },
};

export default config;
