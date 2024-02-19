type thumbnailUrl = string;

export interface ResultListItemResponse {
  title: string;
  link: string;
  content: string;
  date: string;
  thumbnail: thumbnailUrl[];
  favicon: string;
}

export type ResultListResponse = ResultListItemResponse[];
