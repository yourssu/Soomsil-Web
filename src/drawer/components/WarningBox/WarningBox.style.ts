import styled from 'styled-components';

export const StyledContainer = styled.div`
  @media (max-width: 30rem) {
    padding-right: 0rem;
  }

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.06rem;
`;

interface StyledWarningBoxProps {
  $isWarned?: boolean;
}

export const StyledWarningBoxContainer = styled.div<StyledWarningBoxProps>`
  display: flex;
  align-items: center;
  gap: 1.27rem;

  width: 100%;
  height: 4.8125rem;
  padding-left: 1.35rem;

  background: ${({ theme }) => theme.color.buttonDisabledBG};

  border-radius: 0.75rem;
  border: 1px solid
    ${({ $isWarned, theme }) =>
      $isWarned ? theme.color.buttonWarned : theme.color.buttonDisabledBG};
`;

export const StyledWarningBoxText = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.button3};
`;
