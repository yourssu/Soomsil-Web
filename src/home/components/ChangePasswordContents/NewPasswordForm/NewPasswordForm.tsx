import { useEffect, useState, useRef } from 'react';

import { BoxButton } from '@yourssu/design-system-react';

import Logo from '@/assets/soomsil_v2_logo.svg';
import { PasswordInput } from '@/home/components/ChangePasswordContents/PasswordInput/PasswordInput';

import {
  StyledContainer,
  StyledInputContainer,
  StyledLogo,
  StyledBoxContainer,
  StyledTitle,
  StyledInputTitle,
  StyledButtonContainer,
  StyledInputContainerAnimation,
} from './NewPasswordForm.style';

export const NewPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const [isNewPasswordCheckError, setIsNewPasswordCheckError] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [validationAttempted, setValidationAttempted] = useState(false);

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
    setValidationAttempted(true);
    const isValid = regexp.test(newPassword);
    if (isValid && newPassword === newPasswordCheck) {
      alert('비밀번호가 변경됐습니다.');
    } else {
      if (!isValid) setIsNewPasswordError(true);
      if (newPassword !== newPasswordCheck) setIsNewPasswordCheckError(true);
    }
  };

  useEffect(() => {
    if (newPassword.length < 8) {
      setIsNewPasswordCheckError(false);
      setNewPasswordCheck('');
      setValidationAttempted(false);
    }
  }, [newPassword]);

  return (
    <StyledContainer>
      <StyledLogo src={Logo} alt="Soomsil" />
      <StyledBoxContainer>
        <StyledTitle>비밀번호 변경</StyledTitle>
        <StyledInputContainer>
          <StyledInputTitle>새로운 비밀번호를 입력해주세요.</StyledInputTitle>
          <PasswordInput
            placeholder="숫자와 영문자 조합으로 8자 이상 입력해주세요."
            value={newPassword}
            onChangeHandler={handleNewPasswordChange}
            isError={!isFirstRender && isNewPasswordError}
            errorMessage="숫자와 영문자 조합으로 8자 이상 입력해주세요."
          />
        </StyledInputContainer>
        <StyledInputContainerAnimation className={!isNewPasswordError ? 'active' : ''}>
          <StyledInputTitle>비밀번호를 한번 더 입력해주세요.</StyledInputTitle>
          <PasswordInput
            value={newPasswordCheck}
            onChangeHandler={setNewPasswordCheck}
            isError={isNewPasswordCheckError && validationAttempted}
            errorMessage="비밀번호가 일치하지 않습니다."
          />
        </StyledInputContainerAnimation>
        <StyledButtonContainer>
          <BoxButton rounding={8} size="large" variant="filled" onClick={handleSubmit}>
            변경하기
          </BoxButton>
        </StyledButtonContainer>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

export default NewPasswordForm;
