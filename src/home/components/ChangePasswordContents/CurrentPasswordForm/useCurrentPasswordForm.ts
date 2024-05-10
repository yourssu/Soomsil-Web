import { useState } from 'react';

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
  const [currentPassword, setCurrentPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const isLoggedIn = useRecoilValue(LogInState);
  const navigate = useNavigate();

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
