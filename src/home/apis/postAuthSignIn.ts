import { Error } from '@/types/Common.type';

import { PostAuthResponse } from '../types/Auth.type';

import { customedAxios } from './customedAxios';

interface LoginProps {
  email: string;
  password: string;
}

export const postAuthSignIn = async ({
  email,
  password,
}: LoginProps): Promise<PostAuthResponse> => {
  try {
    const res = await customedAxios.post(`/auth/sign-in`, {
      email: email,
      password: password,
    });
    return { data: res.data };
  } catch (error: any) {
    const errorData: Error = { ...error.response.data };
    return { error: errorData };
  }
};
