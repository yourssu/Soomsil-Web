import styled from 'styled-components';

export const StyledLoginInputTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle6};
  padding-left: 4px;
  padding-bottom: 3px;
`;

export const StyledLoginInputHelperLabel = styled.div`
  ${({ theme }) => theme.typo.caption1};
  margin-top: 8px;
  white-space: pre-line;
  color: ${({ theme }) => theme.color.textWarned};
`;
