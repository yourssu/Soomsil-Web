import React, { createContext, ReactElement, ReactNode, useContext, useState } from 'react';

import { RegisterOptions, useFormContext } from 'react-hook-form';

import {
  StyledFieldContainer,
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
  registerOption: RegisterOptions;
}

interface FieldLabelProps {
  children: ReactNode;
  hint: string;
  justify?: 'flex-start' | 'center';
}

interface FieldTextControlProps {
  children: ReactElement;
}

interface FieldThumbnailControlProps {
  children: ReactElement;
  fallback: ReactNode;
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

const FieldLabel = ({ children, hint, justify = 'flex-start' }: FieldLabelProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { name, registerOption } = useContext(FormFieldContext);

  return (
    <StyledLabelContainer $justify={justify}>
      <StyledLabel htmlFor={name} $isWarned={!!errors[name]}>
        {children}
        {registerOption.required && ' *'}
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

    if (typeof registerOption.maxLength === 'object') {
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

FormField.Label = FieldLabel;
FormField.TextControl = FieldTextControl;
FormField.ThumbnailControl = FieldThumbnailControl;
