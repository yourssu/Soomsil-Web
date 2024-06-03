import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { getUserData } from '@/home/apis/getUserData';

import { LogInState } from '../recoil/LogInState';

export const useGetUserData = () => {
  const isLoggedIn = useRecoilValue(LogInState);

  return useQuery({
    queryKey: ['userData'],
    queryFn: getUserData,
    enabled: isLoggedIn,
  });
};
