import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { FormField } from './FormField';
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledRequiredHint,
  StyledSection,
  StyledTextarea,
} from './Register.style';

interface RegisterFormInput {
  title: string;
  subtitle: string;
}

export const Register = () => {
  const methods = useForm<RegisterFormInput>({
    mode: 'onChange',

    defaultValues: {
      title: '',
      subtitle: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => console.log(data);

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
              <FormField.Control>
                <StyledInput />
              </FormField.Control>
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
              <FormField.Control>
                <StyledInput />
              </FormField.Control>
            </FormField>
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
              <FormField.Control>
                <StyledTextarea />
              </FormField.Control>
            </FormField>
          </StyledSection>
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
