export interface CardContainerProps {
  children: React.ReactNode;
  link: string;
  width?: number;
  onClick?: (event: React.MouseEvent) => void;
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
