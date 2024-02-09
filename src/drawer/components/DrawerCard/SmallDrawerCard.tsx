import { Card } from '@/components/Card/Card';

import { DrawerCardProps } from './DrawerCard.type';

export const SmallDrawerCard = ({
  link,
  smallImgSrc,
  title,
  body,
  bookmarkCount,
  isBookmarked,
}: DrawerCardProps) => {
  return (
    <Card link={link}>
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
