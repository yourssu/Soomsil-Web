import { authClient } from '@/apis';
import { PostAuthSignInData } from '@/home/types/Auth.type';

interface SignUpParams {
  email: string;
  nickName: string;
  password: string;
  sessionToken: string;
}

export const postAuthSignUp = async (signUpParams: SignUpParams): Promise<PostAuthSignInData> => {
  const res = await authClient.post(`/auth/sign-up`, signUpParams);
  return res.data;
};
