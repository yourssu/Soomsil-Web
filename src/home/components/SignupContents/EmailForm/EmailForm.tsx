import { BoxButton, PlainButton, SuffixTextField } from '@yourssu/design-system-react';

import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { EmailFormProps } from '@/home/components/SignupContents/EmailForm/EmailForm.type.ts';
import { useEmailForm } from '@/home/components/SignupContents/EmailForm/useEmailForm.ts';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import {
  StyledButtonsContainer,
  StyledEmailFieldWrapper,
  StyledPlainButtonWrapper,
  StyledTextFieldLabel,
} from './EmailForm.style';

export const EmailForm = ({ onConfirm }: EmailFormProps) => {
  const { email, emailSending, emailError, onEmailSubmit, onChange } = useEmailForm({ onConfirm });

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <div>
        <StyledTextFieldLabel>숭실대학교 메일을 입력해주세요.</StyledTextFieldLabel>
        <StyledEmailFieldWrapper>
          <SuffixTextField
            value={email}
            onChange={onChange}
            isNegative={!!emailError}
            helperLabel={emailError}
            placeholder="ppushoong"
            suffix={EMAIL_DOMAIN}
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
          disabled={email === '' || emailSending}
          onClick={onEmailSubmit}
        >
          <StyledSignupButtonText>인증 메일 받기</StyledSignupButtonText>
        </BoxButton>
      </StyledButtonsContainer>
    </StyledSignupContentContainer>
  );
};
