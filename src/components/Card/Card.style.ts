import styled from 'styled-components';

interface StyledContainerProps {
  $width: number;
}
export const StyledContainer = styled.div<StyledContainerProps>`
  max-width: ${(props) => `${props.$width}rem`};
  flex-direction: column;
  display: flex;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

interface StyledThumbnailProps {
  $width?: number;
  $height?: number;
  $borderRadius: number;
}
export const StyledThumbnail = styled.img<StyledThumbnailProps>`
  max-width: ${(props) => `${props.$width}rem`};
  height: ${(props) => `${props.$height}rem`};
  border-radius: ${(props) => `${props.$borderRadius}rem`};
  box-shadow:
    0px 1px 3px 1px rgba(60, 64, 67, 0.15),
    0px 1px 2px 0px rgba(60, 64, 67, 0.3);
  object-fit: cover;
`;

export const StyledTitle = styled.p`
  ${({ theme }) => theme.typo.button0};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledText = styled.p`
  ${({ theme }) => theme.typo.button3};
  color: ${({ theme }) => theme.color.textTertiary};
`;

export const StyledBookmarkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSettingIconContainer = styled.button`
  display: inline-flex;
  align-items: center;
`;
