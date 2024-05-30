import { useSetRecoilState } from 'recoil';

import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { api } from '@/service/TokenService';

const resetUserInfo = (
  resetLoginState: (value: boolean) => void,
  resetUserState: (value: null) => void
) => {
  resetLoginState(false);
  resetUserState(null);
  api.logout();
};

export const useResetUserInfo = () => {
  const resetLoginState = useSetRecoilState(LogInState);
  const resetUserState = useSetRecoilState(UserState);

  return () => resetUserInfo(resetLoginState, resetUserState);
};
