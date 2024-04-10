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

export interface PostAuthVerificationEmailData {
  sessionToken: string;
  sessionTokenExpiredIn: number;
}

export interface PostAuthVerificationEmailResponse {
  data?: PostAuthVerificationEmailData;
  error?: Error;
}
