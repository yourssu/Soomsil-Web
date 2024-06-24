import * as Dialog from '@radix-ui/react-dialog';
import { BoxButton } from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import PpussungIcon from '@/assets/home/ppussung.svg';
import { useResetUserInfo } from '@/hooks/useResetUserInfo';

import {
  StyledButtonContainer,
  StyledContentInnerContainer,
  StyledDialogContent,
  StyledDialogOverlay,
  StyledDialogTitle,
  StyledPpussungIcon,
} from './LogoutModal.style';

interface LogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LogoutModal = ({ open, onOpenChange }: LogoutModalProps) => {
  const navigate = useNavigate();
  const resetUserInfo = useResetUserInfo();

  const handleLogout = () => {
    resetUserInfo();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <StyledContentInnerContainer>
            <StyledPpussungIcon src={PpussungIcon} alt="뿌슝이" />
            <StyledDialogTitle>'숨쉴때'에서 로그아웃할까요?</StyledDialogTitle>
          </StyledContentInnerContainer>
          <StyledButtonContainer>
            <Dialog.Close asChild>
              <div>
                <BoxButton
                  variant="filled"
                  size="large"
                  rounding={4}
                  width="100%"
                  onClick={handleLogout}
                >
                  로그아웃
                </BoxButton>
              </div>
            </Dialog.Close>
            <Dialog.Close asChild>
              <div>
                <BoxButton variant="line" size="large" rounding={4} width="100%">
                  취소
                </BoxButton>
              </div>
            </Dialog.Close>
          </StyledButtonContainer>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
