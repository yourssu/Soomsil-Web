import { styled } from 'styled-components';

export const StyledRegisterCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: flex-start;
`;

export const StyledRegisterCategoryErrorMessage = styled.div`
  ${({ theme }) => theme.typo.caption2}
  color: ${({ theme }) => theme.color.textWarned};
  text-align: right;
`;
