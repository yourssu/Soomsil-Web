import { BoxButton } from '@yourssu/design-system-react';

import NotIllust from '@/drawer/assets/noResultDrawer.png';
import { NOT_FOUND_TEXT } from '@/drawer/constants/empty.constant';

import {
  StyledNotContainer,
  StyledNotImg,
  StyledNotTextBold,
  StyledNotTextContainer,
} from './EmptyScreen.style';

interface EmptyScreenProps {
  type: 'SEARCH' | 'STAR' | 'MYDRAWER' | 'PROVIDER';
}

export const EmptyScreen = ({ type }: EmptyScreenProps) => {
  const { boldText, subText } = { ...NOT_FOUND_TEXT[type] };

  return (
    <StyledNotContainer>
      <StyledNotTextContainer>
        <StyledNotTextBold>{boldText}</StyledNotTextBold>
        <div>{subText}</div>
      </StyledNotTextContainer>
      <StyledNotImg src={NotIllust} />

      {type === 'SEARCH' || type === 'MYDRAWER' ? (
        <BoxButton size="small" variant="filled" rounding={4}>
          서비스 등록하기
        </BoxButton>
      ) : (
        <></>
      )}
    </StyledNotContainer>
  );
};
