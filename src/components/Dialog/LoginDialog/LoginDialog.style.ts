import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const StyledTitle = styled.p`
  white-space: pre-line;
  text-align: center;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
