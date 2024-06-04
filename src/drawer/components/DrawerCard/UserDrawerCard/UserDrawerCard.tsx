import { useEffect, useRef, useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { Card } from '@/components/Card/Card';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { DialogState } from '@/recoil/DialogState';

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

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const setDialog = useSetRecoilState(DialogState);

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
    setDialog({ open: true, type: 'service_remove' });
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
        <Card.Setting
          onClick={(event) => {
            event.stopPropagation();
            handleClickSetting();
          }}
        />
      </Card>
      {isCardSettingClicked && (
        <Dropdown padding="1rem" bottom="-4.5rem" right="0" ref={dropdownRef}>
          <StyledServiceTextContainer
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <StyledServiceModify to="/drawer/register">서비스 수정</StyledServiceModify>
            <button type="button" onClick={handleClickRemoveButton}>
              <StyledServiceText>서비스 삭제</StyledServiceText>
            </button>
          </StyledServiceTextContainer>
        </Dropdown>
      )}
    </StyledCardContainer>
  );
};
