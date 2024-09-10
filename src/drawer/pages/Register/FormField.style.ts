import styled from 'styled-components';

interface IsWarnedProps {
  $isWarned: boolean;
}

interface StyledLabelContainerProps {
  $justify?: 'flex-start' | 'center';
}

export const StyledFieldContainer = styled.div`
  display: flex;
  gap: 12.75rem;
`;

export const StyledLabelContainer = styled.div<StyledLabelContainerProps>`
  display: flex;
  justify-content: ${({ $justify }) => $justify};
  width: 7.5rem;
  white-space: nowrap;
  flex-direction: column;
  gap: 0.625rem;
`;

export const StyledLabel = styled.label<IsWarnedProps>`
  ${({ theme }) => theme.typo.subtitle6}
  color: ${({ theme, $isWarned }) =>
    $isWarned ? theme.color.textWarned : theme.color.textPrimary};
`;

export const StyledLabelHint = styled.span<IsWarnedProps>`
  ${({ theme }) => theme.typo.caption2}
  color: ${({ theme, $isWarned }) =>
    $isWarned ? theme.color.textWarned : theme.color.textPrimary};
`;

export const StyledTextControlContainer = styled.div`
  flex-grow: 1;
`;

export const StyledTextControlMessage = styled.div<IsWarnedProps>`
  ${({ theme }) => theme.typo.caption2}
  color: ${({ theme, $isWarned }) =>
    $isWarned ? theme.color.textWarned : theme.color.textPrimary};
  text-align: right;
`;

export const StyledThumbnailControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const StyledThumbnailPreviewContainer = styled.label`
  display: flex;
  width: 11.25rem;
  height: 11.25rem;

  border: 1px solid ${({ theme }) => theme.color.buttonPoint};
  border-radius: 1.875rem;

  justify-content: center;
  align-items: center;

  cursor: pointer;
  overflow: hidden;
`;

export const StyledThumbnailPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledThumbnailErrorMessage = styled.div`
  ${({ theme }) => theme.typo.caption2}
  color: ${({ theme }) => theme.color.textWarned};
`;
