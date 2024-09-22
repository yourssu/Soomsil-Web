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

export const StyledCategoryTitle = styled.p`
  ${({ theme }) => theme.typo.title5};
`;

export const StyledDropdownCategoryContainer = styled.div`
  display: flex;
  width: 155px;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0px 1px 3px 0px rgba(107, 114, 128, 0.4);
  ${({ theme }) => theme.typo.title5};
`;
