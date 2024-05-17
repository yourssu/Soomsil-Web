import { isAxiosError } from 'axios';

import { authClient } from '@/apis';
import { PostWithdrawResponse, AuthErrorData } from '@/home/types/Auth.type';
import { api } from '@/service/TokenService';

export const postWithdraw = async (): Promise<PostWithdrawResponse> => {
  try {
    await authClient.post(
      '/auth/withdraw',
      {},
      {
        headers: api.headers,
      }
    );
    api.logout();
    return { success: true };
  } catch (error) {
    if (isAxiosError<AuthErrorData>(error)) return { success: false, error };
    return Promise.reject(error);
  }
};
