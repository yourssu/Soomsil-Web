import { useState } from 'react';

import { BoxButton, IcPlusLine } from '@yourssu/design-system-react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { useTheme } from 'styled-components';

import { Category } from '@/drawer/components/Category/Category.type';
import { WarningBox } from '@/drawer/components/WarningBox/WarningBox';
import { LINK, LINK_NAMES, REGISTER_URL } from '@/drawer/constants/link.constant';
import { CategoryState } from '@/drawer/recoil/CategoryState';

import { FormField } from './FormField';
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledRequiredHint,
  StyledRequiredLinkHint,
  StyledSection,
  StyledTextarea,
} from './Register.style';
import { RegisterCategory } from './RegisterCategory';

interface RegisterFormInput {
  title: string;
  subtitle: string;
  content: string;
  category: Category;
  webpageUrl: string;
  googlePlayUrl: string;
  appStoreUrl: string;
  githubUrl: string;
  thumbnailImage: File[];
  introductionImages: File[];
}

export const Register = () => {
  const theme = useTheme();
  const category = useRecoilValue(CategoryState);
  const [isChecked, setIsChecked] = useState(false);

  const methods = useForm<RegisterFormInput>({
    mode: 'onChange',

    defaultValues: {
      title: '',
      subtitle: '',
      content: '',
      category: category as Category,
      webpageUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      githubUrl: '',
      thumbnailImage: [],
      introductionImages: [],
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <StyledRequiredHint>별표 표시 * 는 필수 입력란</StyledRequiredHint>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          <StyledSection>
            <FormField
              name="title"
              registerOption={{
                required: '서비스 이름은 필수값입니다.',
                maxLength: {
                  value: 20,
                  message: '최대 20자까지 입력 가능합니다.',
                },
              }}
            >
              <FormField.Label hint="최대 20자">서비스 이름</FormField.Label>
              <FormField.TextControl>
                <StyledInput type="text" />
              </FormField.TextControl>
            </FormField>
            <FormField
              name="subtitle"
              registerOption={{
                required: '간단한 설명은 필수값입니다.',
                maxLength: {
                  value: 20,
                  message: '최대 20자까지 입력 가능합니다.',
                },
              }}
            >
              <FormField.Label hint="최대 20자">간단한 설명</FormField.Label>
              <FormField.TextControl>
                <StyledInput type="text" />
              </FormField.TextControl>
            </FormField>
          </StyledSection>
          <FormField
            name="content"
            registerOption={{
              required: '내용은 필수값입니다.',
              maxLength: {
                value: 5000,
                message: '최대 5000자까지 입력 가능합니다.',
              },
            }}
          >
            <FormField.Label hint="최대 5000자">내용</FormField.Label>
            <FormField.TextControl>
              <StyledTextarea />
            </FormField.TextControl>
          </FormField>
          <FormField name="category">
            <FormField.Label hint="중복 선택 불가" required={true}>
              카테고리
            </FormField.Label>
            <RegisterCategory />
          </FormField>
          <StyledSection>
            <StyledRequiredLinkHint>
              웹 페이지, Google play, App store, GitHub 링크 중 하나는 필수 기재 *
            </StyledRequiredLinkHint>
            {LINK.map((link) => (
              <FormField
                key={link.name}
                name={link.name}
                registerOption={{
                  // 입력이 발생할 때마다 다른 링크 입력 폼도 함께 validation 수행
                  onChange: () => methods.trigger(LINK_NAMES),
                  maxLength: {
                    value: 100,
                    message: '최대 100자까지 입력 가능합니다.',
                  },
                  validate: {
                    startsWith: (v) => {
                      if (v.length === 0) return true;
                      return v.startsWith(REGISTER_URL[link.name]) || '유효하지 않은 링크입니다.';
                    },
                    atLeastOne: (_, formValues) => {
                      const isLinkExist = LINK_NAMES.some((name) => formValues[name].length > 0);
                      return isLinkExist || '링크를 하나 이상 입력해주세요.';
                    },
                  },
                }}
              >
                <FormField.Label hint="최대 100자">{link.title}</FormField.Label>
                <FormField.TextControl>
                  <StyledInput />
                </FormField.TextControl>
              </FormField>
            ))}
          </StyledSection>
          <FormField
            name="thumbnailImage"
            registerOption={{
              validate: {
                required: (files: File[]) => files.length > 0 || '썸네일 이미지는 필수값입니다.',
              },
            }}
          >
            <FormField.Label hint="권장 : 1024px X 1024px" justify="center" required={true}>
              썸네일 이미지
            </FormField.Label>
            <FormField.ThumbnailControl
              fallback={<IcPlusLine size="4.5rem" color={theme.color.buttonPoint} />}
            >
              <input type="file" accept=".jpg, .jpeg, .png, .gif" style={{ display: 'none' }} />
            </FormField.ThumbnailControl>
          </FormField>
          <FormField
            name="introductionImages"
            registerOption={{
              validate: {
                atLeastOne: (_, formValues) => {
                  const fileList: FileList[] = formValues['introductionImages'].filter(
                    (file: FileList | null) => file !== null
                  );

                  const isFileExist = fileList.some((file) => file.length > 0);
                  console.log('isFileExist', isFileExist);
                  return isFileExist || '소개 이미지를 하나 이상 첨부해주세요.';
                },
              },
            }}
          >
            <FormField.Label hint="권장 : 1920px X 1080px, 최대 5장" required={true}>
              소개 이미지
            </FormField.Label>
            <FormField.ImageUploadControl maxFiles={5}>
              <input type="file" accept=".jpg, .jpeg, .png, .gif" style={{ display: 'none' }} />
            </FormField.ImageUploadControl>
          </FormField>
          <WarningBox
            isSelected={isChecked}
            handleSelected={() => {
              setIsChecked((prev) => !prev);
            }}
          />
          <BoxButton
            size={'medium'}
            variant={'filled'}
            rounding={4}
            width="8.125rem"
            style={{
              alignSelf: 'flex-end',
            }}
          >
            서비스 등록
          </BoxButton>
        </StyledForm>
      </FormProvider>
    </StyledContainer>
  );
};
