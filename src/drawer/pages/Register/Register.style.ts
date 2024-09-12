import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  @media (max-width: 30rem) {
    padding: 1.5rem 1.25rem;
  }

  width: 100%;
  padding: 3.5rem 20rem;
`;

export const StyledRequiredHint = styled.div`
  @media (max-width: 30rem) {
    /* Soomsil/Drawer/Web/body10 */
    font-size: 'Spoqa Han Sans Neo';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  ${({ theme }) => theme.typo.subtitle6}
  color: ${({ theme }) => theme.color.textPrimary};
  text-align: right;
`;

export const StyledForm = styled.form`
  @media (max-width: 30rem) {
    gap: 1.25rem;
    margin-top: 0.75rem;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.25rem;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

interface StyledInputProps {
  $isWarned?: boolean;
  $hasText?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption2}
  }

  ${({ theme }) => theme.typo.subtitle3}
  color: ${({ $isWarned = false, theme }) =>
    $isWarned ? theme.color.textWarned : theme.color.textSecondary};

  width: 100%;
  padding: 0.375rem;
  border-bottom: 2px solid
    ${({ $isWarned = false, $hasText = false, theme }) =>
      $isWarned
        ? theme.color.buttonWarned
        : $hasText
          ? theme.color.buttonNormalPressed
          : theme.color.buttonDisabled};

  background-color: transparent;
  caret-color: ${({ theme }) => theme.color.textPointed};
`;

export const StyledTextarea = styled.textarea<StyledInputProps>`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption2}
  }

  ${({ theme }) => theme.typo.button4}
  color: ${({ $isWarned = false, theme }) =>
    $isWarned ? theme.color.textWarned : theme.color.textSecondary};
  caret-color: ${({ theme }) => theme.color.textPointed};
  background-color: transparent;

  width: 100%;
  resize: none;
  padding: 0.375rem;

  border: none;
  border-bottom: 2px solid
    ${({ $isWarned = false, $hasText = false, theme }) =>
      $isWarned
        ? theme.color.buttonWarned
        : $hasText
          ? theme.color.buttonNormalPressed
          : theme.color.buttonDisabled};
`;

export const StyledRequiredLinkHint = styled.div`
  @media (max-width: 30rem) {
    /* Soomsil/Drawer/Web/body10 */
    font-family: 'Spoqa Han Sans Neo';
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 13px */
    letter-spacing: 0.25px;
  }

  ${({ theme }) => theme.typo.subtitle6}
  color: ${({ theme }) => theme.color.textPrimary};
  text-align: right;
  white-space: pre-wrap;
  margin-bottom: 1.25rem;
`;
