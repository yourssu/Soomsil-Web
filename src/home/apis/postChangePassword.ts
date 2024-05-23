import { AxiosError } from 'axios';

import { authClient } from '@/apis';

import { AuthErrorData, PostAuthResponse } from '../types/Auth.type';
import { SessionTokenType } from '../types/GetPassword.type';

interface changePasswordProps {
  email: string;
  sessionToken: SessionTokenType;
  newPassword: string;
}

export const postChangePassword = async (props: changePasswordProps): Promise<PostAuthResponse> => {
  const { email, sessionToken, newPassword } = props;

  try {
    const res = await authClient.post('/auth/change-password', {
      email,
      newPassword,
      sessionToken,
    });
    return { data: res.data };
  } catch (error) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
