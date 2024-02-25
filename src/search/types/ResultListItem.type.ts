type thumbnailUrl = string;

export interface ResultListItemResponse {
  id: string;
  title: string;
  link: string;
  content: string;
  date: string;
  thumbnail: thumbnailUrl[];
  favicon: string;
}
