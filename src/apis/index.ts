import axios, { AxiosError, AxiosResponse } from 'axios';

import { refreshToken } from '@/home/apis/postRefreshToken';
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
  if (config.headers && api.getRefreshToken()) {
    config.headers.Authorization = `Bearer ${api.getAccessToken()}`;
  }
  return config;
});

const onFulfilled = (response: AxiosResponse) => response;

const onRejected = async (error: AxiosError) => {
  const originalConfig = error.config;
  const data = error.response?.data as AuthErrorData;

  if (originalConfig && error.response?.status === 401 && data?.error === 'Auth-002') {
    try {
      await refreshToken();
      return soomsilClient({
        ...originalConfig,
        headers: {
          Authorization: `Bearer ${api.getAccessToken()}`,
        },
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};

soomsilClient.interceptors.response.use(onFulfilled, onRejected);
