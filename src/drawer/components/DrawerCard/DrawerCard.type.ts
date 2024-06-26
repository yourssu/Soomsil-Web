export interface DrawerCardProps {
  link: string;

  bigImgSrc?: string;
  smallImgSrc?: string;

  title: string;
  body: string;
  bookmarkCount: number;
  isBookmarked: boolean;

  onClick?: (event: React.MouseEvent) => void;
}
