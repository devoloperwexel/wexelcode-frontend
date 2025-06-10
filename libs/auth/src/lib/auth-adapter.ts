import {
  AccountProvider,
  BaseResponse,
  CustomAdapterUser,
} from '@wexelcode/types';
import axios, { AxiosResponse } from 'axios';

import { fetchAccessToken } from './auth-api';

/**
 * Provides authentication adapter functions for managing user sessions and accounts.
 */
export default function getSessionAndUsersAuthAdapter() {
  /**
   * Retrieves a user by their unique identifier (sub).
   *
   * @param id - The unique identifier (sub) of the user.
   * @returns A promise that resolves to the user object or null if not found.
   */
  async function getUser(id: string): Promise<CustomAdapterUser | null> {
    console.log(`get user by id ${id}`);
    return null;
  }

  /**
   * Retrieves a user by their email address.
   *
   * @param email - The email address of the user.
   * @returns A promise that resolves to the user object or null if not found.
   */
  async function getUserByEmail(
    email: string
  ): Promise<CustomAdapterUser | null> {
    console.log(`get user by id ${email}`);
    return null;
  }

  /**
   * Retrieves a user by their account provider details.
   *
   * @param providerAccountId - The provider-specific account ID of the user.
   * @param provider - The name of the authentication provider.
   * @returns A promise that resolves to the user object or null if not found.
   */
  async function getUserByAccount({
    providerAccountId,
    provider,
  }: AccountProvider): Promise<CustomAdapterUser | null> {
    // Fetch access token from Keycloak
    const tokenData = await fetchAccessToken();
    console.log("Fetching user by account:", providerAccountId);
    
    try {
      const response: AxiosResponse<BaseResponse<CustomAdapterUser>> =
        await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/${providerAccountId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${tokenData.access_token}`, // Use the token from Keycloak
            },
          }
        );
      // Return the first user if found, otherwise null
      return response?.data?.data || null;
    } catch (error) {
      console.error(
        `Failed to get user by account: ${providerAccountId}, provider: ${provider}`,
        error
      );
      return null;
    }
  }

  // Placeholder functions for adapter methods that need implementation
  /**
   * Creates a new user.
   * Implement user creation logic.
   */
  async function createUser(): Promise<void> {
    console.log('createUser');
    // Implement user creation logic here
  }

  /**
   * Updates an existing user.
   * Implement user update logic.
   */
  async function updateUser(): Promise<void> {
    console.log('updateUser');
    // Implement user update logic here
  }

  /**
   * Deletes a user.
   * Implement user deletion logic.
   */
  async function deleteUser(): Promise<void> {
    console.log('deleteUser');
    // Implement user deletion logic here
  }

  /**
   * Links an account to a user.
   * Implement account linking logic.
   */
  async function linkAccount(): Promise<void> {
    console.log('linkAccount');
    // Implement account linking logic here
  }

  /**
   * Unlinks an account from a user.
   * Implement account unlinking logic.
   */
  async function unlinkAccount(): Promise<void> {
    console.log('unlinkAccount');
    // Implement account unlinking logic here
  }

  /**
   * Creates a new session.
   * Implement session creation logic.
   */
  async function createSession(): Promise<void> {
    console.log('createSession');
    // Implement session creation logic here
  }

  /**
   * Retrieves a session and user.
   * Implement session and user retrieval logic.
   */
  async function getSessionAndUser(): Promise<void> {
    console.log('getSessionAndUser');
    // Implement session and user retrieval logic here
  }

  /**
   * Updates an existing session.
   * Implement session update logic.
   */
  async function updateSession(): Promise<void> {
    console.log('updateSession');
    // Implement session update logic here
  }

  /**
   * Deletes a session.
   * Implement session deletion logic.
   */
  async function deleteSession(): Promise<void> {
    console.log('deleteSession');
    // Implement session deletion logic here
  }

  /**
   * Creates a verification token.
   * Implement verification token creation logic.
   */
  async function createVerificationToken(): Promise<void> {
    console.log('createVerificationToken');
    // Implement verification token creation logic here
  }

  /**
   * Uses a verification token.
   * Implement verification token usage logic.
   */
  async function useVerificationToken(): Promise<void> {
    console.log('useVerificationToken');
    // Implement verification token usage logic here
  }

  // Return all the adapter methods
  return {
    getUser,
    getUserByAccount,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    linkAccount,
    unlinkAccount,
    createSession,
    getSessionAndUser,
    updateSession,
    deleteSession,
    createVerificationToken,
    useVerificationToken,
  };
}
