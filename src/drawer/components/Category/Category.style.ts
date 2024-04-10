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
