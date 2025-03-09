import { CustomToken, RefreshToken, TokenResponse } from '@wexelcode/types';
import axios, { AxiosResponse } from 'axios';

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
    return null;
  }
};

export const FederatedSignOut = async ({ idToken }: CustomToken) => {
  const url = `${process.env['AUTH_KEYCLOAK_ISSUER']}/protocol/openid-connect/logout?id_token_hint=${idToken}`;

  try {
    await axios.get(url);
  } catch (error: any) {
    console.error('Error signing out:', error);
  }
};

/**
 * Fetches an access token from Keycloak using client credentials.
 * @returns The access token response from Keycloak.
 */
export const fetchAccessToken = async (): Promise<TokenResponse> => {
  try {
    const tokenUrl = `${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/token`;
    const tokenParams = new URLSearchParams({
      client_id: process.env.AUTH_KEYCLOAK_ID ?? '', // Ensure environment variables are set
      client_secret: process.env.AUTH_KEYCLOAK_SECRET ?? '',
      grant_type: 'client_credentials',
    });

    // Post request to Keycloak for access token
    const response: AxiosResponse<TokenResponse> = await axios.post(
      tokenUrl,
      tokenParams
    );

    // Return the access token
    return response.data;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Failed to retrieve access token');
  }
};
