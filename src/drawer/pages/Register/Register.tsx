import { useEffect, useState } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Loading } from '@/components/Loading/Loading';
import { CategoryWithoutAll } from '@/drawer/components/CategoryWithoutAll/CategoryWithoutAll';
import { Input } from '@/drawer/components/Input/Input';
import { OverviewImage } from '@/drawer/components/OverviewImage/OverviewImage';
import { TextArea } from '@/drawer/components/TextArea/TextArea';
import { ThumbnailInput } from '@/drawer/components/ThumbnailInput/ThumbnailInput';
import { WarningBox } from '@/drawer/components/WarningBox/WarningBox';
import { LINK, REGISTER_URL } from '@/drawer/constants/link.constant';
import { MOBILE_VIEW_WIDTH } from '@/drawer/constants/mobileview.constant';
import { registerFormDefaultValue } from '@/drawer/constants/registerFormDefaultValue.constant';
import { usePostProduct } from '@/drawer/hooks/usePostProduct';
import { RegisterFormValues } from '@/drawer/types/form.type';
import { api } from '@/service/TokenService';

import {
  StyledContainer,
  StyledImportText,
  StyledInputContainer,
  StyledRightContainer,
} from './Register.style';

declare global {
  interface Window {
    Android: {
      getAccessToken: () => void;
      onRegisterSuccess: () => void;
    };
    webkit: {
      messageHandlers: {
        ios: {
          postMessage: (message: string) => void;
        };
      };
    };
    setAccessToken: (token: string) => void;
  }
}

export const Register = () => {
  const methods = useForm<RegisterFormValues>({ defaultValues: registerFormDefaultValue });
  const navigate = useNavigate();

  const [linkExist, setLinkExist] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const validateLink = (name: string, value: string) => {
    return !value.startsWith(REGISTER_URL[name as keyof typeof REGISTER_URL]);
  };

  const registerProductMutation = usePostProduct();

  const handleSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    if (isChecked) {
      registerProductMutation.mutate(data, {
        onSuccess: () => {
          if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ios) {
            window.webkit.messageHandlers.ios.postMessage('onRegisterSuccess');
          } else if (window.Android && window.Android.onRegisterSuccess) {
            window.Android.onRegisterSuccess();
          }

          navigate('/drawer/myDrawers');
        },
      });
    }
  };

  useEffect(() => {
    const getAccessTokenFromNative = () => {
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ios) {
        window.webkit.messageHandlers.ios.postMessage('getAccessToken');
      } else if (window.Android && window.Android.getAccessToken) {
        window.Android.getAccessToken();
      }
    };

    window.setAccessToken = (accessToken: string) => {
      api.setAccessToken(accessToken, Date.now() + 60 * 60 * 1000);
    };

    getAccessTokenFromNative();
  }, []);

  useEffect(() => {
    if (methods.formState.errors) {
      const { appStoreUrl, githubUrl, googlePlayUrl, webpageUrl } = methods.formState.errors;

      if (appStoreUrl && githubUrl && googlePlayUrl && webpageUrl) {
        setLinkExist(false);
      }
    }
  }, [methods.formState]);

  return (
    <FormProvider {...methods}>
      <StyledContainer>
        {registerProductMutation.isPending && <Loading />}
        <form onSubmit={methods.handleSubmit(handleSubmit)} id={'registerForm'}>
          <StyledInputContainer>
            <StyledRightContainer>
              <StyledImportText $isWarned={false}>별표 표시 * 는 필수 입력란</StyledImportText>
            </StyledRightContainer>

            <Input
              maxLength={20}
              title={'서비스 이름'}
              description={'(최대 20자)'}
              required={true}
              name={'title'}
            />

            <Input
              maxLength={20}
              title={'간단한 설명'}
              description={'(최대 20자)'}
              required={true}
              name={'subtitle'}
            />
          </StyledInputContainer>

          <TextArea
            maxLength={5000}
            title={'내용'}
            description={'(최대 5000자)'}
            required={true}
            name={'content'}
          />

          <CategoryWithoutAll />

          <StyledInputContainer>
            <StyledRightContainer>
              <StyledImportText $isWarned={!linkExist}>
                {window.innerWidth < MOBILE_VIEW_WIDTH
                  ? '웹 페이지, Google play, App store, Github\n링크 중 하나는 필수 기재 *'
                  : '웹 페이지, Google play, App store, Github 링크 중 하나는 필수 기재 *'}
              </StyledImportText>
            </StyledRightContainer>

            {LINK.map((link) => (
              <Input
                key={link.name}
                maxLength={100}
                title={link.title}
                description={'(최대 100자)'}
                validate={(value) => validateLink(link.name, value)}
                name={link.name}
              />
            ))}
          </StyledInputContainer>

          <ThumbnailInput name={'thumbnailImage'} />

          <OverviewImage />

          <WarningBox
            isSelected={isChecked}
            handleSelected={() => {
              setIsChecked((prev) => !prev);
            }}
          />

          <StyledRightContainer>
            <BoxButton
              size={'medium'}
              variant={'filled'}
              rounding={4}
              width="8.125rem"
              disabled={registerProductMutation.isPending}
            >
              {registerProductMutation.isPending ? '등록 중...' : '서비스 등록'}
            </BoxButton>
          </StyledRightContainer>
        </form>
      </StyledContainer>
    </FormProvider>
  );
};
