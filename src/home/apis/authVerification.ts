import { Error } from '@/types/Common.type';

import { PostAuthVerificationEmailResponse } from '../types/Auth.type';

import { customedAxios } from './customedAxios';

interface EmailVerificationProps {
  email: string;
  verificationType: string;
}

export const postAuthVerificationEmail = async ({
  email,
  verificationType = 'SIGN_UP',
}: EmailVerificationProps): Promise<PostAuthVerificationEmailResponse> => {
  try {
    const res = await customedAxios.post(`/auth/verification/email`, {
      email: email,
      verificationType: verificationType,
    });
    return { data: res.data };
  } catch (error: unknown) {
    const errorData: Error = { ...(error as Error) };
    return { error: errorData };
  }
};
