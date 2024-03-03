import { useEffect, useState } from 'react';

import { IcPlusLine, IconContext } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import {
  StyledThumbnailContainer,
  StyledThumbnailDescription,
  StyledThumbnailNone,
  StyledThumbnailTitle,
  StyledThumbnailTitleContainer,
  StyledThumbnailPreview,
} from './ThumbnailInput.style';

interface StyledThumbnailProps {
  isWarned?: boolean;
}

export const ThumbnailInput = ({ isWarned }: StyledThumbnailProps) => {
  const [postImg, setPostImg] = useState<File | null>();
  const [isPreview, setIsPreview] = useState<string | null>('');
  const theme = useTheme();

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setPostImg(file);
      } else {
        setPostImg(null);
      }
    }
  };

  useEffect(() => {
    if (postImg) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIsPreview(reader.result as string);
      };
      reader.readAsDataURL(postImg);
    } else {
      setIsPreview(null);
    }
  }, [postImg]);

  return (
    <StyledThumbnailContainer>
      <StyledThumbnailTitleContainer>
        <StyledThumbnailTitle $isWarned={isWarned}>썸네일 이미지 *</StyledThumbnailTitle>
        <StyledThumbnailDescription>(권장 : 1024px X 1024px)</StyledThumbnailDescription>
      </StyledThumbnailTitleContainer>
      <input
        id="inputFile"
        name="img"
        type="file"
        accept="image/*"
        onChange={handleChangeImg}
        style={{ display: 'none' }}
      />
      <StyledThumbnailNone htmlFor="inputFile">
        {isPreview ? (
          <StyledThumbnailPreview src={isPreview} alt="Thumbnail Preview" />
        ) : (
          <IconContext.Provider
            value={{
              color: theme.color.buttonPoint,
              size: '4.5rem',
            }}
          >
            <IcPlusLine />
          </IconContext.Provider>
        )}
      </StyledThumbnailNone>
    </StyledThumbnailContainer>
  );
};
