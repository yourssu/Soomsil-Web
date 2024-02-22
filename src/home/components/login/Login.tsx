import { BoxButton } from '@yourssu/design-system-react';
import { Controller, useForm, useWatch } from 'react-hook-form';

import soomsil from '@/assets/soomsil.svg';

import {
  StyledLoginContainer,
  StyledContainer,
  StyledTitle,
  StyledLabel,
  StyledButtonLabel,
  StyledInput,
  StyledInputContainer,
  StyledInputSuffix,
  StyledInputRowContainer,
  StyledBottomContainer,
  StyledButtonDivider,
} from './Login.style';
export const Login = () => {
  const { register, control } = useForm();
  const watchEmailQuery = useWatch({
    name: 'email',
    control,
  });
  const watchPasswordQuery = useWatch({
    name: 'password',
    control,
  });

  return (
    <StyledContainer>
      <img src={soomsil} alt={'soomsil-logo'} width={180} height={38} />
      <StyledLoginContainer>
        <StyledTitle>로그인</StyledTitle>
        <StyledInputContainer>
          <StyledLabel>학교 메일</StyledLabel>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <StyledInputRowContainer>
                <StyledInput
                  placeholder="ppushoong"
                  {...register('email')}
                  type="text"
                  value={watchEmailQuery}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
                <StyledInputSuffix>@soongsil.ac.kr</StyledInputSuffix>
              </StyledInputRowContainer>
            )}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>비밀번호</StyledLabel>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <StyledInputRowContainer>
                <StyledInput
                  placeholder="영문숫자포함10글자"
                  {...register('password')}
                  type="password"
                  value={watchPasswordQuery}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
                <StyledInputSuffix>@soongsil.ac.kr</StyledInputSuffix>
              </StyledInputRowContainer>
            )}
          />
        </StyledInputContainer>
        <BoxButton size="large" variant="filled" rounding={8}>
          로그인
        </BoxButton>
        <StyledBottomContainer>
          <StyledButtonLabel to="/mail">학교 메일 찾기</StyledButtonLabel>
          <StyledButtonDivider>|</StyledButtonDivider>
          <StyledButtonLabel to="password">비밀번호 찾기</StyledButtonLabel>
          <StyledButtonDivider>|</StyledButtonDivider>
          <StyledButtonLabel to="signup">회원가입</StyledButtonLabel>
        </StyledBottomContainer>
      </StyledLoginContainer>
    </StyledContainer>
  );
};
