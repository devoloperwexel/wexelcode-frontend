import {
  BaseResponse,
  CustomToken,
  RefreshToken,
  User,
} from '@wexelcode/types';
import axios from 'axios';

export const RefreshTokens = async (
  refreshToken: string
): Promise<RefreshToken | undefined | null> => {
  const url = `${process.env['AUTH_KEYCLOAK_ISSUER']}/protocol/openid-connect/token`;

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    client_id: process.env['AUTH_KEYCLOAK_ID'] as string,
    client_secret: process.env['AUTH_KEYCLOAK_SECRET'] as string,
    refresh_token: refreshToken,
  });

  try {
    const { data } = await axios.post<RefreshToken>(url, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return data;
  } catch (error: any) {
    console.error('Error refreshing tokens:', error);
    console.error('Error response:', error.response);
    return null;
  }
};

export const FederatedSignOut = async ({ idToken }: CustomToken) => {
  const url = `${process.env['KEYCLOAK_ISSUER']}/protocol/openid-connect/logout?id_token_hint=${idToken}&post_logout_redirect_uri=/&client_id=${process.env['KEYCLOAK_ID']}`;

  try {
    await axios.get(url);
  } catch (error: any) {
    console.error('Error signing out:', error);
  }
};

export const GetUserInfo = async ({
  accessToken,
  userId,
}: {
  accessToken: string;
  userId: string;
}) => {
  const url = `${process.env['NEXT_PUBLIC_BASE_URL']}/api/v1/users/${userId}`;

  try {
    const { data } = await axios.get<BaseResponse<User>>(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data.data;
  } catch (error: any) {
    console.error('Error getting user info:', error);
    return null;
  }
};
