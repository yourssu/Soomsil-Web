import { AxiosError } from 'axios';

import { authClient } from '@/apis';

import {
  AuthErrorData,
  GetAuthVerificationCheckResponse,
  PostAuthVerificationEmailResponse,
} from '../types/Auth.type';

interface EmailVerificationProps {
  email: string;
  verificationType: 'SIGN_UP' | 'PASSWORD';
}

interface VerificationCheckProps {
  session: string;
}

export const postAuthVerificationEmail = async (
  emailVerificationProps: EmailVerificationProps
): Promise<PostAuthVerificationEmailResponse> => {
  try {
    const res = await authClient.post(`/auth/verification/email`, emailVerificationProps);
    console.log(res);
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
}: VerificationCheckProps): Promise<GetAuthVerificationCheckResponse> => {
  try {
    const res = await authClient.get(`/auth/verification/check?session=${session}`);
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
