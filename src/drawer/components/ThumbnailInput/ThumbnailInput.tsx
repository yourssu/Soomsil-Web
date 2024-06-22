import { useEffect, useState } from 'react';

import { IcPlusLine, IconContext } from '@yourssu/design-system-react';
import { useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { ALLOWED_IMAGE_TYPE } from '@/drawer/constants/image.constant';

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
  const { register, formState, getValues, setValue } = useFormContext();
  const { onChange, ref } = register(name, { required: true });

  const [postImg, setPostImg] = useState<File | null>();
  const [isPreview, setIsPreview] = useState<string | null>('');
  const [isWarned, setIsWarned] = useState<boolean>(false);

  const theme = useTheme();

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && ALLOWED_IMAGE_TYPE.includes(file.type)) {
        setPostImg(file);
      } else {
        alert('이미지 포맷은 jpg, jpeg, png, gif 중 하나여야 합니다.');
        setValue(name, null);
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
  }, [formState, getValues, name]);

  return (
    <StyledThumbnailContainer>
      <StyledThumbnailTitleContainer>
        <StyledThumbnailTitle $isWarned={isWarned}>썸네일 이미지 *</StyledThumbnailTitle>
        <StyledThumbnailDescription>(권장 : 1024px X 1024px)</StyledThumbnailDescription>
      </StyledThumbnailTitleContainer>
      <input
        id="inputFile"
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
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
