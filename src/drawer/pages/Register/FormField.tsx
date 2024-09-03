import React, { createContext, ReactElement, ReactNode, useContext } from 'react';

import { RegisterOptions, useFormContext, ValidationValueMessage } from 'react-hook-form';

import {
  StyledFieldContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledLabelHint,
  StyledTextControlContainer,
  StyledTextControlMessage,
} from './FormField.style';

interface FormFieldProps {
  children: ReactNode;
  name: string;
  registerOption: RegisterOptions;
}

interface FieldLabelProps {
  children: ReactNode;
  hint: string;
}

interface FieldTextControl {
  children: ReactElement;
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

const FieldLabel = ({ children, hint }: FieldLabelProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { name, registerOption } = useContext(FormFieldContext);

  return (
    <StyledLabelContainer>
      <StyledLabel htmlFor={name} $isWarned={!!errors[name]}>
        {children}
        {registerOption.required && ' *'}
      </StyledLabel>
      <StyledLabelHint $isWarned={!!errors[name]}>({hint})</StyledLabelHint>
    </StyledLabelContainer>
  );
};

const FieldTextControl = ({ children }: FieldTextControl) => {
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

    if (registerOption.maxLength) {
      const maxLength = registerOption.maxLength as ValidationValueMessage<number>;
      return `${watchField.length}/${maxLength.value}`;
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

FormField.Label = FieldLabel;
FormField.TextControl = FieldTextControl;
