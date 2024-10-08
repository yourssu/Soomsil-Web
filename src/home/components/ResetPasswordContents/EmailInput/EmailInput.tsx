import { BoxButton, SuffixTextField } from '@yourssu/design-system-react';

import { EMAIL_DOMAIN } from '@/constants/email.constant';

import { StyledEmailContainer, StyledSubTitleText, StyledTitleText } from './EmailInput.style';
import { useEmailInputForm } from './useEmailInputForm';

interface EmailInputProps {
  email: string;
  onConfirm: (email: string) => void;
}

export const EmailInput = ({ email, onConfirm }: EmailInputProps) => {
  const { register, handleSubmit, errors, handleOnSubmit, isPending } = useEmailInputForm({
    email,
    onConfirm,
  });

  return (
    <>
      <StyledTitleText>비밀번호 찾기</StyledTitleText>
      <StyledSubTitleText>
        숨쉴에 가입했던 학교 이메일을 입력해주세요.
        <br />
        비밀번호 재설정 메일을 보내드립니다.
      </StyledSubTitleText>
      <StyledEmailContainer>
        <SuffixTextField
          fieldLabel="학교 이메일"
          placeholder="ppushoong"
          suffix={EMAIL_DOMAIN}
          {...register('email')}
          isNegative={errors.email ? true : false}
          helperLabel={errors.email ? errors.email.message : ''}
        />
      </StyledEmailContainer>
      <BoxButton
        type="submit"
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        onClick={handleSubmit(handleOnSubmit)}
        disabled={isPending}
      >
        {isPending ? '잠시만 기다려주세요...' : '재설정 메일 보내기'}
      </BoxButton>
    </>
  );
};
