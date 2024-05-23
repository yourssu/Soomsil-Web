import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { postChangePassword } from '@/home/apis/postChangePassword';
import { LogInState } from '@/home/recoil/LogInState';
import { UserState } from '@/home/recoil/UserState';
import { SessionTokenType } from '@/home/types/GetPassword.type';
import { api } from '@/service/TokenService';

interface NewPasswordFormProps {
  sessionToken: SessionTokenType;
  previousPassword: string;
}

export const useNewPasswordForm = (props: NewPasswordFormProps) => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const [isNewPasswordCheckError, setIsNewPasswordCheckError] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const { sessionToken, previousPassword } = props;
  const isLoggedIn = useRecoilValue(LogInState);
  const currentUser = useRecoilValue(UserState);

  const regexp = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$');

  const handleNewPasswordChange = (password: string) => {
    setNewPassword(password);
    if (previousPassword === password) {
      setIsNewPasswordError(true);
      setErrorMessage('현재 비밀번호와 다른 비밀번호를 입력해주세요.');
      return;
    }
    setErrorMessage('');
    if (password.length >= 8) {
      setIsFirstRender(false);
      setIsNewPasswordError(!regexp.test(password));
      setErrorMessage('숫자와 영문자 조합으로 8자 이상 입력해주세요.');
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
    if (!isValid) setIsNewPasswordError(true);
    if (newPassword !== newPasswordCheck) setIsNewPasswordCheckError(true);

    if (isValid && newPassword === newPasswordCheck) {
      const { data, error } = await postChangePassword({
        email: currentUser.email,
        newPassword: newPassword,
        sessionToken: sessionToken,
      });
      if (error) {
        navigate('/Login');
        return;
      }
      if (data) {
        api.setAccessToken(data.accessToken, data.accessTokenExpiredIn);
        api.setRefreshToken(data.refreshToken, data.refreshTokenExpiredIn);
        navigate('/myPage');
      }
    }
    navigate('/Login');
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
    errorMessage,
    setNewPasswordCheck,
    handleNewPasswordChange,
    handleSubmit,
  };
};
