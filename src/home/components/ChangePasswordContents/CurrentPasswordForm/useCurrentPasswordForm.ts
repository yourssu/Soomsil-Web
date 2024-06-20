import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useGetUserPasswordMatch } from '@/home/hooks/useGetUserPasswordMatch';
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
  const { data, isError, refetch } = useGetUserPasswordMatch(currentPassword);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      setIsPasswordError(true);
      return;
    }

    if (data) {
      setSessionToken(data);
      onConfirm();
    }
  }, [data, isError, setSessionToken, onConfirm]);

  const checkCurrentPassword = () => {
    if (!isLoggedIn) {
      navigate('/Login');
      return;
    }

    refetch();
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
