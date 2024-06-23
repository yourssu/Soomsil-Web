import { useState } from 'react';

import { ChangePasswordFrame } from '@/home/components/ChangePasswordContents/ChangePasswordFrame/ChangePasswordFrame';
import { CurrentPasswordForm } from '@/home/components/ChangePasswordContents/CurrentPasswordForm/CurrentPasswordForm';
import { NewPasswordForm } from '@/home/components/ChangePasswordContents/NewPasswordForm/NewPasswordForm';
import { SessionTokenType } from '@/home/types/GetPassword.type';
import { useFunnel } from '@/hooks/useFunnel';

type ChangePasswordFunnelStepsType = '현재비밀번호입력' | '새비밀번호입력';

export const ChangePassword = () => {
  const [Funnel, setStep] = useFunnel<ChangePasswordFunnelStepsType>('현재비밀번호입력');
  const [sessionToken, setSessionToken] = useState<SessionTokenType | null>(null);
  const [previousPassword, setPreviousPassword] = useState<string>('');

  return (
    <ChangePasswordFrame>
      <Funnel>
        <Funnel.Step name="현재비밀번호입력">
          <CurrentPasswordForm
            onConfirm={() => setStep('새비밀번호입력')}
            setSessionToken={setSessionToken}
            setPreviousPassword={setPreviousPassword}
          />
        </Funnel.Step>
        <Funnel.Step name="새비밀번호입력">
          <NewPasswordForm
            sessionToken={sessionToken as SessionTokenType}
            previousPassword={previousPassword}
          />
        </Funnel.Step>
      </Funnel>
    </ChangePasswordFrame>
  );
};
