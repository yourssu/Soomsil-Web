import { BoxButton, PlainButton, SimpleTextField } from '@yourssu/design-system-react';
import { addSeconds, format } from 'date-fns';
import { Link } from 'react-router-dom';

import { EmailAuthProps } from '@/home/components/SignupContents/EmailAuth/EmailAuth.type.ts';
import { useEmailAuth } from '@/home/components/SignupContents/EmailAuth/useEmailAuth.ts';

import { StyledSignupContentContainer, StyledSignupContentTitle } from '../SignupContents.style';

import {
  StyledPlainButtonContainer,
  StyledEmailAuthParagraph,
  StyledTimerSuffix,
  StyledErrorText,
} from './EmailAuth.style';

export const EmailAuth = ({ email, onConfirm }: EmailAuthProps) => {
  const { authed, isTimerEnd, error, leftTime, emailSending, sendAuthenticationMail, onClickNext } =
    useEmailAuth({ email, onConfirm });

  const leftTimeToString = () => {
    const targetTime = addSeconds(new Date(0), leftTime);
    return format(targetTime, 'mm:ss');
  };

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <div>
        <StyledEmailAuthParagraph>
          {'입력한 메일로\n인증 메일이 발송되었습니다.\n\n메일 내에 있는 인증 버튼을 클릭해주세요.'}
        </StyledEmailAuthParagraph>
        <div>
          <SimpleTextField
            value={email}
            disabled
            suffix={authed && <StyledTimerSuffix>{leftTimeToString()}</StyledTimerSuffix>}
          />
        </div>
        {error && <StyledErrorText>{error}</StyledErrorText>}
      </div>
      <BoxButton
        rounding={8}
        size="large"
        variant="filled"
        onClick={onClickNext}
        disabled={isTimerEnd || !authed || emailSending}
      >
        다음
      </BoxButton>
      <StyledPlainButtonContainer>
        <PlainButton
          size="medium"
          isPointed={false}
          isWarned={false}
          disabled={emailSending}
          onClick={sendAuthenticationMail}
        >
          인증 메일 재전송
        </PlainButton>
        <span>|</span>
        <Link to="https://outlook.office.com/mail/" target="_blank" rel="noopener noreferrer">
          <PlainButton size="medium" isPointed={false} isWarned={false}>
            학교 메일 열기
          </PlainButton>
        </Link>
      </StyledPlainButtonContainer>
    </StyledSignupContentContainer>
  );
};
