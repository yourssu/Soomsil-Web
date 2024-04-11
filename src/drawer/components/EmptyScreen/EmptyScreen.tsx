import { BoxButton } from '@yourssu/design-system-react';

import NotIllust from '@/drawer/assets/noResultDrawer.png';

import {
  StyledNotContainer,
  StyledNotImg,
  StyledNotTextBold,
  StyledNotTextContainer,
} from './EmptyScreen.style';

interface EmptyScreenProps {
  boldText: string;
  subText: string;
  type: 'SEARCH' | 'STAR' | 'MYDRAWER' | 'PROVIDER';
}

export const EmptyScreen = ({ boldText, subText, type }: EmptyScreenProps) => {
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
