import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { BoxButton, SuffixTextField } from '@yourssu/design-system-react';
import { StyledEmailContainer, StyledSubTitleText, StyledTitleText } from './EmailInput.style';
import { postAuthVerificationEmail } from '@/home/apis/authVerification';
import { useFullEmail } from '@/hooks/useFullEmail';
import { useForm } from 'react-hook-form';

interface EmailInputProps {
  email: string;
  onConfirm: (email: string) => void;
}

interface FormData {
  email: string;
}

export const EmailInput = ({ email, onConfirm }: EmailInputProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    defaultValues: { email },
  });

  const localEmail = watch('email');
  const fullEmail = useFullEmail(localEmail);

  const handleOnSubmit = async (data: FormData) => {
    const response = await postAuthVerificationEmail({
      email: fullEmail,
      verificationType: 'PASSWORD',
    });

    if (response.error) {
      setError('email', { type: 'manual', message: '존재하지 않는 이메일입니다.' });
    } else {
      onConfirm(data.email);
    }
  };

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
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        onClick={handleSubmit(handleOnSubmit)}
        disabled={isSubmitting}
      >
        재설정 메일 보내기
      </BoxButton>
    </>
  );
};
