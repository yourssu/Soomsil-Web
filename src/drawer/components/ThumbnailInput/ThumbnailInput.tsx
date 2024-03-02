import { useEffect, useState } from 'react';

import { IcPlusLine, IconContext } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';
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
  name: string;
}

export const ThumbnailInput = ({ name }: StyledThumbnailProps) => {
  const { register, formState, getValues } = useFormContext();
  const { onChange, ref } = register(name, { required: true });

  const [postImg, setPostImg] = useState<File | null>();
  const [isPreview, setIsPreview] = useState<string | null>('');
  const [isWarned, setIsWarned] = useState<boolean>(false);

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
      setIsWarned(false);
    } else {
      setIsPreview(null);
    }
  }, [postImg]);

  useEffect(() => {
    const value = getValues(name);
    if (formState.isSubmitted && !value.length) setIsWarned(true);
  }, [formState, getValues, setIsWarned, name]);

  return (
    <StyledThumbnailContainer>
      <StyledThumbnailTitleContainer>
        <StyledThumbnailTitle $isWarned={isWarned}>썸네일 이미지 *</StyledThumbnailTitle>
        <StyledThumbnailDescription>(권장 : 1024px X 1024px)</StyledThumbnailDescription>
      </StyledThumbnailTitleContainer>
      <input
        id="inputFile"
        type="file"
        accept="image/*"
        onChange={(event) => {
          handleChangeImg(event);
          onChange(event);
        }}
        name={name}
        ref={ref}
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
