import { BoxButton } from '@yourssu/design-system-react';
import { StyledLink, StyledSubTitleText, StyledTitleText } from './ResetPasswordSuccess.style';

export const ResetPasswordSuccess = () => {
  return (
    <>
      <StyledTitleText>비밀번호 재설정</StyledTitleText>
      <StyledSubTitleText>
        비밀번호 재설정이 완료되었습니다.
        <br />
        보안을 위해 재로그인해주세요.
      </StyledSubTitleText>
      <StyledLink to="/login">
        <BoxButton style={{ width: '100%' }} size="large" variant="filled" rounding={8}>
          로그인 하기
        </BoxButton>
      </StyledLink>
    </>
  );
};
