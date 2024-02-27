import { ChangeEvent, useState } from 'react';

import { IcXLine, IconContext } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import {
  StyledDeleteFileBtn,
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
  const theme = useTheme();

  const handleFileChange = (file: File | undefined, index: number) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      if (file !== undefined) {
        newFiles[index] = file;
      }
      console.log(newFiles);
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
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
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
            <StyledFileUploadLabel htmlFor={`overviewFile${index}`}>
              파일 첨부
            </StyledFileUploadLabel>
            <StyledOverviewUpload key={index}>
              {files[index] ? files[index]?.name : ''}
            </StyledOverviewUpload>
            <StyledDeleteFileBtn onClick={() => handleDeleteFile(index)}>
              <IconContext.Provider value={{ color: theme.color.buttonNormal, size: '1.2rem' }}>
                <IcXLine />
              </IconContext.Provider>
            </StyledDeleteFileBtn>
          </div>
        ))}
      </StyledImageUpload>
    </StyledOverviewContainer>
  );
};
