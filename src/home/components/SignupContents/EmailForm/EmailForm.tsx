import { useState } from 'react';

import { BoxButton, PlainButton, SimpleTextField } from '@yourssu/design-system-react';

import { postAuthVerificationEmail } from '@/home/apis/authVerification.ts';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import {
  StyledButtonsContainer,
  StyledEmailFieldWrapper,
  StyledEmailSuffix,
  StyledPlainButtonWrapper,
  StyledTextFieldLabel,
} from './EmailForm.style';

interface EmailFormProps {
  onConfirm: (email: string) => void;
}

const EMAIL_DOMAIN = '@soongsil.ac.kr';

export const EmailForm = ({ onConfirm }: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onEmailSubmit = async () => {
    let fullEmail = email;
    if (!email.endsWith(EMAIL_DOMAIN)) fullEmail += EMAIL_DOMAIN;
    const res = await postAuthVerificationEmail({ email: fullEmail, verificationType: 'SIGN_UP' });
    if (res.data) onConfirm(fullEmail);
    else setEmailError(res.error?.response?.data.message || '이메일을 다시 확인해주세요.');
  };

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <div>
        <StyledTextFieldLabel>숭실대학교 메일을 입력해주세요.</StyledTextFieldLabel>
        <StyledEmailFieldWrapper>
          <SimpleTextField
            value={email}
            onChange={onChange}
            isNegative={!!emailError}
            helperLabel={emailError}
            placeholder="ppushoong"
            suffix={<StyledEmailSuffix>{EMAIL_DOMAIN}</StyledEmailSuffix>}
            autoFocus
          />
        </StyledEmailFieldWrapper>
      </div>
      <StyledButtonsContainer>
        <StyledPlainButtonWrapper>
          <PlainButton size="medium" isPointed={false} isWarned={false}>
            <StyledSignupButtonText>학교 메일 찾기</StyledSignupButtonText>
          </PlainButton>
        </StyledPlainButtonWrapper>
        <BoxButton
          size="large"
          variant="filled"
          rounding={8}
          disabled={email === ''}
          onClick={onEmailSubmit}
        >
          <StyledSignupButtonText>인증 메일 받기</StyledSignupButtonText>
        </BoxButton>
      </StyledButtonsContainer>
    </StyledSignupContentContainer>
  );
};
