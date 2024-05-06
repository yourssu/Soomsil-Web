import { authClient } from '@/apis';
import { AuthErrorData } from '@/home/types/Auth.type';
import { GetPasswordResponse, SessionTokenType } from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

interface getPasswordProps {
  password: string;
}

export const getUserPasswordMatch = async (props: getPasswordProps) => {
  const { password } = props;

  try {
    const res = await authClient.get<SessionTokenType>('/auth/verification/password', {
      params: { password },
      headers: api.headers,
    });

    if (res.status === 200) {
      const data: GetPasswordResponse = { match: true, sessionToken: res.data };
      return data;
    }
  } catch (error: unknown) {
    const data: GetPasswordResponse = { match: false, error: error as AuthErrorData };
    return data;
  }
};
