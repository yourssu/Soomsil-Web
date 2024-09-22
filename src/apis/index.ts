import axios, { AxiosError, AxiosResponse } from 'axios';

import { postRefreshToken } from '@/home/apis/postRefreshToken';
import { AuthErrorData } from '@/home/types/Auth.type';
import { api } from '@/service/TokenService';

export const soomsilClient = axios.create({
  baseURL: import.meta.env.VITE_API_SOOMSIL_URL,
});

export const searchClient = axios.create({
  baseURL: import.meta.env.VITE_API_SEARCH_URL,
});

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_URL,
  headers: {
    withCredentials: true,
  },
});

soomsilClient.interceptors.request.use((config) => {
  if (config.headers && api.getAccessToken()) {
    config.headers.Authorization = `Bearer ${api.getAccessToken()}`;
  }
  return config;
});

soomsilClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalConfig = error.config;
    const data = error.response?.data as AuthErrorData;

    if (originalConfig && error.response?.status === 401 && data?.error === 'Auth-002') {
      try {
        const { accessToken, accessTokenExpiredIn, refreshToken, refreshTokenExpiredIn } =
          await postRefreshToken();

        api.setAccessToken(accessToken, accessTokenExpiredIn);
        api.setRefreshToken(refreshToken, refreshTokenExpiredIn);

        return soomsilClient.request({
          ...originalConfig,
        });
      } catch (error) {
        api.logout();
        sessionStorage.removeItem('user');
        window.location.reload();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
