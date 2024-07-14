import styled from 'styled-components';

export const StyledTitleText = styled.p`
  ${({ theme }) => theme.typo.title2}
`;

export const StyledSubTitleText = styled.p`
  ${({ theme }) => theme.typo.subtitle4}
  align-self: self-start;
`;

export const StyledPasswordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -5%;
`;
