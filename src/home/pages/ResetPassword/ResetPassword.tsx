import { EmailInput } from '@/home/components/ResetPasswordContents/EmailInput/EmailInput';
import { EmailVerification } from '@/home/components/ResetPasswordContents/EmailVerification/EmailVerification';
import { ResetPasswordFrame } from '@/home/components/ResetPasswordContents/ResetPasswordFrame/ResetPasswordFrame';
import { ResetPasswordInput } from '@/home/components/ResetPasswordContents/ResetPasswordInput/ResetPasswordInput';
import { ResetPasswordSuccess } from '@/home/components/ResetPasswordContents/ResetPasswordSuccess/ResetPasswordSuccess';
import { useFunnel } from '@/hooks/useFunnel';
import { useState } from 'react';

type ResetPasswordFunnelStepsType =
  | '이메일입력'
  | '이메일인증'
  | '비밀번호재설정'
  | '비밀번호재설정완료';

export const ResetPassword = () => {
  const [Funnel, setStep] = useFunnel<ResetPasswordFunnelStepsType>('이메일입력');
  const [email, setEmail] = useState('');
  return (
    <ResetPasswordFrame>
      <Funnel>
        <Funnel.Step name="이메일입력">
          <EmailInput
            onConfirm={() => {
              setStep('이메일인증');
            }}
          />
        </Funnel.Step>

        <Funnel.Step name="이메일인증">
          <EmailVerification
            onConfirm={() => {
              setStep('비밀번호재설정');
            }}
          />
        </Funnel.Step>

        <Funnel.Step name="비밀번호재설정">
          <ResetPasswordInput
            onConfirm={() => {
              setStep('비밀번호재설정완료');
            }}
          />
        </Funnel.Step>

        <Funnel.Step name="비밀번호재설정완료">
          <ResetPasswordSuccess />
        </Funnel.Step>
      </Funnel>
    </ResetPasswordFrame>
  );
};
