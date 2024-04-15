import { useEffect, useState, useCallback } from 'react';

import { BoxButton, PlainButton, SimpleTextField } from '@yourssu/design-system-react';
import { addSeconds, format } from 'date-fns';
import { Link } from 'react-router-dom';

import {
  getAuthVerificationCheck,
  postAuthVerificationEmail,
} from '@/home/apis/authVerification.ts';
import { useSecondTimer } from '@/hooks/useSecondTimer';

import { StyledSignupContentContainer, StyledSignupContentTitle } from '../SignupContents.style';

import {
  StyledPlainButtonContainer,
  StyledEmailAuthParagraph,
  StyledTimerSuffix,
} from './EmailAuth.style';

interface EmailAuthProps {
  email: string;
  onConfirm: () => void;
  backToEmailForm: () => void;
}

export const EmailAuth = ({ email, onConfirm, backToEmailForm }: EmailAuthProps) => {
  const [authed, setAuthed] = useState(false);
  const { leftTime, isTimerEnd, resetTimer } = useSecondTimer(8 * 60);

  const leftTimeToString = () => {
    const targetTime = addSeconds(new Date(0), leftTime);
    return format(targetTime, 'mm:ss');
  };

  const sendAuthenticationMail = useCallback(async () => {
    resetTimer();

    const verificationProps = {
      email: email,
      verificationType: 'SIGN_UP',
    };

    const res = await postAuthVerificationEmail(verificationProps);

    if (res.data) {
      sessionStorage.setItem('emailAuthSessionToken', res.data.sessionToken);
      sessionStorage.setItem(
        'emailAuthSessionTokenExpiredIn',
        res.data.sessionTokenExpiredIn.toString()
      );
      setAuthed(true);
      return;
    } else if (res.error) {
      alert(res.error.message);
      backToEmailForm();
    }

    setAuthed(false);
  }, [backToEmailForm, email, resetTimer]);

  useEffect(() => {
    if (authed) return;
    if (!sendAuthenticationMail) return;

    (async () => {
      await sendAuthenticationMail();
    })();
  }, [sendAuthenticationMail, authed]);

  const onClickNext = async () => {
    const session = sessionStorage.getItem('emailAuthSessionToken');
    if (!session) return;

    const verificationCheckProps = {
      session: session,
    };

    const res = await getAuthVerificationCheck(verificationCheckProps);

    if (res.data) {
      if (res.data.isVerified) onConfirm();
      else alert('이메일 인증을 완료해주세요.');
    } else if (res.error) {
      alert(res.error.message);
    }
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
            suffix={<StyledTimerSuffix>{leftTimeToString()}</StyledTimerSuffix>}
          />
        </div>
      </div>
      <BoxButton
        rounding={8}
        size="large"
        variant="filled"
        onClick={onClickNext}
        disabled={isTimerEnd || !authed}
      >
        다음
      </BoxButton>
      <StyledPlainButtonContainer>
        <PlainButton
          size="medium"
          isPointed={false}
          isWarned={false}
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
