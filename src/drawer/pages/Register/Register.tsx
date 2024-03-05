import { useState, useEffect } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { useForm, FormProvider } from 'react-hook-form';

import { CategoryWithoutAll } from '@/drawer/components/CategoryWithoutAll/CategoryWithoutAll';
import { Input } from '@/drawer/components/Input/Input';
import { OverviewImage } from '@/drawer/components/OverviewImage/OverviewImage';
import { TextArea } from '@/drawer/components/TextArea/TextArea';
import { ThumbnailInput } from '@/drawer/components/ThumbnailInput/ThumbnailInput';
import { WarningBox } from '@/drawer/components/WarningBox/WarningBox';
import { LINK, REGISTER_URL } from '@/drawer/constants/link.constant';
import { MOBILE_VIEW_WIDTH } from '@/drawer/constants/mobileview.constant';

import {
  StyledContainer,
  StyledImportText,
  StyledInputContainer,
  StyledRightContainer,
} from './Register.style';

export const Register = () => {
  const methods = useForm();

  const [linkExist, setLinkExist] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const validateLink = (name: string, value: string) => {
    return !value.startsWith(REGISTER_URL[name as keyof typeof REGISTER_URL]);
  };

  // ProductRegisterRequest 타입으로 수정 필요
  const handleSubmit = (data) => {
    if (isChecked) {
      console.log(data);
    }
  };

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
            <BoxButton size={'medium'} variant={'filled'} rounding={4} width="8.125rem">
              서비스 등록
            </BoxButton>
          </StyledRightContainer>
        </form>
      </StyledContainer>
    </FormProvider>
  );
};
