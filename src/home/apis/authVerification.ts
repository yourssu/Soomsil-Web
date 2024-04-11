import { Error } from '@/types/Common.type';

import {
  GetAuthVerificationCheckResponse,
  PostAuthVerificationEmailResponse,
} from '../types/Auth.type';

import { customedAxios } from './customedAxios';

interface EmailVerificationProps {
  email: string;
  verificationType: string;
}

interface VerificationCheckProps {
  session: string;
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

export const getAuthVerificationCheck = async ({
  session,
}: VerificationCheckProps): Promise<GetAuthVerificationCheckResponse> => {
  try {
    const res = await customedAxios.get(`/auth/verification/check?session=${session}`);
    return { data: res.data };
  } catch (error: unknown) {
    const errorData: Error = { ...(error as Error) };
    return { error: errorData };
  }
};
