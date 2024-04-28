import styled from 'styled-components';

export const StyledEmailAuthParagraph = styled.p`
  ${({ theme }) => theme.typo.subtitle3};
  padding: 11px 16px 0 4px;

  white-space: pre-wrap;
`;

export const StyledPlainButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  ${({ theme }) => theme.typo.button3};

  *:not(span) {
    width: 100%;
  }
`;

export const StyledTimerSuffix = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textWarned};
`;
