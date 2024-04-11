import { useState } from 'react';

import { BoxButton, PlainButton, SimpleTextField } from '@yourssu/design-system-react';

import { StyledAgreeTermsContainer, StyledAgreeTermsTitle } from '../SignupContents.styled';

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onEmailSubmit = () => {
    const emailDomain = '@soongsil.ac.kr';
    const fullEmail = email.replace(emailDomain, '') + '@soongsil.ac.kr';
    onConfirm(fullEmail);
  };

  return (
    <StyledAgreeTermsContainer>
      <StyledAgreeTermsTitle>회원가입</StyledAgreeTermsTitle>
      <div>
        <StyledTextFieldLabel>숭실대학교 메일을 입력해주세요.</StyledTextFieldLabel>
        <StyledEmailFieldWrapper>
          <SimpleTextField
            value={email}
            onChange={onChange}
            placeholder="ppushoong"
            suffix={<StyledEmailSuffix>@soongsil.ac.kr</StyledEmailSuffix>}
            autoFocus
          />
        </StyledEmailFieldWrapper>
      </div>
      <StyledButtonsContainer>
        <StyledPlainButtonWrapper>
          <PlainButton size="medium" isPointed={false} isWarned={false}>
            학교 메일 찾기
          </PlainButton>
        </StyledPlainButtonWrapper>
        <BoxButton
          size="large"
          variant="filled"
          rounding={8}
          disabled={email === ''}
          onClick={onEmailSubmit}
        >
          인증 메일 받기
        </BoxButton>
      </StyledButtonsContainer>
    </StyledAgreeTermsContainer>
  );
};
