import { ChangeEvent, useState } from 'react';

import {
  StyledFileUploadLabel,
  StyledImageUpload,
  StyledOverviewContainer,
  StyledOverviewDescription,
  StyledOverviewTitle,
  StyledOverviewTitleContainer,
  StyledOverviewUpload,
} from './OverviewImage.style';

export const OverviewImage = () => {
  const [files, setFiles] = useState<File[]>([]);

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

  return (
    <StyledOverviewContainer>
      <StyledOverviewTitleContainer>
        <StyledOverviewTitle $isWarned={files.length === 0}>소개 이미지 *</StyledOverviewTitle>
        <StyledOverviewDescription>(권장 : 1920px X 1080px, 최대 5장)</StyledOverviewDescription>
      </StyledOverviewTitleContainer>
      <StyledImageUpload>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <input
              id={`overviewFile${index}`}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => handleInputChange(e, index)}
            />
            <StyledFileUploadLabel htmlFor={`overviewFile${index}`}>파일첨부</StyledFileUploadLabel>
            <StyledOverviewUpload key={index}>{files[index]?.name}</StyledOverviewUpload>
          </div>
        ))}
      </StyledImageUpload>
    </StyledOverviewContainer>
  );
};
