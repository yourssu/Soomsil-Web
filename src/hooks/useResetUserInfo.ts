import { useSetRecoilState } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

export const useResetUserInfo = () => {
  const resetLoginState = useSetRecoilState(LogInState);
  const resetUserState = useSetRecoilState(UserState);

  return () => {
    resetLoginState(false);
    resetUserState(null);
    api.logout();
  };
};
