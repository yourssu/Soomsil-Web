import { BoxButton } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import NotIllust from '@/drawer/assets/noResultDrawer.png';
import { NOT_FOUND_TEXT } from '@/drawer/constants/empty.constant';
import { LogInState } from '@/home/recoil/LogInState';
import { DialogState } from '@/recoil/DialogState';

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
  const { boldText, subText } = NOT_FOUND_TEXT[type];

  const setDialog = useSetRecoilState(DialogState);
  const isLoggedIn = useRecoilValue(LogInState);
  const navigate = useNavigate();

  const handleClickButton = () => {
    if (isLoggedIn) {
      navigate('/drawer/register');
      return;
    }
    setDialog({ open: true, type: 'login' });
  };

  return (
    <StyledNotContainer>
      <StyledNotTextContainer>
        <StyledNotTextBold>{boldText}</StyledNotTextBold>
        <div>{subText}</div>
      </StyledNotTextContainer>
      <StyledNotImg src={NotIllust} alt="no-result-ppussung" />

      {(type === 'SEARCH' || type === 'MYDRAWER') && (
        <BoxButton
          size="small"
          variant="filled"
          rounding={4}
          type="button"
          onClick={handleClickButton}
        >
          서비스 등록하기
        </BoxButton>
      )}
    </StyledNotContainer>
  );
};
