import { useState } from 'react';

import { AgreeTerms } from '@/home/components/SignupContents/AgreeTerms/AgreeTerms';
import { EmailAuth } from '@/home/components/SignupContents/EmailAuth/EmailAuth';
import { EmailForm } from '@/home/components/SignupContents/EmailForm/EmailForm';
import { SignupEnd } from '@/home/components/SignupContents/SignupEnd/SignupEnd';
import { SignupForm } from '@/home/components/SignupContents/SignupForm/SignupForm';
import { SignupFrame } from '@/home/components/SignupFrame/SignupFrame';
import { useFunnel } from '@/hooks/useFunnel.tsx';
import { useRedirectLoggedInEffect } from '@/hooks/useRedirectLoggedInEffect';

type SignupFunnelStepsType =
  | '약관동의'
  | '이메일입력'
  | '이메일인증'
  | '회원가입폼'
  | '회원가입완료';

export const Signup = () => {
  const [Funnel, setStep] = useFunnel<SignupFunnelStepsType>('약관동의');
  const [email, setEmail] = useState('');

  useRedirectLoggedInEffect();

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
            onConfirm={(emailValue) => {
              setEmail(emailValue);
              setStep('이메일인증');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="이메일인증">
          <EmailAuth
            email={email}
            onConfirm={() => {
              setStep('회원가입폼');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="회원가입폼">
          <SignupForm
            onConfirm={() => {
              setStep('회원가입완료');
            }}
            email={email}
          />
        </Funnel.Step>
        <Funnel.Step name="회원가입완료">
          <SignupEnd />
        </Funnel.Step>
      </Funnel>
    </SignupFrame>
  );
};
