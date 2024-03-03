import styled from 'styled-components';

interface StyledContainerProps {
  $width: number;
}
export const StyledContainer = styled.div<StyledContainerProps>`
  width: ${(props) => `${props.$width}rem`};
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

interface StyledThumbnailProps {
  $width?: number;
  $borderRadius: number;
}
export const StyledThumbnail = styled.img<StyledThumbnailProps>`
  width: ${(props) => `${props.$width}rem`};
  border-radius: ${(props) => `${props.$borderRadius}rem`};
  box-shadow:
    0px 1px 3px 1px rgba(60, 64, 67, 0.15),
    0px 1px 2px 0px rgba(60, 64, 67, 0.3);
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

export const StyledSettingIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
