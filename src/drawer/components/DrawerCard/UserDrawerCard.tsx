import { Card } from '@/components/Card/Card';

import { DrawerCardProps } from './DrawerCard.type';

export const UserDrawerCard = ({
  link,
  bigImgSrc,
  smallImgSrc,
  title,
  body,
  bookmarkCount,
  isBookmarked,
}: DrawerCardProps) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('menu-list 구현 이후 추가 예정');
    event.preventDefault();
  };

  return (
    <Card link={link}>
      <Card.BigThumbnail imgSrc={bigImgSrc} />
      <Card.SmallThumbnail imgSrc={smallImgSrc} />
      <Card.Content
        title={title}
        body={body}
        bookmarkCount={bookmarkCount}
        isBookmarked={isBookmarked}
      />
      <Card.Setting onClick={onClick} />
    </Card>
  );
};
