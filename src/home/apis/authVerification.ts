import { AxiosError } from 'axios';

import { authClient } from '@/apis';
import { STORAGE_KEYS } from '@/constants/storage.constant.ts';

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

export const postAuthVerificationEmail = async (
  emailVerificationParams: EmailVerificationParams
): Promise<PostAuthVerificationEmailResponse> => {
  try {
    const res = await authClient.post(`/auth/verification/email`, emailVerificationParams);
    if (res.data) {
      sessionStorage.setItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN, res.data.sessionToken);
      sessionStorage.setItem(
        STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN,
        res.data.sessionTokenExpiredIn.toString()
      );
    }
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};

export const getAuthVerificationCheck = async (
  verificationCheckParams: VerificationCheckParams
): Promise<GetAuthVerificationCheckResponse> => {
  try {
    const res = await authClient.get('/auth/verification/check', {
      params: verificationCheckParams,
    });
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
