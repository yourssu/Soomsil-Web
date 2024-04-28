import { useEffect, useState } from 'react';

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
  const [validationAttempted, setValidationAttempted] = useState(false);

  const handleNewPasswordChange = (password: string) => {
    setNewPassword(password);
    // 최소 8자 이상, 반드시 영문자와 숫자 포함
    const regexp = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$');
    setIsNewPasswordError(!regexp.test(password));
  };

  const handleSubmit = () => {
    setValidationAttempted(true);
    const regexp = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$');
    const isValid = regexp.test(newPassword);
    if (isValid && newPassword === newPasswordCheck) {
      alert('비밀번호 변경에 성공했습니다.');
    } else {
      setIsNewPasswordError(true);
      if (!isValid) {
        alert('비밀번호는 최소 8자 이상이어야 하며, 영문자와 숫자를 반드시 포함해야 합니다.');
      }
      if (newPassword !== newPasswordCheck) {
        alert('입력한 비밀번호가 일치하지 않습니다.');
      }
    }
  };

  useEffect(() => {
    setIsNewPasswordError(false);
  }, [newPassword]);

  return (
    <StyledContainer>
      <StyledLogo src={Logo} alt="Soomsil" />
      <StyledBoxContainer>
        <StyledTitle>비밀번호 변경</StyledTitle>
        <StyledInputContainer>
          <StyledInputTitle>새로운 비밀번호를 입력해주세요.</StyledInputTitle>
          <PasswordInput
            value={newPassword}
            onChangeHandler={handleNewPasswordChange}
            isError={isNewPasswordError && validationAttempted}
            errorMessage="숫자와 영문자 조합으로 8자 이상 입력해주세요."
          />
        </StyledInputContainer>
        <StyledInputContainerAnimation
          className={!isNewPasswordError && newPassword.length >= 8 ? 'active' : ''}
        >
          <StyledInputTitle>비밀번호를 한번 더 입력해주세요.</StyledInputTitle>
          <PasswordInput
            value={newPasswordCheck}
            onChangeHandler={setNewPasswordCheck}
            isError={newPassword !== newPasswordCheck && validationAttempted}
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
