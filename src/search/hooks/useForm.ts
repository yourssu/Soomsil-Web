import { useState } from 'react';

const useForm = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, handleChangeValue };
};

export default useForm;
