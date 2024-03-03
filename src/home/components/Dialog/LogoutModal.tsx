import * as Dialog from '@radix-ui/react-dialog';
import { BoxButton } from '@yourssu/design-system-react';

import PpussungIcon from '@/assets/home/ppussung.svg';

import {
  StyledButtonContainer,
  StyledContentInnerContainer,
  StyledDialogContent,
  StyledDialogDescription,
  StyledDialogOverlay,
  StyledDialogTitle,
  StyledPpussungIcon,
} from './LogoutModal.style';

interface LogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LogoutModal = ({ open, onOpenChange }: LogoutModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <StyledContentInnerContainer>
            <StyledPpussungIcon src={PpussungIcon} alt="뿌슝이" />
            <StyledDialogTitle>'숨쉴때'에서 로그아웃할까요?</StyledDialogTitle>
            <StyledDialogDescription>
              다른 사용자의 접근을 막기 위해 어쩌구 저쩌구(생략가능)
            </StyledDialogDescription>
          </StyledContentInnerContainer>
          <StyledButtonContainer>
            <Dialog.Close asChild>
              <div>
                <BoxButton variant="filled" size="large" rounding={4} width="100%">
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
