export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  path: string;
}

export interface GetPasswordRespose {
  match: boolean;
  error?: ErrorResponse;
}
