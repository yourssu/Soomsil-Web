import styled from 'styled-components';

export const StyledContainer = styled.div`
  @media (max-width: 24.375rem) {
    width: 21.875rem;
  }

  width: 79.625rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputContainer = styled.div`
  @media (max-width: 24.375rem) {
    width: 16rem;
  }

  width: 61.875rem;
  display: flex;
  flex-direction: column;
`;

interface StyledInputProps {
  $isWarned?: boolean;
  $hasText?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  @media (max-width: 24.375rem) {
    ${({ theme }) => theme.typo.caption2};
  }

  ${({ theme }) => theme.typo.subtitle1};
  color: ${({ $isWarned, theme }) =>
    $isWarned ? theme.color.buttonWarned : theme.color.textSecondary};

  padding: 0.38rem;
  background-color: transparent;

  border: none;
  border-bottom: 1px solid
    ${({ $isWarned, $hasText, theme }) => {
      if ($isWarned) {
        return theme.color.buttonWarned;
      } else if ($hasText) {
        return theme.color.buttonNormalPressed;
      } else {
        return theme.color.buttonDisabled;
      }
    }};
`;

export const StyledInputLength = styled.span<StyledInputProps>`
  /* Soomsil/Drawer/Web/body10 */
  font-size: 'Spoqa Han Sans Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  color: ${({ $isWarned, theme }) =>
    $isWarned ? theme.color.buttonWarned : theme.color.textSecondary};
  text-align: right;
`;

export const StyledLabelTitle = styled.label`
  @media (max-width: 24.375rem) {
    ${({ theme }) => theme.typo.caption0};
  }

  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.textPrimary};
  word-break: keep-all;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLabelDescription = styled.label`
  /* Soomsil/Drawer/Web/body10 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 0.62rem;
`;
