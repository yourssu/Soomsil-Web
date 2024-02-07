import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledContainerProps {
  $width: number;
}
export const StyledContainer = styled(Link)<StyledContainerProps>`
  width: ${(props) => `${props.$width}rem;`}
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  text-decoration: none;
`;

export const StyledBigThumbnail = styled.img`
  border-radius: 0.5rem;
  box-shadow:
    0px 1px 3px 1px rgba(60, 64, 67, 0.15),
    0px 1px 2px 0px rgba(60, 64, 67, 0.3);
`;

export const StyledSmallThumbnail = styled.img`
  width: 4rem;
  border-radius: 0.75rem;
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

export const StyledSettingButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 2.25rem;
`;
