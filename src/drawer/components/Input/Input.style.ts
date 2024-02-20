import styled from 'styled-components';

interface StyledContainerProps {
  $width: number;
}

export const StyledContainer = styled.div`
  width: ${({ $width }: StyledContainerProps) => $width}rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface StyledInputContainerProps {
  $inputWidth: number;
}

export const StyledInputContainer = styled.div`
  width: ${({ $inputWidth }: StyledInputContainerProps) => $inputWidth}rem;
  display: flex;
  flex-direction: column;
`;

interface StyledInputProps {
  $isWarned?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
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
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.textPrimary};
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
