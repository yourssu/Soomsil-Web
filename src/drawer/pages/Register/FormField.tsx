import React, { createContext, ReactElement, ReactNode, useContext, useState } from 'react';

import { IcXLine } from '@yourssu/design-system-react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';

import {
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
  StyledThumbnailErrorMessage,
  StyledThumbnailPreview,
  StyledThumbnailPreviewContainer,
} from './FormField.style';

interface FormFieldProps {
  children: ReactNode;
  name: string;
  registerOption?: RegisterOptions;
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

export const FormField = ({ children, name, registerOption }: FormFieldProps) => {
  return (
    <FormFieldContext.Provider value={{ name, registerOption }}>
      <StyledFieldContainer>{children}</StyledFieldContainer>
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

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setValue(name, [file]);
      };
      reader.readAsDataURL(file);
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
      {errors[name] && (
        <StyledThumbnailErrorMessage>{String(errors[name].message)}</StyledThumbnailErrorMessage>
      )}
    </StyledThumbnailControlContainer>
  );
};

const FieldImageUploadControl = ({ children, maxFiles }: FieldImageUploadControlProps) => {
  const { register, getValues, setValue } = useFormContext();
  const { name } = useContext(FormFieldContext);
  const [fileNames, setFileNames] = useState<string[]>(Array.from({ length: maxFiles }, () => ''));
  const theme = useTheme();

  const handleChangeFile = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const newFileNames = [...fileNames];
      newFileNames[index] = file.name;
      setFileNames(newFileNames);
    }
  };

  const handleClickDeleteButton = (index: number) => () => {
    const newFileNames = [...fileNames];
    newFileNames[index] = '';
    setFileNames(newFileNames);

    setValue(`${name}.${index}`, null);
  };

  return (
    <StyledImageUploadControlContainer>
      {Array.from({ length: maxFiles }).map((_, index) => (
        <StyledImageUploadItemContainer key={`container-${index}`}>
          {React.cloneElement(children, {
            id: `${name}-${index}`,
            ...register(`${name}.${index}`, {
              onChange: handleChangeFile(index),
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
          {getValues(`${name}.${index}`)?.length > 0 && (
            <StyledImageDeleteButton type="button" onClick={handleClickDeleteButton(index)}>
              <IcXLine size={'1.25rem'} color={theme.color.buttonNormal} />
            </StyledImageDeleteButton>
          )}
        </StyledImageUploadItemContainer>
      ))}
    </StyledImageUploadControlContainer>
  );
};

FormField.Label = FieldLabel;
FormField.TextControl = FieldTextControl;
FormField.ThumbnailControl = FieldThumbnailControl;
FormField.ImageUploadControl = FieldImageUploadControl;
