import { useEffect, useState } from 'react';

import { CurrentPasswordForm } from '@/home/components/ChangePasswordContents/CurrentPasswordForm/CurrentPasswordForm';
import { NewPasswordForm } from '@/home/components/ChangePasswordContents/NewPasswordForm/NewPasswordForm';
import { useFunnel } from '@/hooks/useFunnel';

type ChangePasswordFunnelStepsType = '현재비밀번호입력' | '새비밀번호입력';

export const ChangePassword = () => {
  const [Funnel, setStep] = useFunnel<ChangePasswordFunnelStepsType>('현재비밀번호입력');
  const [sessionToken, setSessionToken] = useState<string>('');

  return (
    <Funnel>
      <Funnel.Step name="현재비밀번호입력">
        <CurrentPasswordForm
          onConfirm={() => setStep('새비밀번호입력')}
          setSessionToken={setSessionToken}
        />
      </Funnel.Step>
      <Funnel.Step name="새비밀번호입력">
        <NewPasswordForm />
      </Funnel.Step>
    </Funnel>
  );
};
