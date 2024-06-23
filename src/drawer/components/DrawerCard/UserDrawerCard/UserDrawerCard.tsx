import { useState } from 'react';

import { Card } from '@/components/Card/Card';

import { ServiceRemoveModal } from '../../Dialog/ServiceRemoveModal';
import { CardSettingDropdownMenu } from '../CardSettingDropdownMenu/CardSettingDropdownMenu';
import { DrawerCardProps } from '../DrawerCard.type';

import { StyledCardContainer } from './UserDrawerCard.style';

interface UserDrawerCardProps extends DrawerCardProps {
  productNo: number;
}

export const UserDrawerCard = ({
  link,
  bigImgSrc,
  smallImgSrc,
  title,
  body,
  bookmarkCount,
  isBookmarked,
  productNo,
}: UserDrawerCardProps) => {
  const [isCardSettingClicked, setIsCardSettingClicked] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);

  const handleClickSetting = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsCardSettingClicked((prev) => !prev);
  };

  const handleClickRemoveButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsCardSettingClicked(false);
    setOpenRemoveModal(true);
  };

  return (
    <StyledCardContainer>
      <Card link={link}>
        <Card.BigThumbnail imgSrc={bigImgSrc} />
        <Card.SmallThumbnail imgSrc={smallImgSrc} />
        <Card.Content
          title={title}
          body={body}
          bookmarkCount={bookmarkCount}
          isBookmarked={isBookmarked}
        />
        <CardSettingDropdownMenu
          open={isCardSettingClicked}
          onOpenChange={setIsCardSettingClicked}
          onClickRemoveButton={handleClickRemoveButton}
        >
          <CardSettingDropdownMenu.Trigger asChild>
            <Card.Setting onClick={handleClickSetting} />
          </CardSettingDropdownMenu.Trigger>
        </CardSettingDropdownMenu>
      </Card>
      <ServiceRemoveModal
        open={openRemoveModal}
        productNo={productNo}
        onOpenChange={setOpenRemoveModal}
      />
    </StyledCardContainer>
  );
};
