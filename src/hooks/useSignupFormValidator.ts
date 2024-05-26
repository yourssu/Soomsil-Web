import { useMemo, useRef } from 'react';

export const useSignupFormValidation = (nickname: string, password: string) => {
  const nicknameValidOnce = useRef(false);
  const passwordValidOnce = useRef(false);

  const hasOnlyNumberAndEnglish = (value: string) => /^[a-zA-Z0-9]*$/.test(value);
  const hasOnlyNumberEnglishAndHangul = (value: string) =>
    /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]*$/.test(value);

  const isNicknameValid = useMemo(() => {
    return nickname.length >= 2 && nickname.length <= 12 && hasOnlyNumberEnglishAndHangul(nickname);
  }, [nickname]);

  const isPasswordValid = useMemo(() => {
    return password.length >= 8 && hasOnlyNumberAndEnglish(password);
  }, [password]);

  return {
    nicknameValidOnce,
    passwordValidOnce,
    isFormValid: isNicknameValid && isPasswordValid,
    isNicknameValid,
    isPasswordValid,
  };
};
