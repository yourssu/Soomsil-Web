import { BoxButton } from '@yourssu/design-system-react';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import { StyledLinkWrapper } from './SignupEnd.style';

export const SignupEnd = () => {
  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입이 완료되었습니다</StyledSignupContentTitle>
      <StyledLinkWrapper to="/login">
        <BoxButton type="button" rounding={8} size="large" variant="filled">
          <StyledSignupButtonText>로그인 페이지로 이동</StyledSignupButtonText>
        </BoxButton>
      </StyledLinkWrapper>
    </StyledSignupContentContainer>
  );
};
