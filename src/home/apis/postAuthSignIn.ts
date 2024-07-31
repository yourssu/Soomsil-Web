import { authClient } from '@/apis';

import { PostAuthSignInData } from '../types/Auth.type';

interface LoginProps {
  email: string;
  password: string;
}

export const postAuthSignIn = async ({
  email,
  password,
}: LoginProps): Promise<PostAuthSignInData> => {
  const res = await authClient.post(
    `/auth/sign-in`,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data;
};
