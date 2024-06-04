import { DialogClose } from '@radix-ui/react-dialog';
import { BoxButton } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import Ppussung from '@/assets/defaultProfile.png';
import { ProfileSvg } from '@/components/ProfileSvg/ProfileSVG';

import { StyledContainer, StyledButtonContainer, StyledTitle } from './LoginDialog.style';

export const LoginDialog = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <ProfileSvg imageUrl={Ppussung} />
      <StyledTitle>{'로그인이 필요한 서비스입니다.\n로그인하시겠어요?'}</StyledTitle>
      <StyledButtonContainer>
        <DialogClose asChild>
          <BoxButton
            rounding={4}
            size="large"
            variant="filled"
            width="10.75rem"
            onClick={() => {
              navigate('/login');
            }}
          >
            예
          </BoxButton>
        </DialogClose>
        <DialogClose asChild>
          <BoxButton rounding={4} size="large" variant="line" width="10.75rem">
            아니오
          </BoxButton>
        </DialogClose>
      </StyledButtonContainer>
    </StyledContainer>
  );
};