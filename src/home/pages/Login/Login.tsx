import { useState } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import soomsil from '@/assets/soomsil.svg';
import { postAuthSignIn } from '@/home/apis/postAuthSignIn';
import { api } from '@/service/TokenService';

import {
  StyledBottomContainer,
  StyledButtonDivider,
  StyledFailedInput,
  StyledErrorMessageContainer,
  StyledFailedLeftInput,
  StyledFailedRightInputSuffix,
  StyledLoginButtonContainer,
  StyledButtonLabel,
  StyledContainer,
  StyledInput,
  StyledInputContainer,
  StyledInputRowContainer,
  StyledInputSuffix,
  StyledLabel,
  StyledLoginContainer,
  StyledTitle,
} from './Login.style';

export const Login = () => {
  const { register, control } = useForm();
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();
  const emailQuery = useWatch({
    name: 'email',
    control,
  });
  const passwordQuery = useWatch({
    name: 'password',
    control,
  });

  const handleLoginClick = async () => {
    const loginParams = {
      email: emailQuery + '@soongsil.ac.kr',
      password: passwordQuery,
    };

    const { data, error } = await postAuthSignIn(loginParams);

    if (data) {
      api.setAccessToken(data.accessToken);
      api.setRefreshToken(data.refreshToken);
      sessionStorage.setItem('accessExpiredIn', data.accessTokenExpiredIn.toString());
      navigate('/');
    } else if (error) {
      if (error.response?.status == 401) {
        setFailedLogin(true);
      }
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
              <div>
                {failedLogin ? (
                  <StyledInputRowContainer>
                    <StyledFailedLeftInput
                      placeholder="ppushoong"
                      {...register('email')}
                      type="text"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                      value={emailQuery}
                    />
                    <StyledFailedRightInputSuffix>@soongsil.ac.kr</StyledFailedRightInputSuffix>
                  </StyledInputRowContainer>
                ) : (
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
              </div>
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
                {failedLogin ? (
                  <StyledFailedInput
                    placeholder="영문숫자포함10글자"
                    {...register('password')}
                    type="password"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                    value={passwordQuery}
                  />
                ) : (
                  <StyledInput
                    placeholder="영문숫자포함10글자"
                    {...register('password')}
                    type="password"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                    value={passwordQuery}
                  />
                )}
              </StyledInputRowContainer>
            )}
          />
        </StyledInputContainer>
        {failedLogin && (
          <StyledErrorMessageContainer>
            <div>학교 메일 또는 비밀번호를 잘못 입력했습니다.</div>
            <div>입력하신 내용을 다시 확인해주세요.</div>
          </StyledErrorMessageContainer>
        )}

        <StyledLoginButtonContainer>
          <BoxButton size="large" variant="filled" rounding={8} onClick={handleLoginClick}>
            로그인
          </BoxButton>
        </StyledLoginButtonContainer>

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
