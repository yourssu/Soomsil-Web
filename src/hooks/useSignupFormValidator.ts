import { useCallback } from 'react';

export const useSignupFormValidation = (nickname: string, password: string) => {
  const hasOnlyNumberAndEnglish = (value: string) => /^[a-zA-Z0-9]*$/.test(value);
  const hasOnlyNumberEnglishAndHangul = (value: string) =>
    /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]*$/.test(value);

  const nicknameValidator = useCallback((value: string) => {
    return value.length >= 2 && value.length <= 12 && hasOnlyNumberEnglishAndHangul(value);
  }, []);

  const passwordValidator = useCallback((value: string) => {
    return value.length >= 8 && hasOnlyNumberAndEnglish(value);
  }, []);

  return {
    isFormValid: nicknameValidator(nickname) && passwordValidator(password),
    nicknameValidator,
    passwordValidator,
  };
};
