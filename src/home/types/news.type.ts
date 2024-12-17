export interface SsuNews {
  imgNews: ImgNews[];
  textNews: TextNews[];
}

export interface TextNews {
  title: string;
  date: string;
  pageUrl: string;
}

export interface ImgNews extends TextNews {
  thumbnail: string;
}
