import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 3.5rem 20rem;
`;

export const StyledRequiredHint = styled.div`
  ${({ theme }) => theme.typo.subtitle6}
  color: ${({ theme }) => theme.color.textPrimary};
  text-align: right;
`;

export const StyledForm = styled.form`
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
  ${({ theme }) => theme.typo.button4}

  color: ${({ $isWarned = false, theme }) =>
    $isWarned ? theme.color.textWarned : theme.color.textSecondary};
  caret-color: ${({ theme }) => theme.color.textPointed};

  width: 100%;
  resize: none;

  background-color: transparent;

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
  ${({ theme }) => theme.typo.subtitle6}
  color: ${({ theme }) => theme.color.textPrimary};
  text-align: right;
  margin-bottom: 1.25rem;
`;
