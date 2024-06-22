import { useMutation } from '@tanstack/react-query';

import { postWithdraw } from '@/home/apis/postWithdraw';

import { useResetUserInfo } from './useResetUserInfo';

export const usePostWithdraw = () => {
  const resetUserInfo = useResetUserInfo();

  return useMutation({
    mutationFn: postWithdraw,
    onSuccess: () => {
      resetUserInfo();
    },
    throwOnError: true,
  });
};
