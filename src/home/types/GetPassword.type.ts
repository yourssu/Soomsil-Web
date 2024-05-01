export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

export interface SessionTokenType {
  sessionToken: string;
  sessionTokenExpiresAt: string;
}

export interface GetPasswordResponse {
  match: boolean;
  sessionToken?: SessionTokenType;
  error?: ErrorResponse;
}
