import { authClient } from '@/apis';
import {
  ErrorResponse,
  GetPasswordResponse,
  SessionTokenType,
} from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

interface getPasswordProps {
  password: string;
}

export const getUserPasswordMatch = async (props: getPasswordProps) => {
  const { password } = props;

  try {
    const res = await authClient.get('/auth/verification/password', {
      params: { password },
      headers: api.headers,
    });

    if (res.status === 200) {
      const data: GetPasswordResponse = { match: true, sessionToken: res.data as SessionTokenType };
      return data;
    }
  } catch (error: unknown) {
    const data: GetPasswordResponse = { match: false, error: error as ErrorResponse };
    return data;
  }
};
