import { AxiosError } from 'axios';

import { authClient } from '@/apis';
import { Error } from '@/types/Common.type';

import {
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
    if (res.data) {
      sessionStorage.setItem('emailAuthSessionToken', res.data.sessionToken);
      sessionStorage.setItem(
        'emailAuthSessionTokenExpiredIn',
        res.data.sessionTokenExpiredIn.toString()
      );
    }
    return { data: res.data };
  } catch (error: unknown) {
    const { response } = error as AxiosError;
    if (!response) return { error: undefined };
    const errorData: Error = { ...(response.data as Error) };
    return { error: errorData };
  }
};

export const getAuthVerificationCheck = async ({
  session,
}: VerificationCheckProps): Promise<GetAuthVerificationCheckResponse> => {
  try {
    const res = await authClient.get(`/auth/verification/check?session=${session}`);
    return { data: res.data };
  } catch (error: unknown) {
    const { response } = error as AxiosError;
    if (!response) return { error: undefined };
    const errorData: Error = { ...(response.data as Error) };
    return { error: errorData };
  }
};
