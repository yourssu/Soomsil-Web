import { authClient } from '@/apis';

import { PostAuthSignInData } from '../types/Auth.type';

interface changePasswordProps {
  email: string;
  newPassword: string;
  sessionToken: string | null;
}

export const postChangePassword = async ({
  email,
  sessionToken,
  newPassword,
}: changePasswordProps): Promise<PostAuthSignInData> => {
  const res = await authClient.post('/auth/change-password', {
    email: email,
    newPassword: newPassword,
    sessionToken: sessionToken,
  });
  return res.data;
};
