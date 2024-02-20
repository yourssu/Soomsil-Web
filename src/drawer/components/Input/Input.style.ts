import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 79.625rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 24.375rem) {
    width: 21.875rem;
  }
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputContainer = styled.div`
  width: 61.875rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 24.375rem) {
    width: 16rem;
  }
`;

interface StyledInputProps {
  $isWarned?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  @media (max-width: 24.375rem) {
    ${({ theme }) => theme.typo.caption2};
  }
  padding: 0.38rem;
  border: 1px solid
    ${({ $isWarned, theme }) => ($isWarned ? theme.color.buttonWarned : theme.color.buttonNormal)};
  ${({ theme }) => theme.typo.subtitle1};
  background-color: transparent;
  color: ${({ $isWarned, theme }) =>
    $isWarned ? theme.color.buttonWarned : theme.color.textSecondary};
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    border: 1px solid ${({ theme }) => theme.color.buttonDisabled};
    border-top: none;
    border-left: none;
    border-right: none;
  }
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
