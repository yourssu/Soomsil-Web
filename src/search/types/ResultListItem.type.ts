type thumbnailUrl = string;

export interface ResultListItemResponse {
  title: string;
  link: string;
  content: string;
  date: string;
  thumbnail: thumbnailUrl[];
}

export type ResultListResponse = ResultListItemResponse[];

export interface Error {
  timestamp: string;
  status: number;
  error: string;
  message: string;
}
