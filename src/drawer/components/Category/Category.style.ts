import styled from 'styled-components';

export const StyledCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  margin-left: 3.56rem;
  align-items: flex-start;
  align-self: flex-start;
  gap: 1rem;
  ${({ theme }) => theme.typo.subtitle2};
`;
