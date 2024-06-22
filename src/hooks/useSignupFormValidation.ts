import { useMemo, useRef } from 'react';

import { hasNumberAndEnglishWithSymbols, hasNumberOrEnglishOrHangulOrSpace } from '@yourssu/utils';

import { SignupFormStates } from '@/home/components/SignupContents/SignupForm/SignUpForm.type';

export const useSignupFormValidation = ({ nickname, password }: SignupFormStates) => {
  const nicknameValidOnce = useRef(false);
  const passwordValidOnce = useRef(false);

  const isNicknameValid = useMemo(() => {
    return (
      nickname.length >= 2 && nickname.length <= 12 && hasNumberOrEnglishOrHangulOrSpace(nickname)
    );
  }, [nickname]);

  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 && password.length <= 100 && hasNumberAndEnglishWithSymbols(password)
    );
  }, [password]);

  return {
    nicknameValidOnce,
    passwordValidOnce,
    isFormValid: isNicknameValid && isPasswordValid,
    isNicknameValid,
    isPasswordValid,
  };
};
