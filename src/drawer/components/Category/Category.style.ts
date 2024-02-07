import styled from 'styled-components';

export const StyledCategoryContainer = styled.div`
  margin-top: 1.3125rem;
  margin-left: 2.125rem;
  padding-left: 2.0625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  gap: 1rem;
  font-style: ${({ theme }) => theme.typo.subtitle2};
`;
