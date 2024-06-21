import { useState } from 'react';

import {
  BoxButton,
  PasswordTextField,
  PlainButton,
  SuffixTextField,
} from '@yourssu/design-system-react';
import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { postAuthSignIn } from '@/home/apis/postAuthSignIn';
import { StyledSignupContentTitle } from '@/home/components/SignupContents/SignupContents.style';
import { SignupFrame } from '@/home/components/SignupFrame/SignupFrame';
import { useGetUserData } from '@/home/hooks/useGetUserData';
import { LogInState } from '@/home/recoil/LogInState';
import { useFullEmail } from '@/hooks/useFullEmail';
import { useRedirectLoggedInEffect } from '@/hooks/useRedirectLoggedInEffect';
import { api } from '@/service/TokenService';

import {
  StyledBottomButtonContainer,
  StyledBottomButtonWrapper,
  StyledButtonButtonSeparator,
  StyledLink,
  StyledLoginContainer,
} from './Login.style';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedLogin, setFailedLogin] = useState(false);
  const setIsLoggedIn = useSetRecoilState(LogInState);
  const { showBoundary } = useErrorBoundary();
  const { refetch } = useGetUserData();
  const navigate = useNavigate();
  const fullEmail = useFullEmail(email);
  const MAIL_SEARCH_URL = 'https://gw.ssu.ac.kr/o365Userlogin.aspx';

  const handleLoginClick = async () => {
    const { data, error } = await postAuthSignIn({ email: fullEmail, password });

    if (data) {
      api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
      api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
      setIsLoggedIn(true);
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
        <SuffixTextField
          fieldLabel="학교 메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ppushoong"
          isNegative={failedLogin}
          suffix={EMAIL_DOMAIN}
        />
        <PasswordTextField
          fieldLabel="비밀번호"
          helperLabel={
            failedLogin
              ? '학교 메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
              : ''
          }
          placeholder="영문숫자포함8글자"
          onChange={(e) => setPassword(e.target.value)}
          isNegative={failedLogin}
        />

        <BoxButton size="large" rounding={8} variant="filled" onClick={handleLoginClick}>
          로그인
        </BoxButton>

        <StyledBottomButtonContainer>
          <PlainButton size="medium" isPointed={false} isWarned={false}>
            <StyledBottomButtonWrapper>
              <StyledLink href={MAIL_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                학교 메일 찾기
              </StyledLink>
            </StyledBottomButtonWrapper>
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
