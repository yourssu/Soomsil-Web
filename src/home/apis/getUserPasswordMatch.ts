import { AxiosError } from 'axios';

import { authClient } from '@/apis';
import { AuthErrorData } from '@/home/types/Auth.type';
import { GetPasswordResponse } from '@/home/types/password.type';
import { api } from '@/service/TokenService';

interface getPasswordProps {
  password: string;
}

export const getUserPasswordMatch = async (
  props: getPasswordProps
): Promise<GetPasswordResponse> => {
  const { password } = props;

  try {
    const res = await authClient.get('/auth/verification/password', {
      params: { password },
      headers: api.headers,
    });
    return { data: res.data };
  } catch (error: unknown) {
    return { error: error as AxiosError<AuthErrorData> };
  }
};
