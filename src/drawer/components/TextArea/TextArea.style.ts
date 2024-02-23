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

export const StyledLabelTitle = styled.label`
  @media (max-width: 24.375rem) {
    ${({ theme }) => theme.typo.caption0};
  }

  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.textPrimary};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLabelDescription = styled.span`
  /* Soomsil/Drawer/Web/body10 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 0.62rem;
`;

export const StyledTextAreaContainer = styled.div`
  @media (max-width: 24.375rem) {
    width: 16rem;
  }

  width: 61.875rem;
  display: flex;
  flex-direction: column;
`;

interface StyledTextAreaProps {
  $isWarned?: boolean;
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  @media (max-width: 24.375rem) {
    ${({ theme }) => theme.typo.caption2};
  }

  ${({ theme }) => theme.typo.button4};
  color: ${({ $isWarned, theme }) =>
    $isWarned ? theme.color.buttonWarned : theme.color.textSecondary};

  resize: none;
  padding: 0.38rem;

  border: none;
  border-bottom: 1px solid
    ${({ $isWarned, theme }) => ($isWarned ? theme.color.buttonWarned : theme.color.buttonDisabled)};

  &:focus {
    border-bottom: 1px solid
      ${({ $isWarned, theme }) =>
        $isWarned ? theme.color.buttonWarned : theme.color.buttonNormalPressed};
  }
`;

export const StyledTextAreaLength = styled.span<StyledTextAreaProps>`
  /* Soomsil/Drawer/Web/body10 */
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  color: ${({ $isWarned, theme }) =>
    $isWarned ? theme.color.buttonWarned : theme.color.textSecondary};
  text-align: right;
`;
