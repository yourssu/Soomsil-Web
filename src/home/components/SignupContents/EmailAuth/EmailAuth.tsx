import { useState } from 'react';

import { BoxButton, PlainButton, SimpleTextField } from '@yourssu/design-system-react';

import { useSecondTimer } from '@/hooks/useSecondTimer';

import { StyledSignupContentContainer, StyledSignupContentTitle } from '../SignupContents.style';

import {
  StyledButtonContainer,
  StyledEmailAuthParagraph,
  StyledTimerSuffix,
} from './EmailAuth.style';

interface EmailAuthProps {
  email: string;
  onConfirm: () => void;
}

export const EmailAuth = ({ email, onConfirm }: EmailAuthProps) => {
  const [authed, setAuthed] = useState(true); // Todo: 인증 기능 구현 완료시 false로 변경
  const { leftTime, isTimerEnd, resetTimer } = useSecondTimer(8 * 60);

  const leftTimeToString = () => {
    const minutes = Math.floor(leftTime / 60);
    const seconds = leftTime % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const sendAuthenticationMail = () => {
    setAuthed(false);
    resetTimer();

    // Todo: 여기에 인증 메일 전송하는 코드 작성하면 됨.
  };

  const openMailInNewTab = () => {
    const url = 'https://outlook.office.com/mail/';
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <div>
        <StyledEmailAuthParagraph>
          입력한 메일으로
          <br />
          인증 메일이 발송되었습니다.
          <br />
          <br />
          메일 내에 있는 인증 버튼을 클릭해주세요.
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
        onClick={onConfirm}
        disabled={isTimerEnd || !authed}
      >
        다음
      </BoxButton>
      <StyledButtonContainer>
        <PlainButton
          size="medium"
          isPointed={false}
          isWarned={false}
          onClick={sendAuthenticationMail}
        >
          인증 메일 재전송
        </PlainButton>
        <span>|</span>
        <PlainButton size="medium" isPointed={false} isWarned={false} onClick={openMailInNewTab}>
          학교 메일 열기
        </PlainButton>
      </StyledButtonContainer>
    </StyledSignupContentContainer>
  );
};
