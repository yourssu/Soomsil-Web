import BigThumbnail from '@/assets/bigThumbnail.png';
import Setting from '@/assets/settingIcon.svg';
import SmallThumbnail from '@/assets/smallThumbnail.png';
import StarFilled from '@/assets/starFilledIcon.svg';
import StarLine from '@/assets/starLineIcon.svg';
import { FlexContainer, FlexGrowItem } from '@/components/FlexContainer/FlexContainer';

import {
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledSettingButton,
  StyledThumbnail,
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
      <FlexContainer>
        <StyledText>{bookmarkCount}+</StyledText>
        {/* 아이콘으로 교체 예정 */}
        {isBookmarked ? <img src={StarFilled} width={15} /> : <img src={StarLine} width={15} />}
      </FlexContainer>
    </FlexGrowItem>
  );
};

const CardSetting = ({ onClick }: CardSettingProps) => {
  return (
    <StyledSettingButton onClick={onClick}>
      {/* 아이콘으로 교체 예정 */}
      <img src={Setting} />
    </StyledSettingButton>
  );
};

export const Card = Object.assign(CardContainer, {
  BigThumbnail: CardBigThumbnail,
  SmallThumbnail: CardSmallThumbnail,
  Content: CardContent,
  Setting: CardSetting,
});
