import styled from 'styled-components';

interface StyledButtonProps {
  $isFilled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 32px;
  border-radius: 9999px;
  background-color: ${({ $isFilled }) =>
    $isFilled ? ({ theme }) => theme.color.buttonPoint : 'transparent'};
  color: ${({ $isFilled }) =>
    $isFilled ? ({ theme }) => theme.color.bgNormal : ({ theme }) => theme.color.buttonPoint};
  border: ${({ $isFilled }) =>
    $isFilled ? 'none' : ({ theme }) => `1px solid ${theme.color.buttonPoint}`};
  font-style: ${({ theme }) => theme.typo.caption0};
  &:focus {
    outline: none;
  }
`;
