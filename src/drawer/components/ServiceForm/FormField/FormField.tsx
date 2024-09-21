import React, { createContext, ReactElement, ReactNode, useContext, useState } from 'react';

import { IcXLine } from '@yourssu/design-system-react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { ALLOWED_IMAGE_TYPE } from '@/drawer/constants/image.constant';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
  StyledErrorMessage,
  StyledFieldContainer,
  StyledImageDeleteButton,
  StyledImageFileName,
  StyledImageUploadButton,
  StyledImageUploadControlContainer,
  StyledImageUploadItemContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledLabelHint,
  StyledTextControlContainer,
  StyledTextControlMessage,
  StyledThumbnailControlContainer,
  StyledThumbnailPreview,
  StyledThumbnailPreviewContainer,
} from './FormField.style';

interface FormFieldProps {
  children: ReactNode;
  name: string;
  registerOption?: RegisterOptions;
  direction?: 'row' | 'column';
}

interface FieldLabelProps {
  children: ReactNode;
  hint: string;
  justify?: 'flex-start' | 'center';
  required?: boolean;
}

interface FieldTextControlProps {
  children: ReactElement;
}

interface FieldThumbnailControlProps {
  children: ReactElement;
  fallback: ReactNode;
}

interface FieldImageUploadControlProps {
  children: ReactElement;
  maxFiles: number;
}

const FormFieldContext = createContext<Omit<FormFieldProps, 'children'>>({
  name: '',
  registerOption: {},
});

export const FormField = ({
  children,
  name,
  registerOption,
  direction = 'row',
}: FormFieldProps) => {
  return (
    <FormFieldContext.Provider value={{ name, registerOption }}>
      <StyledFieldContainer $direction={direction}>{children}</StyledFieldContainer>
    </FormFieldContext.Provider>
  );
};

const FieldLabel = ({
  children,
  hint,
  justify = 'flex-start',
  required = false,
}: FieldLabelProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { name, registerOption } = useContext(FormFieldContext);

  return (
    <StyledLabelContainer $justify={justify}>
      <StyledLabel htmlFor={name} $isWarned={!!errors[name]}>
        {children}
        {(required || registerOption?.required) && ' *'}
      </StyledLabel>
      <StyledLabelHint $isWarned={!!errors[name]}>({hint})</StyledLabelHint>
    </StyledLabelContainer>
  );
};

const FieldTextControl = ({ children }: FieldTextControlProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const { name, registerOption } = useContext(FormFieldContext);

  const watchField = watch(name, '');

  const getControlMessage = () => {
    const errorMessage = errors[name]?.message;
    if (errorMessage) {
      return String(errorMessage);
    }

    if (
      registerOption &&
      typeof registerOption.maxLength === 'object' &&
      registerOption.maxLength.value
    ) {
      return `${watchField.length}/${registerOption.maxLength.value}`;
    }

    return '';
  };

  return (
    <StyledTextControlContainer>
      {React.cloneElement(children, {
        $isWarned: !!errors[name],
        $hasText: watchField.length > 0,
        id: name,
        ...register(name, registerOption),
      })}
      <StyledTextControlMessage $isWarned={!!errors[name]}>
        {getControlMessage()}
      </StyledTextControlMessage>
    </StyledTextControlContainer>
  );
};

const FieldThumbnailControl = ({ children, fallback }: FieldThumbnailControlProps) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { name, registerOption } = useContext(FormFieldContext);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && ALLOWED_IMAGE_TYPE.includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setValue(name, file);
      };
      reader.readAsDataURL(file);
    } else {
      alert('이미지 포맷은 jpg, jpeg, png, gif 중 하나여야 합니다.');
      setValue(name, null);
    }
  };

  const getErrorMessage = () => {
    const error = errors[name];
    if (error) {
      return String(error?.message ?? '');
    }
  };

  return (
    <StyledThumbnailControlContainer>
      {React.cloneElement(children, {
        id: name,
        ...register(name, {
          onChange: handleChangeImage,
          ...registerOption,
        }),
      })}
      <StyledThumbnailPreviewContainer htmlFor={name}>
        {previewUrl ? <StyledThumbnailPreview src={previewUrl} alt="preview" /> : fallback}
      </StyledThumbnailPreviewContainer>
      <StyledErrorMessage>{getErrorMessage()}</StyledErrorMessage>
    </StyledThumbnailControlContainer>
  );
};

const FieldImageUploadControl = ({ children, maxFiles }: FieldImageUploadControlProps) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery('(max-width: 30rem)');

  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    trigger,
  } = useFormContext();
  const { name, registerOption } = useContext(FormFieldContext);
  const [fileNames, setFileNames] = useState<string[]>(Array.from({ length: maxFiles }, () => ''));

  const handleChangeFile = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && ALLOWED_IMAGE_TYPE.includes(file.type)) {
      const newFileNames = [...fileNames];
      newFileNames[index] = file.name;
      setFileNames(newFileNames);
      setValue(`${name}.${index}`, file);
    } else {
      alert('이미지 포맷은 jpg, jpeg, png, gif 중 하나여야 합니다.');
      setValue(`${name}.${index}`, null);
    }

    // 입력이 발생할 때마다 다른 파일 입력 폼도 함께 validation 수행
    trigger(name);
  };

  const handleClickDeleteButton = (index: number) => () => {
    const newFileNames = [...fileNames];
    newFileNames[index] = '';
    setFileNames(newFileNames);

    setValue(`${name}.${index}`, null);

    // 입력이 발생할 때마다 다른 파일 입력 폼도 함께 validation 수행
    trigger(name);
  };

  const getErrorMessage = () => {
    const error = errors[name];
    if (Array.isArray(error)) {
      return String(error[0]?.message ?? '');
    }
  };

  return (
    <StyledImageUploadControlContainer>
      {Array.from({ length: maxFiles }).map((_, index) => (
        <StyledImageUploadItemContainer key={`container-${index}`}>
          {React.cloneElement(children, {
            id: `${name}-${index}`,
            ...register(`${name}.${index}`, {
              onChange: handleChangeFile(index),
              ...registerOption,
            }),
          })}
          <StyledImageUploadButton
            type="button"
            onClick={() => {
              document.getElementById(`${name}-${index}`)?.click();
            }}
          >
            파일 첨부
          </StyledImageUploadButton>
          <StyledImageFileName>{fileNames[index]}</StyledImageFileName>
          {getValues(`${name}.${index}`) && (
            <StyledImageDeleteButton type="button" onClick={handleClickDeleteButton(index)}>
              <IcXLine
                size={isMobileView ? '0.8rem' : '1.25rem'}
                color={theme.color.buttonNormal}
              />
            </StyledImageDeleteButton>
          )}
        </StyledImageUploadItemContainer>
      ))}
      <StyledErrorMessage>{getErrorMessage()}</StyledErrorMessage>
    </StyledImageUploadControlContainer>
  );
};

FormField.Label = FieldLabel;
FormField.TextControl = FieldTextControl;
FormField.ThumbnailControl = FieldThumbnailControl;
FormField.ImageUploadControl = FieldImageUploadControl;
