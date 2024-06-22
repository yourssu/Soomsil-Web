import { BoxButton, PasswordTextField, SimpleTextField } from '@yourssu/design-system-react';

import { SignupFormProps } from '@/home/components/SignupContents/SignupForm/SignUpForm.type.ts';
import { useSignUpForm } from '@/home/components/SignupContents/SignupForm/useSignUpForm.ts';
import { useSignupFormValidation } from '@/hooks/useSignupFormValidator.ts';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

export const SignupForm = ({ email, onConfirm }: SignupFormProps) => {
  const { nickname, password, onFormConfirm, setNickname, setPassword } = useSignUpForm({
    email,
    onConfirm,
  });

  const { nicknameValidOnce, passwordValidOnce, isFormValid, isNicknameValid, isPasswordValid } =
    useSignupFormValidation(nickname, password);

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <SimpleTextField
        value={nickname}
        fieldLabel="사용할 닉네임을 입력해주세요."
        helperLabel="한글, 영어, 숫자를 사용해 2~12자로 입력해주세요"
        placeholder="ppushoong"
        isNegative={!isNicknameValid && nicknameValidOnce.current}
        onChange={(e) => {
          if (isNicknameValid) nicknameValidOnce.current = true;
          setNickname(e.target.value);
        }}
        onClickClearButton={() => {
          nicknameValidOnce.current = false;
          setNickname('');
        }}
      />
      <PasswordTextField
        fieldLabel="사용할 비밀번호를 입력해주세요."
        helperLabel="숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요"
        placeholder="비밀번호"
        isNegative={!isPasswordValid && passwordValidOnce.current}
        onChange={(e) => {
          if (isPasswordValid) passwordValidOnce.current = true;
          setPassword(e.target.value);
        }}
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
