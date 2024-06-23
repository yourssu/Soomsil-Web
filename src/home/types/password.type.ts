import { AxiosError } from 'axios';

import { AuthErrorData } from '@/home/types/Auth.type';

export interface SessionTokenType {
  sessionToken: string;
  sessionTokenExpiresAt: string;
}

export interface GetPasswordResponse {
  data?: SessionTokenType;
  error?: AxiosError<AuthErrorData>;
}

export interface NewPasswordFormProps {
  sessionToken: SessionTokenType;
  previousPassword: string;
}
