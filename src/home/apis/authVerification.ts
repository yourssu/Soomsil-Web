import { AxiosError } from 'axios';

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

export const postAuthVerificationEmail = async (
  emailVerificationProps: EmailVerificationProps
): Promise<PostAuthVerificationEmailResponse> => {
  try {
    const res = await customedAxios.post(`/auth/verification/email`, emailVerificationProps);
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
    const res = await customedAxios.get(`/auth/verification/check?session=${session}`);
    return { data: res.data };
  } catch (error: unknown) {
    const { response } = error as AxiosError;
    if (!response) return { error: undefined };
    const errorData: Error = { ...(response.data as Error) };
    return { error: errorData };
  }
};
