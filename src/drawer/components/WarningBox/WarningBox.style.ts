import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.06rem;
  margin-bottom: 2rem;
`;

export const StyledWarningBoxContainer = styled.div`
  width: 62.5rem;
  height: 4.8125rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.color.buttonDisabledBG};
  margin-left: 18.69rem;
  padding-left: 1.35rem;
  display: flex;
  flex-direction: row;
  gap: 1.27rem;
  align-items: center;
`;

export const StyledWarningBoxText = styled.div`
  ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.button3}
`;
