import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import { getUserData } from '@/home/apis/getUserData';
import { UserState } from '@/home/recoil/UserState';

export const useGetUserData = () => {
  const setUserData = useSetRecoilState(UserState);
  return useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const data = await getUserData();
      setUserData(data);

      return data;
    },
    enabled: false,
  });
};
