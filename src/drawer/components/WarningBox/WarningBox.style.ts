import styled from 'styled-components';

export const StyledContainer = styled.div`
  @media (max-width: 30rem) {
    padding-right: 0rem;
  }

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.06rem;
  margin: 2rem 0;
  padding-right: 1.2rem;
`;

interface StyledWarningBoxProps {
  $isWarned?: boolean;
}

export const StyledWarningBoxContainer = styled.div<StyledWarningBoxProps>`
  width: 62.5rem;
  height: 4.8125rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.color.buttonDisabledBG};
  border: 1px solid
    ${({ $isWarned, theme }) =>
      $isWarned ? theme.color.buttonWarned : theme.color.buttonDisabledBG};
  padding-left: 1.35rem;
  display: flex;
  flex-direction: row;
  gap: 1.27rem;
  align-items: center;
`;

export const StyledWarningBoxText = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.button3};
`;
