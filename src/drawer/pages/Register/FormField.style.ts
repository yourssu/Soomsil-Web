import styled from 'styled-components';

interface IsWarnedProps {
  $isWarned: boolean;
}

export const StyledFieldContainer = styled.div`
  display: flex;
  gap: 12.75rem;
`;

export const StyledLabelContainer = styled.div`
  display: flex;
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
