import { useQuery } from '@tanstack/react-query';

import { getUserPasswordMatch } from '@/home/apis/getUserPasswordMatch';
import { SessionTokenType } from '@/home/types/GetPassword.type';

export const useGetUserPasswordMatch = (password: string) => {
  return useQuery<SessionTokenType>({
    queryKey: ['userPasswordMatch'],
    queryFn: () => {
      return getUserPasswordMatch({ password });
    },
    retry: false,
    enabled: false,
  });
};
