import styled from 'styled-components';

export const StyledCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-style: ${({ theme }) => theme.typo.subtitle2};
`;
