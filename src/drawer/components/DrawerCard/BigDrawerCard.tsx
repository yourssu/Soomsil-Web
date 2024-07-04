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
      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Card.SmallThumbnail imgSrc={smallImgSrc} />
        <Card.Content
          title={title}
          body={body}
          bookmarkCount={bookmarkCount}
          isBookmarked={isBookmarked}
        />
      </div>
    </Card>
  );
};
