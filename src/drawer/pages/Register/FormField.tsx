import React, { createContext, ReactElement, ReactNode, useContext } from 'react';

import { RegisterOptions, useFormContext, ValidationValueMessage } from 'react-hook-form';

import {
  StyledControlContainer,
  StyledControlMessage,
  StyledFieldContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledLabelHint,
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

interface FieldControlProps {
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

const FieldControl = ({ children }: FieldControlProps) => {
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
    <StyledControlContainer>
      {React.cloneElement(children, {
        $isWarned: !!errors[name],
        $hasText: watchField.length > 0,
        id: name,
        ...register(name, registerOption),
      })}
      <StyledControlMessage $isWarned={!!errors[name]}>{getControlMessage()}</StyledControlMessage>
    </StyledControlContainer>
  );
};

FormField.Label = FieldLabel;
FormField.Control = FieldControl;
