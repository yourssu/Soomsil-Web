import { authClient } from '@/apis';

import { ErrorResponse, GetPasswordRespose } from '../types/GetPassword.type';

const authorization = (accessToken: string) => {
  return { Authorization: `Bearer ${accessToken}` };
};

interface getPasswordProps {
  password: string;
  accessToken: string;
}

export const getPassword = async (props: getPasswordProps) => {
  const { password, accessToken } = props;
  if (!accessToken || !password) {
    return null;
  }
  try {
    const res = await authClient.get('/auth/verification/password', {
      params: { password },
      headers: authorization(accessToken),
    });

    if (res.status === 200) {
      const data: GetPasswordRespose = { match: true, sessionToken: res.data.sessionToken };
      console.log(data);
      return data;
    }
  } catch (error: unknown) {
    const data: GetPasswordRespose = { match: false, error: error as ErrorResponse };
    console.log(data);
    return data;
  }
};
