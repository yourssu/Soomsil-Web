import { Card } from '@/components/Card/Card';

import { DrawerCardProps } from './DrawerCard.type';

export const BigDrawerCard = ({
  link,
  bigImgSrc,
  smallImgSrc,
  title,
  body,
  bookmarkCount,
  isBookmarked,
  onClick,
}: DrawerCardProps) => {
  return (
    <Card link={link} onClick={onClick}>
      <Card.BigThumbnail imgSrc={bigImgSrc} />
      <Card.SmallThumbnail imgSrc={smallImgSrc} />
      <Card.Content
        title={title}
        body={body}
        bookmarkCount={bookmarkCount}
        isBookmarked={isBookmarked}
      />
    </Card>
  );
};
