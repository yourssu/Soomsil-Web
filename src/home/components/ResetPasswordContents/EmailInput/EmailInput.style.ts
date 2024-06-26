import styled from 'styled-components';

export const StyledTitleText = styled.p`
  ${({ theme }) => theme.typo.title2}
`;

export const StyledSubTitleText = styled.p`
  ${({ theme }) => theme.typo.subtitle3}
  text-align: center;
`;

export const StyledEmailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
