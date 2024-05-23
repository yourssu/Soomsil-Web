import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { getUserPasswordMatch } from '@/home/apis/getUserPasswordMatch';
import { LogInState } from '@/home/recoil/LogInState';
import { SessionTokenType } from '@/home/types/GetPassword.type';

interface CurrentPasswordFormProps {
  onConfirm: () => void;
  setSessionToken: ({ sessionToken }: SessionTokenType) => void;
  setPreviousPassword: (password: string) => void;
}

export const useCurrentPasswordForm = ({
  onConfirm,
  setSessionToken,
  setPreviousPassword,
}: CurrentPasswordFormProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const isLoggedIn = useRecoilValue(LogInState);
  const navigate = useNavigate();

  const checkCurrentPassword = async () => {
    if (!isLoggedIn) {
      navigate('/Login');
      return;
    }

    const { error, data } = await getUserPasswordMatch({
      password: currentPassword,
    });

    if (data) {
      setIsError(false);
      setSessionToken(data as SessionTokenType);
      setPreviousPassword(currentPassword);
      onConfirm();
    } else if (error) setIsError(true);
  };

  const handlePasswordChange = (password: string) => {
    if (isError) setIsError(false);
    setCurrentPassword(password);
  };

  return {
    currentPassword,
    isError,
    handlePasswordChange,
    checkCurrentPassword,
  };
};
