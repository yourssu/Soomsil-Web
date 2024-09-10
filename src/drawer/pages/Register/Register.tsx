import { IcPlusLine } from '@yourssu/design-system-react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { Category } from '@/drawer/components/Category/Category.type';
import { LINK, REGISTER_URL } from '@/drawer/constants/link.constant';

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
}

// const registerFormDefaultValues: RegisterFormInput = {
//   title: '',
//   subtitle: '',
//   content: '',
//   category: '',
// };

export const Register = () => {
  const theme = useTheme();
  const methods = useForm<RegisterFormInput>({
    mode: 'onChange',

    defaultValues: {
      title: '',
      subtitle: '',
      content: '',
      category: '',
      webpageUrl: '',
      googlePlayUrl: '',
      appStoreUrl: '',
      githubUrl: '',
      thumbnailImage: [],
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
          <FormField
            name="category"
            registerOption={{
              required: true,
            }}
          >
            <FormField.Label hint="중복 선택 불가">카테고리</FormField.Label>
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
                  maxLength: {
                    value: 100,
                    message: '최대 100자까지 입력 가능합니다.',
                  },
                  validate: {
                    startsWith: (v) => {
                      if (v.length === 0) return true;
                      return v.startsWith(REGISTER_URL[link.name]) || '유효하지 않은 링크입니다.';
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
                required: (value) => {
                  if (value.length === 0) return '썸네일 이미지는 필수값입니다.';
                  return true;
                },
              },
            }}
          >
            <FormField.Label hint="권장 : 1024px X 1024px" justify="center">
              썸네일 이미지
            </FormField.Label>
            <FormField.ThumbnailControl
              fallback={<IcPlusLine size="4.5rem" color={theme.color.buttonPoint} />}
            >
              <input type="file" accept=".jpg, .jpeg, .png, .gif" style={{ display: 'none' }} />
            </FormField.ThumbnailControl>
          </FormField>
          <button
            type="submit"
            style={{
              width: '100%',
              height: '3rem',
              color: 'black',
            }}
          >
            서비스 등록
          </button>
        </StyledForm>
      </FormProvider>
    </StyledContainer>
  );
};
