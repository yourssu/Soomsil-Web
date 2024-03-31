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
  data?: PostAuthSignInData; // 성공 시의 데이터
  error?: PostAuthErrorData; // 에러 시의 데이터
}
