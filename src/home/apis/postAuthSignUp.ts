import { AxiosError } from 'axios';

import { authClient } from '@/apis';

import { AuthErrorData, PostAuthResponse } from '../types/Auth.type';

interface SignUpParams {
  email: string;
  nickName: string;
  password: string;
  sessionToken: string;
}

export const postAuthSignUp = async (signUpParams: SignUpParams): Promise<PostAuthResponse> => {
  try {
    const res = await authClient.post(`/auth/sign-up`, signUpParams);
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
