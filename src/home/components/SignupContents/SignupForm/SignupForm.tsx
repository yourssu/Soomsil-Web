import { useCallback, useState } from 'react';

import {
  BoxButton,
  IcEyeclosedLine,
  IcEyeopenLine,
  SimpleTextField,
} from '@yourssu/design-system-react';

import {
  StyledSignupButtonText,
  StyledSignupContentContainer,
  StyledSignupContentTitle,
} from '../SignupContents.style';

import { StyledSignupInputSuffix, StyledSignupInputTitle } from './SignupForm.style';

interface SignupInputProps {
  title: string;
  placeholder: string;
  helperLabel: string;
  hiddenField?: boolean;
  warn?: boolean;
  validator: (value: string) => boolean;
  onChange: ({ value, isValid }: { value: string; isValid: boolean }) => void;
}

interface SignupFormProps {
  onConfirm: ({ nickname, password }: { nickname: string; password: string }) => void;
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

const SignupInput = ({
  title,
  placeholder,
  helperLabel,
  hiddenField = false,
  warn = false,
  validator,
  onChange,
}: SignupInputProps) => {
  const [value, setValue] = useState('');
  const [isFieldHidden, setIsFieldHidden] = useState(!hiddenField);

  const fieldType = hiddenField && isFieldHidden ? 'password' : 'text';
  const isHiddenFieldSuffixVisible = hiddenField && value.length > 0;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange({ value: inputValue, isValid: validator(inputValue) });
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
      suffix: isHiddenFieldSuffixVisible ? (
        <HiddenFieldEyeButton isFieldHidden={isFieldHidden} onClick={toggleHiddenField} />
      ) : undefined,
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
          isNegative={warn}
          {...getSuffixProps()}
        />
      </StyledSignupInputSuffix>
    </div>
  );
};

export const SignupForm = ({ onConfirm }: SignupFormProps) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [isNickNameValid, setIsNickNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNicknameFieldWarned, setIsNicknameFieldWarned] = useState(false);
  const [isPasswordFieldWarned, setIsPasswordFieldWarned] = useState(false);

  const isFormValid = isNickNameValid && isPasswordValid;
  const hasOnlyNumberAndEnglish = (value: string) => /^[a-zA-Z0-9]*$/.test(value);

  const onFormConfirm = () => {
    if (!isFormValid) {
      if (!isNickNameValid) setIsNicknameFieldWarned(true);
      if (!isPasswordValid) setIsPasswordFieldWarned(true);
      return;
    }
    onConfirm({ nickname, password });
  };

  const nicknameValidator = useCallback((value: string) => {
    return value.length >= 2 && value.length <= 12;
  }, []);

  const passwordValidator = useCallback((value: string) => {
    return value.length >= 8 && hasOnlyNumberAndEnglish(value);
  }, []);

  return (
    <StyledSignupContentContainer>
      <StyledSignupContentTitle>회원가입</StyledSignupContentTitle>
      <SignupInput
        title="사용할 닉네임을 입력해주세요."
        helperLabel="한글, 영어, 숫자를 사용해 2~12자로 입력해주세요"
        placeholder="ppushoong"
        warn={isNicknameFieldWarned}
        validator={nicknameValidator}
        onChange={({ value, isValid }) => {
          setIsNicknameFieldWarned(false);
          setNickname(value);
          setIsNickNameValid(isValid);
        }}
      />
      <SignupInput
        hiddenField
        title="사용할 비밀번호를 입력해주세요."
        helperLabel="숫자와 영문자 조합으로 8자 이상 입력해주세요"
        placeholder="비밀번호"
        warn={isPasswordFieldWarned}
        validator={passwordValidator}
        onChange={({ value, isValid }) => {
          setIsPasswordFieldWarned(false);
          setPassword(value);
          setIsPasswordValid(isValid);
        }}
      />
      <BoxButton rounding={8} size="large" variant="filled" onClick={onFormConfirm}>
        <StyledSignupButtonText>회원가입</StyledSignupButtonText>
      </BoxButton>
    </StyledSignupContentContainer>
  );
};
