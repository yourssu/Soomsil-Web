import { AxiosError } from 'axios';

export interface PostAuthSignInData {
  accessToken: string;
  accessTokenExpiredIn: number;
  refreshToken: string;
  refreshTokenExpiredIn: number;
}

export interface PostAuthVerificationEmailData {
  sessionToken: string;
  sessionTokenExpiredIn: number;
}

export interface PostWithdrawResponse {
  success: boolean;
  error?: AxiosError<AuthErrorData>;
}

export interface GetAuthVerificationCheckData {
  isVerified: boolean;
}

export interface AuthErrorData {
  timestamp: string;
  status: number;
  error: string;
  message: string;
}
