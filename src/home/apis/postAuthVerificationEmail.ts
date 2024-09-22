import { authClient } from '@/apis';

import { PostAuthVerificationEmailData } from '../types/Auth.type';

interface EmailVerificationParams {
  email: string;
  verificationType: 'SIGN_UP' | 'PASSWORD';
}

export const postAuthVerificationEmail = async (
  emailVerificationParams: EmailVerificationParams
): Promise<PostAuthVerificationEmailData> => {
  const res = await authClient.post(`/auth/verification/email`, emailVerificationParams);
  return res.data;
};
