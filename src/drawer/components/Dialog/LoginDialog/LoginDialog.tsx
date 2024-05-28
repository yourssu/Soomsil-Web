import { DialogClose } from '@radix-ui/react-dialog';
import { BoxButton } from '@yourssu/design-system-react';
import { useSetRecoilState } from 'recoil';

import Ppussung from '@/assets/defaultProfile.png';
import { ProfileSvg } from '@/components/ProfileSvg/ProfileSVG';
import { DialogState } from '@/recoil/DialogState';

import { StyledContainer, StyledButtonContainer, StyledTitle } from './LoginDialog.style';

export const LoginDialog = () => {
  const setDialog = useSetRecoilState(DialogState);

  const handleClick = () => {
    setDialog(null);
    window.location.replace('/login');
  };

  return (
    <StyledContainer>
      <ProfileSvg imageUrl={Ppussung} />
      <StyledTitle>{'로그인이 필요한 서비스입니다.\n로그인하시겠어요?'}</StyledTitle>
      <StyledButtonContainer>
        <BoxButton
          rounding={4}
          size="large"
          variant="filled"
          width="10.75rem"
          onClick={handleClick}
        >
          예
        </BoxButton>
        <DialogClose asChild>
          <BoxButton rounding={4} size="large" variant="line" width="10.75rem">
            아니오
          </BoxButton>
        </DialogClose>
      </StyledButtonContainer>
    </StyledContainer>
  );
};
