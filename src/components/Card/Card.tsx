import React from 'react';

import {
  IcDotsVerticalLine,
  IcStarFilled,
  IcStarLine,
  IconContext,
} from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import BigThumbnail from '@/assets/bigThumbnail.png';
import SmallThumbnail from '@/assets/smallThumbnail.png';
import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';

import {
  StyledBookmarkContainer,
  StyledContainer,
  StyledSettingIconContainer,
  StyledText,
  StyledThumbnail,
  StyledTitle,
} from './Card.style';
import {
  CardContainerProps,
  CardContentProps,
  CardSettingProps,
  CardThumbnailProps,
} from './Card.type';

const CardContainer = ({ children, link, width = 25.5, onClick }: CardContainerProps) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event);
    }
    navigate(link);
  };

  return (
    <StyledContainer onClick={handleClick} $width={width}>
      {children}
    </StyledContainer>
  );
};

const CardBigThumbnail = ({ imgSrc }: CardThumbnailProps) => {
  return (
    <StyledThumbnail
      src={imgSrc || BigThumbnail}
      $borderRadius={0.5}
      $width={25.5}
      $height={14.625}
    ></StyledThumbnail>
  );
};

const CardSmallThumbnail = ({ imgSrc }: CardThumbnailProps) => {
  return (
    <StyledThumbnail
      src={imgSrc || SmallThumbnail}
      $borderRadius={0.75}
      $width={4}
      $height={4}
    ></StyledThumbnail>
  );
};

const CardContent = ({ title, body, bookmarkCount, isBookmarked }: CardContentProps) => {
  const theme = useTheme();
  return (
    <FlexGrowItem>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{body}</StyledText>
      <StyledBookmarkContainer>
        <StyledText>{bookmarkCount}+</StyledText>
        <IconContext.Provider
          value={{
            color: theme.color.buttonNormal,
            size: '15px',
          }}
        >
          {isBookmarked ? <IcStarFilled /> : <IcStarLine />}
        </IconContext.Provider>
      </StyledBookmarkContainer>
    </FlexGrowItem>
  );
};

const CardSetting = React.forwardRef<HTMLButtonElement, CardSettingProps>(
  ({ onClick, ...props }, ref) => {
    const theme = useTheme();
    return (
      <StyledSettingIconContainer ref={ref} {...props} onClick={onClick}>
        <IcDotsVerticalLine color={theme.color.buttonNormal} size="36px" />
      </StyledSettingIconContainer>
    );
  }
);

export const Card = Object.assign(CardContainer, {
  BigThumbnail: CardBigThumbnail,
  SmallThumbnail: CardSmallThumbnail,
  Content: CardContent,
  Setting: CardSetting,
});
