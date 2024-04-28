export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

export interface sessionToken {
  sessionToken: string;
  sessionTokenExpiresAt: string;
}

export interface GetPasswordRespose {
  match: boolean;
  sessionToken?: sessionToken;
  error?: ErrorResponse;
}
