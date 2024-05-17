import { BoxButton } from '@yourssu/design-system-react';

import { StyledDoneText, StyledDoneButtonText } from './WithdrawSuccess.style';

interface WithdrawSuccessProps {
  onConfirm: () => void;
}

export const WithdrawSuccess = ({ onConfirm }: WithdrawSuccessProps) => {
  return (
    <>
      <StyledDoneText>계정 탈퇴가 완료되었습니다</StyledDoneText>
      <BoxButton
        style={{ width: 432, height: 48 }}
        rounding={8}
        size="large"
        variant="filled"
        onClick={onConfirm}
      >
        <StyledDoneButtonText>숨쉴 홈으로 이동</StyledDoneButtonText>
      </BoxButton>
    </>
  );
};
