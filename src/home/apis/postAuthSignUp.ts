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
    const errorData: Error = { ...(error as Error) };
    return { error: errorData };
  }
};
