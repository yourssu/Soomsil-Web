export interface ProductRequestParams {
  responseType: string;
  category?: string;
  page: number;
}

export interface ProductSearchRequestParams {
  keyword?: string;
  category?: string;
  page: number;
}
