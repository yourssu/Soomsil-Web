import styled from 'styled-components';

export const StyledGrayButton = styled.button`
  height: 2rem;
  padding: 0.5rem 1.375rem;
  border-radius: 6.25rem;
  border: none;
  background-color: ${({ theme }) => theme.color.buttonBG};
  color: ${({ theme }) => theme.color.textSecondary};
  font-style: ${({ theme }) => theme.typo.caption0};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonNormalPressed};
    color: ${({ theme }) => theme.color.bgNormal};
  }
  &:focus {
    outline: none;
  }
`;
