import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 3.5rem 20rem;
`;

export const StyledRequiredHint = styled.div`
  ${({ theme }) => theme.typo.subtitle6}
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
  gap: 1.25rem;
`;

interface StyledInputProps {
  $isWarned?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme }) => theme.typo.subtitle3}

  color: ${({ $isWarned = false, theme }) =>
    $isWarned ? theme.color.textWarned : theme.color.textPrimary};

  width: 100%;
  padding: 0.375rem;
  border-bottom: 2px solid
    ${({ $isWarned = false, theme }) =>
      $isWarned ? theme.color.textWarned : theme.color.buttonNormalPressed};

  background-color: transparent;
  caret-color: ${({ theme }) => theme.color.textPointed};
`;
