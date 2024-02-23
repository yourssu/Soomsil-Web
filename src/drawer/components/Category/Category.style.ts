import styled from 'styled-components';

export const StyledCategoryContainer = styled.div`
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

export const StyledCategoryWithoutAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;
  align-items: flex-start;
  margin-top: 0.62rem;
  margin-bottom: 0.62rem;
`;
