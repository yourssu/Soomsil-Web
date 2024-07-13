import { useEffect, useRef, useState } from 'react';

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
  const { register, formState, setValue, watch } = useFormContext();

  const thumbnailFile: File[] = watch(name);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isPreview, setIsPreview] = useState<string | null>('');
  const [isWarned, setIsWarned] = useState<boolean>(false);

  const theme = useTheme();

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && ALLOWED_IMAGE_TYPE.includes(file.type)) {
        setValue(name, [file]);
      } else {
        alert('이미지 포맷은 jpg, jpeg, png, gif 중 하나여야 합니다.');
        setValue(name, []);
      }
    }
  };

  useEffect(() => {
    if (thumbnailFile[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIsPreview(reader.result as string);
      };
      reader.readAsDataURL(thumbnailFile[0]);
      setIsWarned(false);
    } else {
      setIsPreview(null);
    }
  }, [thumbnailFile]);

  useEffect(() => {
    if (!inputRef.current) return;
    if (!thumbnailFile.length) return;

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(thumbnailFile[0]);
    inputRef.current.files = dataTransfer.files;
  }, [thumbnailFile, inputRef]);

  useEffect(() => {
    if (formState.isSubmitted && !thumbnailFile.length) setIsWarned(true);
  }, [formState, thumbnailFile]);

  return (
    <StyledThumbnailContainer>
      <StyledThumbnailTitleContainer>
        <StyledThumbnailTitle $isWarned={isWarned}>썸네일 이미지 *</StyledThumbnailTitle>
        <StyledThumbnailDescription>(권장 : 1024px X 1024px)</StyledThumbnailDescription>
      </StyledThumbnailTitleContainer>
      <input
        {...register(name, {
          required: true,
          onChange: (e) => {
            handleChangeImg(e);
          },
        })}
        ref={inputRef}
        id="inputFile"
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
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
