import { useState } from 'react';

const useForm = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const initiateValue = () => {
    setValue('');
  };

  return { value, setValue, handleValue, initiateValue };
};

export default useForm;
