import axios from '@wexelcode/axios';
import type { AxiosResponse } from 'axios';

export class ResponseError extends Error {
  constructor(error: { code: any; message: any }) {
    super(`${error.code} - ${error.message}`);
  }
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object} The parsed JSON from the request
 */
const parseJSON = <T>(response: AxiosResponse<T, any>) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
const errorHandling = async (error: any) => {
  const errorResponse = new ResponseError(error);
  errorResponse.message = error?.response?.data;
  throw errorResponse;
};

export const request = async <T>(
  metadata: any,
  data: any,
  options: { params?: any; multipart?: boolean; isSecure?: boolean } = {
    multipart: false,
    isSecure: false,
  }
) => {
  const pathTokens = metadata.path.split(':');

  if (metadata.path.indexOf(':') !== 0) {
    pathTokens.shift();
  }

  pathTokens.forEach((token: string) => {
    if (token.includes('/')) {
      const key = token.split('/')[0];
      metadata.path = metadata.path.replace(
        `:${key}`,
        `${options.params[key]}`
      );
      delete options.params[key];
    }
  });

  try {
    const response = await axios({
      method: metadata.method,
      url: metadata.path,
      params: options.params,
      paramsSerializer: {
        indexes: null,
      },
      cache: 'no-cache',
      redirect: 'follow',
      referrer: 'no-referrer',
      headers: {
        'Content-Type': options.multipart
          ? 'multipart/form-data'
          : 'application/json',
      },
      ...(['POST', 'PUT', 'PATCH', 'DELETE'].includes(metadata.method) && data),
    });

    return parseJSON<T>(response);
  } catch (error) {
    console.log(error);
    return errorHandling(error);
  }
};
