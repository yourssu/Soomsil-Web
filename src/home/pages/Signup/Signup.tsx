import { useState } from 'react';

import { postAuthVerificationEmail } from '@/home/apis/authVerification.ts';
import { AgreeTerms } from '@/home/components/SignupContents/AgreeTerms/AgreeTerms';
import { EmailAuth } from '@/home/components/SignupContents/EmailAuth/EmailAuth';
import { EmailForm } from '@/home/components/SignupContents/EmailForm/EmailForm';
import { SignupEnd } from '@/home/components/SignupContents/SignupEnd/SignupEnd';
import { SignupForm } from '@/home/components/SignupContents/SignupForm/SignupForm';
import { SignupFrame } from '@/home/components/SignupFrame/SignupFrame';
import { useFunnel } from '@/hooks/useFunnel.tsx';

type SignupFunnelStepsType =
  | '약관동의'
  | '이메일입력'
  | '이메일인증'
  | '회원가입폼'
  | '회원가입완료';

export const Signup = () => {
  const [Funnel, setStep] = useFunnel<SignupFunnelStepsType>('약관동의');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const sendAuthenticationMail = async (email: string) => {
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
    }

    return res;
  };

  // TODO: 회원가입 API 연결 시 삭제
  console.log(nickname, password);

  return (
    <SignupFrame>
      <Funnel>
        <Funnel.Step name="약관동의">
          <AgreeTerms
            onConfirm={() => {
              setStep('이메일입력');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="이메일입력">
          <EmailForm
            sendAuthenticationMail={sendAuthenticationMail}
            onConfirm={(emailValue) => {
              setEmail(emailValue);
              setStep('이메일인증');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="이메일인증">
          <EmailAuth
            sendAuthenticationMail={sendAuthenticationMail}
            email={email}
            onConfirm={() => {
              setStep('회원가입폼');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="회원가입폼">
          <SignupForm
            onConfirm={({ nickname, password }) => {
              setNickname(nickname);
              setPassword(password);
              setStep('회원가입완료');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="회원가입완료">
          <SignupEnd />
        </Funnel.Step>
      </Funnel>
    </SignupFrame>
  );
};
