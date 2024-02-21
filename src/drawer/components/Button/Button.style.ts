import styled from 'styled-components';

interface StyledButtonProps {
  $isFilled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme }) => theme.typo.button2};

  display: flex;
  align-items: center;

  height: 2.125rem;
  padding: 0.5rem 2rem;

  background-color: ${({ $isFilled }) =>
    $isFilled ? ({ theme }) => theme.color.buttonPoint : 'transparent'};
  color: ${({ $isFilled }) =>
    $isFilled ? ({ theme }) => theme.color.bgNormal : ({ theme }) => theme.color.buttonPoint};

  border: ${({ $isFilled }) =>
    $isFilled ? 'none' : ({ theme }) => `1px solid ${theme.color.buttonPoint}`};
  border-radius: 624.9375rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonPointPressed};
    color: ${({ theme }) => theme.color.bgNormal};
  }

  &:focus {
    outline: none;
  }
`;
