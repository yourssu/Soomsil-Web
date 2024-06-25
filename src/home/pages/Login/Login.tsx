import {
  BoxButton,
  PasswordTextField,
  PlainButton,
  SuffixTextField,
} from '@yourssu/design-system-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { StyledSignupContentTitle } from '@/home/components/SignupContents/SignupContents.style';
import { SignupFrame } from '@/home/components/SignupFrame/SignupFrame';
import { usePostLogin } from '@/home/hooks/usePostLogin';
import { useParseFullEmail } from '@/hooks/useParseFullEmail';
import { useRedirectLoggedInEffect } from '@/hooks/useRedirectLoggedInEffect';

import {
  StyledBottomButtonContainer,
  StyledBottomButtonWrapper,
  StyledButtonButtonSeparator,
  StyledLink,
  StyledLoginContainer,
} from './Login.style';

interface LoginFormStates {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormStates>();
  const MAIL_SEARCH_URL = 'https://gw.ssu.ac.kr/o365Userlogin.aspx';

  const navigate = useNavigate();
  const parseFullEmail = useParseFullEmail();
  const loginMutation = usePostLogin();

  const onSubmit: SubmitHandler<LoginFormStates> = ({ email, password }) => {
    const fullEmail = parseFullEmail(email);

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
      <StyledLoginContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledSignupContentTitle>로그인</StyledSignupContentTitle>
        <SuffixTextField
          {...register('email')}
          fieldLabel="학교 메일"
          placeholder="ppushoong"
          isNegative={loginMutation.isError}
          suffix={EMAIL_DOMAIN}
        />
        <PasswordTextField
          {...register('password')}
          fieldLabel="비밀번호"
          helperLabel={
            loginMutation.isError
              ? '학교 메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
              : ''
          }
          placeholder="영문숫자특수문자포함8글자"
          isNegative={loginMutation.isError}
        />

        <BoxButton type="submit" size="large" rounding={8} variant="filled">
          로그인
        </BoxButton>

        <StyledBottomButtonContainer>
          <PlainButton type="button" size="medium" isPointed={false} isWarned={false}>
            <StyledBottomButtonWrapper>
              <StyledLink href={MAIL_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                학교 메일 찾기
              </StyledLink>
            </StyledBottomButtonWrapper>
          </PlainButton>
          <StyledButtonButtonSeparator>|</StyledButtonButtonSeparator>
          <PlainButton
            type="button"
            size="medium"
            isPointed={false}
            isWarned={false}
            onClick={() => navigate('/resetpassword')}
          >
            <StyledBottomButtonWrapper>비밀번호 찾기</StyledBottomButtonWrapper>
          </PlainButton>
          <StyledButtonButtonSeparator>|</StyledButtonButtonSeparator>
          <PlainButton
            type="button"
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
