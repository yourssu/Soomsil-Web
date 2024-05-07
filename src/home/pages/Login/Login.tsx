import { useState } from 'react';

import { BoxButton, PlainButton } from '@yourssu/design-system-react';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import { postAuthSignIn } from '@/home/apis/postAuthSignIn';
import { LoginInput } from '@/home/components/LoginInput/LoginInput';
import { StyledSignupContentTitle } from '@/home/components/SignupContents/SignupContents.style';
import { SignupFrame } from '@/home/components/SignupFrame/SignupFrame';
import { useGetUserData } from '@/home/hooks/useGetUserData';
import { useFullEmail } from '@/hooks/useFullEmail';
import { useRedirectLoggedInEffect } from '@/hooks/useRedirectLoggedInEffect';
import { api } from '@/service/TokenService';

import {
  StyledBottomButtonContainer,
  StyledBottomButtonWrapper,
  StyledButtonButtonSeparator,
  StyledLoginContainer,
} from './Login.style';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);

  const { showBoundary } = useErrorBoundary();
  const { refetch } = useGetUserData();
  const navigate = useNavigate();
  const fullEmail = useFullEmail(email);

  const handleLoginClick = async () => {
    const { data, error } = await postAuthSignIn({ email: fullEmail, password });

    if (data) {
      api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
      api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
      refetch();
      navigate('/');
      return;
    }

    if (error?.response?.status == 401) {
      setFailedLogin(true);
      return;
    }

    if (error?.response?.status != 400) {
      showBoundary(error);
      return;
    }
  };

  // 로그인 상태에서는 홈으로 리다이렉트
  useRedirectLoggedInEffect();

  return (
    <SignupFrame>
      <StyledLoginContainer>
        <StyledSignupContentTitle>로그인</StyledSignupContentTitle>
        <LoginInput
          title="학교 메일"
          helperLabel=""
          placeholder="이메일"
          onChange={(value) => setEmail(value)}
          isNegative={failedLogin}
        />
        <LoginInput
          hiddenField
          title="비밀번호"
          helperLabel={
            '학교 메일 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.'
          }
          placeholder="비밀번호"
          onChange={(value) => setPassword(value)}
          isNegative={failedLogin}
        />

        <BoxButton size="large" rounding={8} variant="filled" onClick={handleLoginClick}>
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
