import { authClient } from '@/apis';
import { SessionTokenType } from '@/home/types/password.type';

import { PostAuthSignInData } from '../types/Auth.type';

interface changePasswordProps {
  email: string;
  newPassword: string;
  sessionToken: SessionTokenType;
}

export const postChangePassword = async ({
  email,
  sessionToken,
  newPassword,
}: changePasswordProps): Promise<PostAuthSignInData> => {
  const res = await authClient.post('/auth/change-password', {
    email: email,
    newPassword: newPassword,
    sessionToken: sessionToken.sessionToken,
  });
  return res.data;
};
