import { AxiosError } from 'axios';

import { authClient } from '@/apis';

import { AuthErrorData, PostAuthResponse } from '../types/Auth.type';

interface SignUpProps {
  email: string;
  nickName: string;
  password: string;
  sessionToken: string;
}

export const postAuthSignUp = async ({
  email,
  nickName,
  password,
  sessionToken,
}: SignUpProps): Promise<PostAuthResponse> => {
  try {
    const res = await authClient.post(`/auth/sign-up`, {
      email: email,
      nickName: nickName,
      password: password,
      sessionToken: sessionToken,
    });
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
