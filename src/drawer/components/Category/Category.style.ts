import styled from 'styled-components';

export const StyledRankingCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  margin-top: 3.38rem;
  margin-left: -15rem;
  align-items: flex-start;
  gap: 1rem;
  ${({ theme }) => theme.typo.subtitle2};
`;

export const StyledRegisterCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;
  align-items: flex-start;
  margin-top: 0.62rem;
  margin-bottom: 0.62rem;
  margin-left: 1rem;
`;
