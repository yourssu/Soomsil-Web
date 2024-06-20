import { authClient } from '@/apis';
import { SessionTokenType } from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

interface getPasswordProps {
  password: string;
}

export const getUserPasswordMatch = async (props: getPasswordProps): Promise<SessionTokenType> => {
  const { password } = props;

  const res = await authClient.get('/auth/verification/password', {
    params: { password },
    headers: api.headers,
  });
  return res.data;
};
