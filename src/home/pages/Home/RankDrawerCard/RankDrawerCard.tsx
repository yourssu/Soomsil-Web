import { Card } from '@/components/Card/Card';

import { RankDrawerProps } from './RankDrawerCard.type';

export const RankCard = ({
  link,
  smallImgSrc,
  title,
  body,
  bookmarkCount,
  isBookmarked,
}: RankDrawerProps) => {
  return (
    <Card link={link} width={23.9375}>
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
