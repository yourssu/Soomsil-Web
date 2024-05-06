import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { getUserPasswordMatch } from '@/home/apis/getUserPasswordMatch';
import { SessionTokenType } from '@/home/types/GetPassword.type';
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';

interface CurrentPasswordFormProps {
  onConfirm: () => void;
  setSessionToken: ({ sessionToken }: SessionTokenType) => void;
}

export const useCurrentPasswordForm = ({
  onConfirm,
  setSessionToken,
}: CurrentPasswordFormProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();

  const checkCurrentPassword = async () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/Login');
      return;
    }

    const passwordMatchData = await getUserPasswordMatch({
      password: currentPassword,
    });

    if (!passwordMatchData) {
      navigate('/Login');
      return;
    }

    if (!passwordMatchData.match) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setSessionToken(passwordMatchData.sessionToken as SessionTokenType);
    onConfirm();
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
