type thumbnailUrl = string;

export interface SearchResponse {
  totalCount: number;
  resultCount: number;
  resultList: ResultListItemResponse[];
}

export interface ResultListItemResponse {
  id: string;
  title: string;
  link: string;
  content: string;
  date: string;
  thumbnail: thumbnailUrl[];
  favicon: string;
  source: string;
}
