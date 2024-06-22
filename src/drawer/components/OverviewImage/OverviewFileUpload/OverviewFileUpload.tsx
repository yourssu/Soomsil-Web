import { ChangeEvent } from 'react';

import { IcXLine, IconContext } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import {
  StyledDeleteFileBtn,
  StyledFileUploadLabel,
  StyledOverviewUpload,
} from './OverviewFileUpload.style';

interface OverviewFileUploadProps {
  index: number;
  file: File | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDeleteFile: (index: number) => void;
}

export const OverviewFileUpload = ({
  index,
  file,
  handleInputChange,
  handleDeleteFile,
}: OverviewFileUploadProps) => {
  const theme = useTheme();
  const key = file ? `file-${file.name}-${file.lastModified}` : `file-empty-${index}`;

  return (
    <div key={key}>
      <input
        id={`overviewFile${index}`}
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        style={{ display: 'none' }}
        onChange={(e) => handleInputChange(e, index)}
      />
      <StyledFileUploadLabel htmlFor={`overviewFile${index}`}>파일 첨부</StyledFileUploadLabel>
      <StyledOverviewUpload key={key}>{file?.name ?? ''}</StyledOverviewUpload>
      <StyledDeleteFileBtn onClick={() => handleDeleteFile(index)}>
        <IconContext.Provider value={{ color: theme.color.buttonNormal, size: '1.2rem' }}>
          <IcXLine />
        </IconContext.Provider>
      </StyledDeleteFileBtn>
    </div>
  );
};
