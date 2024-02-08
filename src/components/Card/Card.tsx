import BigThumbnail from '@/assets/bigThumbnail.png';
import Setting from '@/assets/settingIcon.svg';
import SmallThumbnail from '@/assets/smallThumbnail.png';
import StarFilled from '@/assets/starFilledIcon.svg';
import StarLine from '@/assets/starLineIcon.svg';

import {
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledSettingButton,
  StyledThumbnail,
} from './Card.style';
import { CardContainerProps, CardContentProps, CardThumbnailProps } from './Card.type';

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
    <div style={{ flexGrow: 1 }}>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{body}</StyledText>
      <div style={{ display: 'flex' }}>
        <StyledText>{bookmarkCount}+</StyledText>
        {/* 아이콘으로 교체 예정 */}
        {isBookmarked ? <img src={StarFilled} width={15} /> : <img src={StarLine} width={15} />}
      </div>
    </div>
  );
};

const CardSetting = () => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.alert('menu-list 구현 이후 추가 예정');
    event.preventDefault();
  };

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
