import { AxiosError } from 'axios';

export interface PostAuthSignInData {
  accessToken: string;
  accessTokenExpiredIn: number;
  refreshToken: string;
  refreshTokenExpiredIn: number;
}

export interface PostAuthResponse {
  data?: PostAuthSignInData;
  error?: AxiosError;
}

export interface PostAuthVerificationEmailData {
  sessionToken: string;
  sessionTokenExpiredIn: number;
}

export interface PostAuthVerificationEmailResponse {
  data?: PostAuthVerificationEmailData;
  error?: AxiosError<AuthErrorData>;
}

export interface PostWithdrawResponse {
  success: boolean;
  error?: AxiosError<AuthErrorData>;
}

export interface GetAuthVerificationCheckData {
  isVerified: boolean;
}

export interface GetAuthVerificationCheckResponse {
  data?: GetAuthVerificationCheckData;
  error?: AxiosError<AuthErrorData>;
}

export interface AuthErrorData {
  timestamp: string;
  status: number;
  error: string;
  message: string;
}
