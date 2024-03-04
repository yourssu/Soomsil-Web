import { PostAuthSignInData } from '../types/Auth';

import customedAxios from './customedAxios';
interface LoginProps {
  email: string;
  password: string;
}
export const postAuthSignIn = async ({
  email,
  password,
}: LoginProps): Promise<PostAuthSignInData> => {
  const res = await customedAxios.post(`/auth/sign-in`, {
    email: email,
    password: password,
  });
  return res.data;
};
