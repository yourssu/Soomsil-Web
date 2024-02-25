import styled from 'styled-components';

export const StyledCategoryWithoutAllContainer = styled.div`
  width: 81.25rem;
  display: flex;
  flex-direction: row;
  gap: 12.75rem;
  @media (max-width: 24.375rem) {
    width: 21.875rem;
    gap: 0.5rem;
  }
  white-space: nowrap;
`;

export const StyledCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCategoryTitle = styled.div`
  @media (max-width: 24.375rem) {
    ${({ theme }) => theme.typo.caption0};
  }
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.textPrimary};
  word-break: keep-all;
`;

export const StyledCategoryDescription = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 0.62rem;
`;
