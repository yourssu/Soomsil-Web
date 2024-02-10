import styled from 'styled-components';

interface StyledButtonProps {
  $isFilled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 2.125rem;
  padding: 0.5rem 2rem;
  border-radius: 624.9375rem;
  background-color: ${({ $isFilled }) =>
    $isFilled ? ({ theme }) => theme.color.buttonPoint : 'transparent'};
  color: ${({ $isFilled }) =>
    $isFilled ? ({ theme }) => theme.color.bgNormal : ({ theme }) => theme.color.buttonPoint};
  border: ${({ $isFilled }) =>
    $isFilled ? 'none' : ({ theme }) => `1px solid ${theme.color.buttonPoint}`};
  font-style: ${({ theme }) => theme.typo.caption0};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.buttonPointPressed};
    color: ${({ theme }) => theme.color.bgNormal};
  }
  &:focus {
    outline: none;
  }
`;
