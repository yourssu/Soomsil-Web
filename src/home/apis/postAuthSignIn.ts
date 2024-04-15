import { AxiosError } from 'axios';

import { authClient } from '@/apis';

import { PostAuthResponse } from '../types/Auth.type';

interface LoginProps {
  email: string;
  password: string;
}

export const postAuthSignIn = async ({
  email,
  password,
}: LoginProps): Promise<PostAuthResponse> => {
  try {
    const res = await authClient.post(`/auth/sign-in`, {
      email: email,
      password: password,
    });
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError };
  }
};
