export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

export interface sessionTokenType {
  sessionToken: string;
  sessionTokenExpiresAt: string;
}

export interface GetPasswordRespose {
  match: boolean;
  sessionToken?: sessionTokenType;
  error?: ErrorResponse;
}
