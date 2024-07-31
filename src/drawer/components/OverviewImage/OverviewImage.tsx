import { ChangeEvent, useState, useEffect, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { ALLOWED_IMAGE_TYPE } from '@/drawer/constants/image.constant';

import { OverviewFileUpload } from './OverviewFileUpload/OverviewFileUpload';
import {
  StyledImageUpload,
  StyledOverviewContainer,
  StyledOverviewDescription,
  StyledOverviewTitle,
  StyledOverviewTitleContainer,
} from './OverviewImage.style';

export const OverviewImage = () => {
  const { register, formState, getValues, setValue, watch } = useFormContext();
  const formFiles: File[] = watch('introductionImages');

  const [isWarned, setIsWarned] = useState(false);
  const multiFileRef = useRef<HTMLInputElement | null>(null);

  const MAX_FILE_COUNT = 5;

  const handleFileChange = (file: File | undefined, index: number) => {
    const newFiles = [...getValues('introductionImages')];
    if (file && ALLOWED_IMAGE_TYPE.includes(file.type)) {
      newFiles[index] = file;
    } else {
      alert('이미지 포맷은 jpg, jpeg, png, gif 중 하나여야 합니다.');
    }
    setValue('introductionImages', newFiles);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file, index);
    }
  };

  const handleDeleteFile = (index: number) => {
    const prevFiles = getValues('introductionImages');
    const newFiles = [...prevFiles].filter((_, i) => i !== index);
    setValue('introductionImages', newFiles);
  };

  useEffect(() => {
    if (formState.isSubmitted && formFiles.length === 0) setIsWarned(true);
    if (formFiles.length) setIsWarned(false);
  }, [formFiles, formState]);

  useEffect(() => {
    const dataTransfer = new DataTransfer();
    formFiles.forEach((file) => dataTransfer.items.add(file));
    multiFileRef.current!.files = dataTransfer.files;
  }, [formFiles]);

  return (
    <StyledOverviewContainer>
      <StyledOverviewTitleContainer>
        <StyledOverviewTitle $isWarned={isWarned}>소개 이미지 *</StyledOverviewTitle>
        <StyledOverviewDescription>(권장 : 1920px X 1080px, 최대 5장)</StyledOverviewDescription>
      </StyledOverviewTitleContainer>
      <StyledImageUpload>
        <input
          type="file"
          {...register('introductionImages', { required: true })}
          ref={multiFileRef}
          multiple
          hidden
        />
        {Array.from({ length: MAX_FILE_COUNT }).map((_, index) => {
          const file = formFiles[index];
          const key = file ? `file-${file.name}-${file.lastModified}` : `file-empty-${index}`;
          return (
            <OverviewFileUpload
              key={key}
              index={index}
              file={file}
              handleInputChange={handleInputChange}
              handleDeleteFile={handleDeleteFile}
            />
          );
        })}
      </StyledImageUpload>
    </StyledOverviewContainer>
  );
};
