import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { SessionTokenType } from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

export const useNewPasswordForm = (sessionToken: SessionTokenType) => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const [isNewPasswordCheckError, setIsNewPasswordCheckError] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    if (sessionToken === null) {
      return;
    }

    setValidationAttempted(true);
    const isValid = regexp.test(newPassword);
    if (isValid && newPassword === newPasswordCheck) {
      const accessToken = api.getAccessToken();
      if (!accessToken) {
        navigate('/Login');
        return;
      }
      setIsNewPasswordCheckError(false);
    }

    if (!isValid) setIsNewPasswordError(true);
    if (newPassword !== newPasswordCheck) setIsNewPasswordCheckError(true);
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
