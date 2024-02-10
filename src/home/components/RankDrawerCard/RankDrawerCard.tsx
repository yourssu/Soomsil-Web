import { Card } from '@/components/Card/Card';

import { RankDrawerProps } from './RankDrawerCard.type';

const RankDrawerCard = ({
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

export default RankDrawerCard;
