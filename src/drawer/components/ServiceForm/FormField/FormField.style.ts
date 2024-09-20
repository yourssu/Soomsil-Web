import styled from 'styled-components';

interface IsWarnedProps {
  $isWarned: boolean;
}

interface StyledFieldContainerProps {
  $direction?: 'row' | 'column';
}
interface StyledLabelContainerProps {
  $justify?: 'flex-start' | 'center';
}

export const StyledFieldContainer = styled.div<StyledFieldContainerProps>`
  @media (max-width: 30rem) {
    gap: 0.75rem;
    justify-content: space-between;
  }

  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 12.75rem;
`;

export const StyledLabelContainer = styled.div<StyledLabelContainerProps>`
  @media (max-width: 30rem) {
    width: 5rem;
    gap: 0.25rem;
  }

  display: flex;
  justify-content: ${({ $justify }) => $justify};
  width: 7.5rem;
  white-space: nowrap;
  flex-direction: column;
  gap: 0.625rem;
`;

export const StyledLabel = styled.label<IsWarnedProps>`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption0}
  }

  ${({ theme }) => theme.typo.subtitle6}
  color: ${({ theme, $isWarned }) =>
    $isWarned ? theme.color.textWarned : theme.color.textPrimary};
`;

export const StyledLabelHint = styled.span<IsWarnedProps>`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption2}
  }

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
  @media (max-width: 30rem) {
    align-self: flex-end;
  }

  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const StyledThumbnailPreviewContainer = styled.label`
  @media (max-width: 30rem) {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 1.25rem;
  }

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

export const StyledErrorMessage = styled.div`
  ${({ theme }) => theme.typo.caption2}
  color: ${({ theme }) => theme.color.textWarned};
`;

export const StyledImageUploadControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.625rem;
`;

export const StyledImageUploadItemContainer = styled.div`
  @media (max-width: 30rem) {
    border-radius: 0.25rem;
  }

  display: flex;
  align-items: center;
  gap: 0.875rem;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.buttonDisabled};
`;

export const StyledImageUploadButton = styled.button`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption2}

    border-radius: 0.25rem;

    width: 70px;
    height: 21px;
  }

  ${({ theme }) => theme.typo.button4}

  width: 6rem;
  height: 2rem;

  background-color: ${({ theme }) => theme.color.textPointed};
  color: ${({ theme }) => theme.color.textBright};

  border-radius: 0.5rem;
`;

export const StyledImageFileName = styled.span`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption2}
  }

  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textSecondary};
  flex-grow: 1;
`;

export const StyledImageDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.375rem;
`;
