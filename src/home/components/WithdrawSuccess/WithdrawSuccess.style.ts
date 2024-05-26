import styled from 'styled-components';

export const StyledDoneText = styled.p`
  ${({ theme }) => theme.typo.subtitle2};
  color: ${({ theme }) => theme.color.textSecondary};
  text-align: center;
`;

export const StyledDoneButtonText = styled.div`
  ${({ theme }) => theme.typo.button0};
`;
