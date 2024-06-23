import { useSetRecoilState } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { api } from '@/service/TokenService';

export const useResetUserInfo = () => {
  const resetLoginState = useSetRecoilState(LogInState);

  return () => {
    resetLoginState(false);
    api.logout();
  };
};
