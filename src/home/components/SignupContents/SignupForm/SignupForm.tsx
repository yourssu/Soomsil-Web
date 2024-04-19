import { useState } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { AxiosError } from 'axios';

import { postAuthSignUp } from '@/home/apis/postAuthSignUp.ts';
import { AuthErrorData } from '@/home/types/Auth.type.ts';
import { useSignupFormValidation } from '@/hooks/useSignupFormValidator';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import { SignupInput } from './SignupInput/SignupInput';

interface SignupConfirmPayload {
  nickname: string;
  password: string;
}

interface SignupFormProps {
  onConfirm: ({ nickname, password }: SignupConfirmPayload) => void;
  email: string;
}

export const SignupForm = ({ email, onConfirm }: SignupFormProps) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const { isFormValid, nicknameValidator, passwordValidator } = useSignupFormValidation(
    nickname,
    password
  );

  const onFormConfirm = async () => {
    const sessionToken = sessionStorage.getItem('emailAuthSessionToken');

    if (!sessionToken) {
      alert('세션 토큰이 없습니다.');
      return;
    }

    const signUpParams = {
      nickName: nickname,
      password: password,
      sessionToken: sessionToken,
      email: email,
    };

    const res = await postAuthSignUp(signUpParams);

    if (res.data) {
      onConfirm({ nickname, password });
    } else if (res.error) {
      alert(
        (res.error as AxiosError<AuthErrorData>).response?.data.message ||
          '회원가입에 실패했습니다.'
      );
    }
  };

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <SignupInput
        title="사용할 닉네임을 입력해주세요."
        helperLabel="한글, 영어, 숫자를 사용해 2~12자로 입력해주세요"
        placeholder="ppushoong"
        validator={nicknameValidator}
        onChange={(value) => setNickname(value)}
      />
      <SignupInput
        hiddenField
        title="사용할 비밀번호를 입력해주세요."
        helperLabel="숫자와 영문자 조합으로 8자 이상 입력해주세요"
        placeholder="비밀번호"
        validator={passwordValidator}
        onChange={(value) => setPassword(value)}
      />
      <BoxButton
        rounding={8}
        size="large"
        variant="filled"
        onClick={onFormConfirm}
        disabled={!isFormValid}
      >
        <StyledSignupButtonText>회원가입</StyledSignupButtonText>
      </BoxButton>
    </StyledSignupContentContainer>
  );
};
