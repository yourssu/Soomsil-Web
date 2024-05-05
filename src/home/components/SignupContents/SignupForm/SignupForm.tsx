import { BoxButton } from '@yourssu/design-system-react';

import { SignupFormProps } from '@/home/components/SignupContents/SignupForm/SignUpForm.type.ts';
import { useSignUpForm } from '@/home/components/SignupContents/SignupForm/useSignUpForm.ts';
import { useSignupFormValidation } from '@/hooks/useSignupFormValidator.ts';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import { SignupInput } from './SignupInput/SignupInput';

export const SignupForm = ({ email, onConfirm }: SignupFormProps) => {
  const { nickname, password, onFormConfirm, setNickname, setPassword } = useSignUpForm({
    email,
    onConfirm,
  });

  const { isFormValid, nicknameValidator, passwordValidator } = useSignupFormValidation(
    nickname,
    password
  );

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
