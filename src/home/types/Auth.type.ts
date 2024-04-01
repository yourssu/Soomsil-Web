export interface PostAuthSignInData {
  accessToken: string;
  accessTokenExpiredIn: number;
  refreshToken: string;
  refreshTokenExpiredIn: number;
}

export interface PostAuthErrorData {
  message: string;
  status: number;
}
export interface PostAuthResponse {
  data?: PostAuthSignInData;
  error?: PostAuthErrorData;
}
