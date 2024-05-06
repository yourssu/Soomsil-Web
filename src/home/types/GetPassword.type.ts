import { AuthErrorData } from '@/home/types/Auth.type.ts';

export interface SessionTokenType {
  sessionToken: string;
  sessionTokenExpiresAt: string;
}

export interface GetPasswordResponse {
  match: boolean;
  sessionToken?: SessionTokenType;
  error?: AuthErrorData;
}
