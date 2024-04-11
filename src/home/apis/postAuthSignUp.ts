import { AxiosError } from 'axios';

import { Error } from '@/types/Common.type';

import { PostAuthResponse } from '../types/Auth.type';

import { customedAxios } from './customedAxios';

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
    const res = await customedAxios.post(`/auth/sign-up`, {
      email: email,
      nickName: nickName,
      password: password,
      sessionToken: sessionToken,
    });
    return { data: res.data };
  } catch (error: unknown) {
    const { response } = error as AxiosError;
    if (!response) return { error: undefined };
    const errorData: Error = { ...(response.data as Error) };
    return { error: errorData };
  }
};
