import {
  IconContext,
  IcStarFilled,
  IcStarLine,
  IcDotsVerticalLine,
} from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import BigThumbnail from '@/assets/bigThumbnail.png';
import SmallThumbnail from '@/assets/smallThumbnail.png';
import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';

import {
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledThumbnail,
  StyledBookmarkContainer,
  StyledSettingIconContainer,
} from './Card.style';
import {
  CardContainerProps,
  CardContentProps,
  CardSettingProps,
  CardThumbnailProps,
} from './Card.type';

const CardContainer = ({ children, link, width = 25.5 }: CardContainerProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
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

const CardSetting = ({ onClick }: CardSettingProps) => {
  const theme = useTheme();
  return (
    <StyledSettingIconContainer>
      <IconContext.Provider
        value={{ color: theme.color.buttonNormal, size: '36px', onClick: onClick }}
      >
        <IcDotsVerticalLine />
      </IconContext.Provider>
    </StyledSettingIconContainer>
  );
};

export const Card = Object.assign(CardContainer, {
  BigThumbnail: CardBigThumbnail,
  SmallThumbnail: CardSmallThumbnail,
  Content: CardContent,
  Setting: CardSetting,
});
