import { useEffect, useRef, useState } from 'react';

import { Card } from '@/components/Card/Card';
import { Dropdown } from '@/components/Dropdown/Dropdown';

import { ServiceRemoveModal } from '../../Dialog/ServiceRemoveModal';
import { DrawerCardProps } from '../DrawerCard.type';

import {
  StyledCardContainer,
  StyledServiceModify,
  StyledServiceText,
  StyledServiceTextContainer,
} from './UserDrawerCard.style';

export const UserDrawerCard = ({
  link,
  bigImgSrc,
  smallImgSrc,
  title,
  body,
  bookmarkCount,
  isBookmarked,
}: DrawerCardProps) => {
  const [isCardSettingClicked, setIsCardSettingClicked] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCardSettingClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickSetting = () => {
    setIsCardSettingClicked((prev) => !prev);
  };

  const handleClickRemoveButton = () => {
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
        <Card.Setting onClick={handleClickSetting} />
      </Card>
      {isCardSettingClicked && (
        <Dropdown padding="1rem" bottom="-4.5rem" right="0" ref={dropdownRef}>
          <StyledServiceTextContainer>
            <StyledServiceModify to="/drawer/register">서비스 수정</StyledServiceModify>
            <button type="button" onClick={handleClickRemoveButton}>
              <StyledServiceText>서비스 삭제</StyledServiceText>
            </button>
          </StyledServiceTextContainer>
        </Dropdown>
      )}
      <ServiceRemoveModal open={openRemoveModal} onOpenChange={setOpenRemoveModal} />
    </StyledCardContainer>
  );
};
