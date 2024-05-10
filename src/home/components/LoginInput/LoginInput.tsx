import { useState } from 'react';

import { IcEyeclosedLine, IcEyeopenLine, SimpleTextField } from '@yourssu/design-system-react';

import { StyledSignupInputSuffix } from '../SignupContents/SignupForm/SignupInput/SignupInput.style';

import { StyledLoginInputHelperLabel, StyledLoginInputTitle } from './LoginInput.style';

interface LoginInputProps {
  title: string;
  helperLabel: React.ReactNode;
  placeholder: string;
  isNegative?: boolean;
  hiddenField?: boolean;

  onChange: (value: string) => void;
}

interface HiddenFieldEyeButtonProps {
  isFieldHidden: boolean;
  onClick: () => void;
}

const HiddenFieldEyeButton = ({ isFieldHidden, onClick }: HiddenFieldEyeButtonProps) => {
  return (
    <button className="suffix-icon" onClick={onClick}>
      {isFieldHidden ? <IcEyeclosedLine /> : <IcEyeopenLine />}
    </button>
  );
};

export const LoginInput = ({
  title,
  helperLabel,
  placeholder,
  isNegative = false,
  hiddenField = false,
  onChange,
}: LoginInputProps) => {
  const [value, setValue] = useState('');
  const [isFieldHidden, setIsFieldHidden] = useState(true);

  const fieldType = hiddenField && isFieldHidden ? 'password' : 'text';
  const isHiddenFieldSuffixVisible = hiddenField && value.length > 0;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  const toggleHiddenField = () => {
    if (!hiddenField) return;
    setIsFieldHidden((prev) => !prev);
  };

  const getSuffixProps = () => {
    if (!hiddenField) {
      return {
        onClickClearButton: () => setValue(''),
      };
    }

    return {
      suffix: isHiddenFieldSuffixVisible && (
        <HiddenFieldEyeButton isFieldHidden={isFieldHidden} onClick={toggleHiddenField} />
      ),
    };
  };

  return (
    <div>
      <StyledLoginInputTitle>{title}</StyledLoginInputTitle>
      <StyledSignupInputSuffix>
        <SimpleTextField
          value={value}
          type={fieldType}
          onChange={onInputChange}
          placeholder={placeholder}
          isNegative={isNegative}
          {...getSuffixProps()}
        />
        <StyledLoginInputHelperLabel>{isNegative ? helperLabel : ''}</StyledLoginInputHelperLabel>
      </StyledSignupInputSuffix>
    </div>
  );
};
