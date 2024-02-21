export interface CardContainerProps {
  children: React.ReactNode;
  link: string;
  width?: number;
}

export interface CardContentProps {
  title: string;
  body: string;
  bookmarkCount: number;
  isBookmarked: boolean;
}

export interface CardThumbnailProps {
  imgSrc?: string;
}

export interface CardSettingProps {
  onClick: React.MouseEventHandler;
}
