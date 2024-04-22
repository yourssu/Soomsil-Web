import { AxiosError } from 'axios';

import { authClient } from '@/apis';

import {
  AuthErrorData,
  GetAuthVerificationCheckResponse,
  PostAuthVerificationEmailResponse,
} from '../types/Auth.type';

interface EmailVerificationParams {
  email: string;
  verificationType: 'SIGN_UP' | 'PASSWORD';
}

interface VerificationCheckParams {
  session: string;
}

export const postAuthVerificationEmail = async ({
  email,
  verificationType,
}: EmailVerificationParams): Promise<PostAuthVerificationEmailResponse> => {
  try {
    const res = await authClient.post(`/auth/verification/email`, {
      email: email,
      verificationType: verificationType,
    });
    if (res.data) {
      sessionStorage.setItem('emailAuthSessionToken', res.data.sessionToken);
      sessionStorage.setItem(
        'emailAuthSessionTokenExpiredIn',
        res.data.sessionTokenExpiredIn.toString()
      );
    }
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};

export const getAuthVerificationCheck = async ({
  session,
}: VerificationCheckParams): Promise<GetAuthVerificationCheckResponse> => {
  try {
    const res = await authClient.get(`/auth/verification/check?session=${session}`);
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
