import { authClient } from '@/apis';

import { GetAuthVerificationCheckData } from '../types/Auth.type';

interface VerificationCheckParams {
  session: string;
}

export const getAuthVerificationCheck = async (
  verificationCheckParams: VerificationCheckParams
): Promise<GetAuthVerificationCheckData> => {
  const res = await authClient.get('/auth/verification/check', {
    params: verificationCheckParams,
  });
  return res.data;
};
