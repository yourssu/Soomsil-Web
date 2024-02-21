import { useEffect, useRef, useState } from 'react';

import { Card } from '@/components/Card/Card';
import { Dropdown } from '@/components/Dropdown/Dropdown';

import { DrawerCardProps } from '../DrawerCard.type';

import {
  StyledDropdownContainer,
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
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsCardSettingClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onClickSetting = () => {
    setIsCardSettingClicked((prev) => !prev);
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
      <StyledDropdownContainer ref={containerRef}>
        <Card.Setting
          onClick={(event) => {
            event.stopPropagation();
            onClickSetting();
          }}
        />
        {isCardSettingClicked && (
          <Dropdown padding="1rem" bottom="-4.5rem" right="0">
            <StyledServiceTextContainer
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <StyledServiceModify to="/drawer/register">서비스 수정</StyledServiceModify>
              <StyledServiceText>서비스 삭제</StyledServiceText>
            </StyledServiceTextContainer>
          </Dropdown>
        )}
      </StyledDropdownContainer>
    </Card>
  );
};
