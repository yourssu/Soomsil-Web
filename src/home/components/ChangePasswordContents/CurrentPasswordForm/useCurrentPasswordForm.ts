import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getUserPasswordMatch } from '@/home/apis/getUserPasswordMatch';
import { LogInState } from '@/home/recoil/LogInState';
import { SessionTokenType } from '@/home/types/GetPassword.type';

interface CurrentPasswordFormProps {
  onConfirm: () => void;
  setSessionToken: ({ sessionToken }: SessionTokenType) => void;
}

export const useCurrentPasswordForm = ({
  onConfirm,
  setSessionToken,
}: CurrentPasswordFormProps) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const isLoggedIn = useRecoilValue(LogInState);
  const navigate = useNavigate();

  const passwordMatchMutation = useMutation({
    mutationFn: getUserPasswordMatch,
    onSuccess: (data) => {
      setSessionToken(data);
      onConfirm();
    },
    onError: () => {
      setIsPasswordError(true);
    },
  });

  const checkCurrentPassword = () => {
    if (!isLoggedIn) {
      navigate('/Login');
      return;
    }

    passwordMatchMutation.mutate(currentPassword);
  };

  const handlePasswordChange = (password: string) => {
    if (isPasswordError) setIsPasswordError(false);
    setCurrentPassword(password);
  };

  return {
    currentPassword,
    isPasswordError,
    handlePasswordChange,
    checkCurrentPassword,
  };
};
