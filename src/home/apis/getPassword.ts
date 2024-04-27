import { ErrorResponse, GetPasswordRespose } from '../types/GetPassword.type';

import { customedAxios } from './customedAxios';

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
    const res = await customedAxios.get('/auth/verification/password', {
      params: { password },
      headers: authorization(accessToken),
    });

    if (res.status === 200) {
      const data: GetPasswordRespose = { match: true };
      console.log(data);
      return data;
    }
  } catch (error: unknown) {
    const errorData: ErrorResponse = { ...(error as ErrorResponse) };
    console.log(errorData);
    return { match: false, error: errorData };
  }
};
