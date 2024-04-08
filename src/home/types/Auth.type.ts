import { Error } from '@/types/Common.type';

export interface PostAuthSignInData {
  accessToken: string;
  accessTokenExpiredIn: number;
  refreshToken: string;
  refreshTokenExpiredIn: number;
}

export interface PostAuthResponse {
  data?: PostAuthSignInData;
  error?: Error;
}
