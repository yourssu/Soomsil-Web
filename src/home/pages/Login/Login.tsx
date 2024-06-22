import { useState } from 'react';

import {
  BoxButton,
  PasswordTextField,
  PlainButton,
  SuffixTextField,
} from '@yourssu/design-system-react';
import { useNavigate } from 'react-router-dom';

import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { StyledSignupContentTitle } from '@/home/components/SignupContents/SignupContents.style';
import { SignupFrame } from '@/home/components/SignupFrame/SignupFrame';
import { usePostLogin } from '@/home/hooks/usePostLogin';
import { useFullEmail } from '@/hooks/useFullEmail';
import { useRedirectLoggedInEffect } from '@/hooks/useRedirectLoggedInEffect';

import {
  StyledBottomButtonContainer,
  StyledBottomButtonWrapper,
  StyledButtonButtonSeparator,
  StyledLoginContainer,
} from './Login.style';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const fullEmail = useFullEmail(email);
  const loginMutation = usePostLogin();

  const handleClickLogin = () => {
    loginMutation.mutate(
      { email: fullEmail, password },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );
  };

  // 로그인 상태에서는 홈으로 리다이렉트
  useRedirectLoggedInEffect();

  return (
    <SignupFrame>
      <StyledLoginContainer>
        <StyledSignupContentTitle>로그인</StyledSignupContentTitle>
        <SuffixTextField
          fieldLabel="학교 메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ppushoong"
          isNegative={loginMutation.isError}
          suffix={EMAIL_DOMAIN}
        />
        <PasswordTextField
          fieldLabel="비밀번호"
          helperLabel={
            loginMutation.isError
              ? '학교 메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
              : ''
          }
          placeholder="영문숫자포함8글자"
          onChange={(e) => setPassword(e.target.value)}
          isNegative={loginMutation.isError}
        />

        <BoxButton
          size="large"
          rounding={8}
          variant="filled"
          onClick={handleClickLogin}
          disabled={loginMutation.isPending}
        >
          로그인
        </BoxButton>

        <StyledBottomButtonContainer>
          {/* TODO: 학교 메일 찾기 route 완성되면 navigate 기능 추가 */}
          <PlainButton size="medium" isPointed={false} isWarned={false}>
            <StyledBottomButtonWrapper>학교 메일 찾기</StyledBottomButtonWrapper>
          </PlainButton>
          <StyledButtonButtonSeparator>|</StyledButtonButtonSeparator>
          {/* 비밀번호 찾기 route 완성되면 navigate 기능 추가 */}
          <PlainButton size="medium" isPointed={false} isWarned={false}>
            <StyledBottomButtonWrapper>비밀번호 찾기</StyledBottomButtonWrapper>
          </PlainButton>
          <StyledButtonButtonSeparator>|</StyledButtonButtonSeparator>
          <PlainButton
            size="medium"
            isPointed={false}
            isWarned={false}
            onClick={() => navigate('/signup')}
          >
            <StyledBottomButtonWrapper>회원가입</StyledBottomButtonWrapper>
          </PlainButton>
        </StyledBottomButtonContainer>
      </StyledLoginContainer>
    </SignupFrame>
  );
};
