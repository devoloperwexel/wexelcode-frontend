import {
  getAccessToken,
  getRefreshToken,
  RefreshTokens,
} from '@wexelcode/auth';
import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: `${process.env['NEXT_PUBLIC_BASE_URL']}/api/v1`,
  authenticated: true,
});

axiosConfig.interceptors.request.use((config) => {
  if (config.authenticated) {
    const token = getAccessToken();

    if (!token) {
      // TODO: Redirect to login page
    }

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = await getRefreshToken();

      if (!refreshToken) {
        throw new Error('Refresh token not found');
      }

      const token = RefreshTokens(refreshToken);
      originalRequest.headers.Authorization = `Bearer ${token}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosConfig;
