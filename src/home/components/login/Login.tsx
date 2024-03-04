import { BoxButton } from '@yourssu/design-system-react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import soomsil from '@/assets/soomsil.svg';
import { postAuthSignIn } from '@/home/apis/postAuthSignIn';
import api from '@/service/TokenService';

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
  const navigate = useNavigate();
  const emailQuery = useWatch({
    name: 'email',
    control,
  });
  const passwordQuery = useWatch({
    name: 'password',
    control,
  });
  console.log(emailQuery, passwordQuery);

  const handleLoginClick = async () => {
    console.log('login click');
    const loginParams = {
      email: emailQuery + '@soongsil.ac.kr',
      password: passwordQuery,
    };
    console.log('loginParmas', loginParams);
    const res = await postAuthSignIn(loginParams);
    console.log('res', res);
    if (res) {
      api.setAccessToken(res.accessToken);
      api.setRefreshToken(res.refreshToken);
      sessionStorage.setItem('accessExpiredIn', res.accessTokenExpiredIn.toString());
      navigate('/');
    }
  };

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
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  value={emailQuery}
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
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  value={passwordQuery}
                />
              </StyledInputRowContainer>
            )}
          />
        </StyledInputContainer>

        <BoxButton size="large" variant="filled" rounding={8}>
          <div onClick={handleLoginClick}>로그인</div>
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
