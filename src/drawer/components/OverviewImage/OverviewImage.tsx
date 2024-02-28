import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import { OverviewFileUpload } from './OverviewFileUpload/OverviewFileUpload';
import {
  StyledImageUpload,
  StyledOverviewContainer,
  StyledOverviewDescription,
  StyledOverviewTitle,
  StyledOverviewTitleContainer,
} from './OverviewImage.style';

interface OverviewProps extends InputHTMLAttributes<HTMLLabelElement> {
  isWarned?: boolean;
}

export const OverviewImage = ({ isWarned }: OverviewProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const MAX_FILE_COUNT = 5;

  const handleFileChange = (file: File | undefined, index: number) => {
    setFiles(
      (prevFiles) => prevFiles.map((prevFile, i) => (i === index ? file : prevFile)) as File[]
    );
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
      console.log(newFiles);
      return newFiles;
    });
  };

  return (
    <StyledOverviewContainer>
      <StyledOverviewTitleContainer>
        <StyledOverviewTitle $isWarned={isWarned}>소개 이미지 *</StyledOverviewTitle>
        <StyledOverviewDescription>(권장 : 1920px X 1080px, 최대 5장)</StyledOverviewDescription>
      </StyledOverviewTitleContainer>
      <StyledImageUpload>
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
