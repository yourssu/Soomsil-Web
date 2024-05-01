import { useState } from 'react';

import { BoxButton, PlainButton, SimpleTextField } from '@yourssu/design-system-react';

import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { useFullEmail } from '@/hooks/useFullEmail';

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

export const EmailForm = ({ onConfirm }: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const getFullEmail = useFullEmail(email);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onEmailSubmit = () => {
    onConfirm(getFullEmail());
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
