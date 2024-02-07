import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  font-style: ${({ theme }) => theme.typo.subtitle2};
`;
