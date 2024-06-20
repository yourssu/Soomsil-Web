import { BoxButton, PasswordTextField } from '@yourssu/design-system-react';
import {
  StyledPasswordContainer,
  StyledSubTitleText,
  StyledTitleText,
} from './ResetPasswordInput.style';
import { useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storage.constant';
import { postChangePassword } from '@/home/apis/postChangePassword';
import { useFullEmail } from '@/hooks/useFullEmail';

interface ResetPasswordProps {
  email: string;
  onConfirm: () => void;
}

export const ResetPasswordInput = ({ email, onConfirm }: ResetPasswordProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordNegative, setIsConfirmPasswordNegative] = useState(false);
  const fullEmail = useFullEmail(email);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setIsConfirmPasswordNegative(false);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setIsConfirmPasswordNegative(false);
  };

  const handleConfirmClick = async () => {
    if (password !== confirmPassword) {
      setIsConfirmPasswordNegative(true);
      return;
    }

    const sessionToken = sessionStorage.getItem(STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN);
    const sessionTokenExpiresAt = sessionStorage.getItem(
      STORAGE_KEYS.EMAIL_AUTH_SESSION_TOKEN_EXPIRED_IN
    );

    if (!sessionToken || !sessionTokenExpiresAt) {
      setIsConfirmPasswordNegative(true);
      return;
    }

    try {
      await postChangePassword({
        email: fullEmail,
        sessionToken: { sessionToken, sessionTokenExpiresAt },
        newPassword: password,
      });
      onConfirm();
    } catch (error) {
      console.error('비밀번호 변경 오류:', error);
    }
  };

  return (
    <>
      <StyledTitleText>비밀번호 재설정</StyledTitleText>
      <StyledSubTitleText>새로운 비밀번호를 입력해주세요.</StyledSubTitleText>
      <StyledPasswordContainer>
        <PasswordTextField
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          helperLabel={'숫자, 영문자, 특수문자 조합으로 8자 이상 입력해주세요'}
        />
      </StyledPasswordContainer>
      <StyledSubTitleText>비밀번호를 한번 더 입력해주세요.</StyledSubTitleText>
      <StyledPasswordContainer>
        <PasswordTextField
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          isNegative={isConfirmPasswordNegative}
          helperLabel={isConfirmPasswordNegative ? '비밀번호가 일치하지 않습니다.' : ''}
        />
      </StyledPasswordContainer>
      <BoxButton
        style={{ width: '100%' }}
        size="large"
        variant="filled"
        rounding={8}
        onClick={handleConfirmClick}
        disabled={password === '' || confirmPassword === ''}
      >
        비밀번호 재설정 완료
      </BoxButton>
    </>
  );
};
