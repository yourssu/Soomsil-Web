import { ChangeEvent, useState, useEffect, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { OverviewFileUpload } from './OverviewFileUpload/OverviewFileUpload';
import {
  StyledImageUpload,
  StyledOverviewContainer,
  StyledOverviewDescription,
  StyledOverviewTitle,
  StyledOverviewTitleContainer,
} from './OverviewImage.style';

export const OverviewImage = () => {
  const { register, formState, setValue } = useFormContext();

  const [files, setFiles] = useState<File[]>([]);
  const [isWarned, setIsWarned] = useState(false);

  const multiFileRef = useRef<HTMLInputElement | null>(null);

  const MAX_FILE_COUNT = 5;

  const handleFileChange = (file: File | undefined, index: number) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      if (file !== undefined) {
        newFiles[index] = file;
      }
      return newFiles;
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileChange(file, index);
    }
  };

  const handleDeleteFile = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = prevFiles.filter((_, i) => i !== index);
      return newFiles;
    });
  };

  useEffect(() => {
    if (formState.isSubmitted && files.length === 0) setIsWarned(true);
    if (files.length) setIsWarned(false);
  }, [files, formState]);

  useEffect(() => {
    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    multiFileRef.current!.files = dataTransfer.files;

    setValue('introductionImages', files);
  }, [files, setValue]);

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
          const file = files[index];
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
