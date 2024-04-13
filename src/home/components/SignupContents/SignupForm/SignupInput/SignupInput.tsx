import { useState } from 'react';

import { IcEyeclosedLine, IcEyeopenLine, SimpleTextField } from '@yourssu/design-system-react';

import { StyledSignupInputSuffix, StyledSignupInputTitle } from './SignupInput.style';

interface SignupInputProps {
  title: string;
  placeholder: string;
  helperLabel: string;
  hiddenField?: boolean;

  validator: (value: string) => boolean;
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

export const SignupInput = ({
  title,
  placeholder,
  helperLabel,
  hiddenField = false,
  validator,
  onChange,
}: SignupInputProps) => {
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
      <StyledSignupInputTitle>{title}</StyledSignupInputTitle>
      <StyledSignupInputSuffix>
        <SimpleTextField
          value={value}
          type={fieldType}
          onChange={onInputChange}
          placeholder={placeholder}
          helperLabel={helperLabel}
          isNegative={!validator(value)}
          {...getSuffixProps()}
        />
      </StyledSignupInputSuffix>
    </div>
  );
};
