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

export const request = async <T>(
  _metadata: any,
  _data: any,
  options: { params?: any; multipart?: boolean; isSecure?: boolean } = {
    multipart: false,
    isSecure: false,
  }
) => {
  const data = { ..._data };
  const metadata = { ..._metadata };

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
    } else {
      metadata.path = metadata.path.replace(
        `:${token}`,
        `${options.params[token]}`
      );
      delete options.params[token];
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
      headers: {
        'Content-Type': options.multipart
          ? 'multipart/form-data'
          : 'application/json',
      },
      ...(['POST', 'PUT', 'PATCH', 'DELETE'].includes(metadata.method) && {
        data: JSON.stringify(data),
      }),
    });

    return parseJSON<T>(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
