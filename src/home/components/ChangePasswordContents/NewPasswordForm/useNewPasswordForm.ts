import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { postChangePassword } from '@/home/apis/postChangePassword';
import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { SessionTokenType } from '@/home/types/GetPassword.type';

export const useNewPasswordForm = (sessionToken: SessionTokenType) => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const [isNewPasswordCheckError, setIsNewPasswordCheckError] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = useRecoilValue(LogInState);
  const currentUser = useRecoilValue(UserState);

  const regexp = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$');

  const handleNewPasswordChange = (password: string) => {
    setNewPassword(password);
    if (password.length >= 8) {
      setIsFirstRender(false);
      setIsNewPasswordError(!regexp.test(password));
    } else {
      setIsNewPasswordError(true);
    }
  };

  const handleSubmit = async () => {
    if (!isLoggedIn || !currentUser) {
      navigate('/Login');
      return;
    }
    if (sessionToken === null) navigate('/Login');

    setValidationAttempted(true);
    const isValid = regexp.test(newPassword);
    if (isValid && newPassword === newPasswordCheck) setIsNewPasswordCheckError(false);

    if (!isValid) setIsNewPasswordError(true);
    if (newPassword !== newPasswordCheck) {
      const { error } = await postChangePassword({
        email: currentUser.email,
        sessionToken,
        newPassword,
      });
      if (error) {
        navigate('/Login');
        return;
      }
      navigate('/');
    }
  };

  useEffect(() => {
    if (newPassword.length < 8) {
      setIsNewPasswordCheckError(false);
      setNewPasswordCheck('');
      setValidationAttempted(false);
    }
  }, [newPassword]);

  return {
    newPassword,
    newPasswordCheck,
    isNewPasswordError,
    isNewPasswordCheckError,
    isFirstRender,
    validationAttempted,
    setNewPasswordCheck,
    handleNewPasswordChange,
    handleSubmit,
  };
};
