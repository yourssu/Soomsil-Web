import { BoxButton, PlainButton, SuffixTextField } from '@yourssu/design-system-react';

import { EMAIL_DOMAIN, MAIL_SEARCH_URL } from '@/constants/email.constant';
import { EmailFormProps } from '@/home/components/SignupContents/EmailForm/EmailForm.type';
import { useEmailForm } from '@/home/components/SignupContents/EmailForm/useEmailForm';
import { usePreventDuplicateClick } from '@/hooks/usePreventDuplicateClick';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import {
  StyledButtonsContainer,
  StyledEmailFieldWrapper,
  StyledLink,
  StyledPlainButtonWrapper,
  StyledTextFieldLabel,
} from './EmailForm.style';

export const EmailForm = ({ onConfirm }: EmailFormProps) => {
  const { email, emailError, onEmailSubmit, onChange } = useEmailForm({ onConfirm });
  const { disabled, handleClick } = usePreventDuplicateClick();

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
          <PlainButton type="button" size="medium" isPointed={false} isWarned={false}>
            <StyledSignupButtonText>
              <StyledLink href={MAIL_SEARCH_URL} target="_blank" rel="noopener noreferrer">
                학교 메일 찾기
              </StyledLink>
            </StyledSignupButtonText>
          </PlainButton>
        </StyledPlainButtonWrapper>
        <BoxButton
          type="submit"
          size="large"
          variant="filled"
          rounding={8}
          disabled={email === '' || disabled}
          onClick={async (e) => {
            e.preventDefault();
            await handleClick(onEmailSubmit);
          }}
        >
          <StyledSignupButtonText>
            {disabled ? '잠시만 기다려주세요...' : '인증 메일 받기'}
          </StyledSignupButtonText>
        </BoxButton>
      </StyledButtonsContainer>
    </StyledSignupContentContainer>
  );
};
