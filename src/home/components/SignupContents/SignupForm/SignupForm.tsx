import { BoxButton, PasswordTextField, SimpleTextField } from '@yourssu/design-system-react';
import { useForm } from 'react-hook-form';

import {
  SignupFormProps,
  SignupFormStates,
} from '@/home/components/SignupContents/SignupForm/SignUpForm.type.ts';
import { useSignupFormValidation } from '@/hooks/useSignupFormValidation';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import { useSignupFormConfirm } from './useSignupFormConfirm';
import { useSignupFormValidation } from './useSignupFormValidation';

export const SignupForm = ({ email, onConfirm }: SignupFormProps) => {
  const { register, handleSubmit, setValue, watch, formState } = useForm<SignupFormStates>({
    defaultValues: {
      nickname: '',
      password: '',
    },
  });

  const onFormConfirm = useSignupFormConfirm({ email, onConfirm });

  const { nicknameValidOnce, passwordValidOnce, isFormValid, isNicknameValid, isPasswordValid } =
    useSignupFormValidation({
      nickname: watch('nickname'),
      password: watch('password'),
    });

  return (
    <StyledSignupContentContainer onSubmit={handleSubmit(onFormConfirm)}>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <SimpleTextField
        {...register('nickname', {
          onChange: () => {
            if (isNicknameValid) nicknameValidOnce.current = true;
          },
        })}
        fieldLabel="사용할 닉네임을 입력해주세요."
        helperLabel="한글, 영어, 숫자를 사용해 2~12자로 입력해주세요"
        placeholder="ppushoong"
        isNegative={!isNicknameValid && nicknameValidOnce.current}
        onClickClearButton={() => {
          nicknameValidOnce.current = false;
          setValue('nickname', '');
        }}
      />
      <PasswordTextField
        {...register('password', {
          onChange: () => {
            if (isPasswordValid) passwordValidOnce.current = true;
          },
        })}
        fieldLabel="사용할 비밀번호를 입력해주세요."
        helperLabel="숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요"
        placeholder="비밀번호"
        isNegative={!isPasswordValid && passwordValidOnce.current}
      />
      <BoxButton
        type="submit"
        rounding={8}
        size="large"
        variant="filled"
        disabled={!isFormValid || formState.isSubmitting}
      >
        <StyledSignupButtonText>회원가입</StyledSignupButtonText>
      </BoxButton>
    </StyledSignupContentContainer>
  );
};
