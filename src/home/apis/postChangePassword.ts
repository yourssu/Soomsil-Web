import { AxiosError } from 'axios';

import { authClient } from '@/apis';
import { SessionTokenType } from '@/home/types/password.type';

import { AuthErrorData, PostAuthResponse } from '../types/Auth.type';

interface changePasswordProps {
  email: string;
  newPassword: string;
  sessionToken: SessionTokenType;
}

export const postChangePassword = async (props: changePasswordProps): Promise<PostAuthResponse> => {
  const { email, sessionToken, newPassword } = props;

  try {
    const res = await authClient.post('/auth/change-password', {
      email: email,
      newPassword: newPassword,
      sessionToken: sessionToken.sessionToken,
    });
    return { data: res.data };
  } catch (error) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
