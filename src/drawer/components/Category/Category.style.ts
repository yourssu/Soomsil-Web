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
