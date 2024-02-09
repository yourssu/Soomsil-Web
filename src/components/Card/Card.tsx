import {
  IconContext,
  IcStarFilled,
  IcStarLine,
  IcDotsVerticalLine,
} from '@yourssu/design-system-react';

import BigThumbnail from '@/assets/bigThumbnail.png';
import SmallThumbnail from '@/assets/smallThumbnail.png';
import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';

import {
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledSettingButton,
  StyledThumbnail,
  StyledBookmarkContainer,
} from './Card.style';
import {
  CardContainerProps,
  CardContentProps,
  CardSettingProps,
  CardThumbnailProps,
} from './Card.type';

const CardContainer = ({ children, link, width = 25.5 }: CardContainerProps) => {
  return (
    <StyledContainer to={link} $width={width}>
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
  return (
    <FlexGrowItem>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{body}</StyledText>
      <StyledBookmarkContainer>
        <StyledText>{bookmarkCount}+</StyledText>
        <IconContext.Provider
          value={{
            color: '#505458',
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
  return (
    <StyledSettingButton onClick={onClick}>
      <IconContext.Provider value={{ color: '#505458', size: '36px' }}>
        <IcDotsVerticalLine />
      </IconContext.Provider>
    </StyledSettingButton>
  );
};

export const Card = Object.assign(CardContainer, {
  BigThumbnail: CardBigThumbnail,
  SmallThumbnail: CardSmallThumbnail,
  Content: CardContent,
  Setting: CardSetting,
});
