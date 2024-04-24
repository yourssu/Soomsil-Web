import styled from 'styled-components';

export const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const StyledButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledBoxContainer = styled.section`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  border: 1px 0px 0px 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 22px 24px 22px 24px;
  width: Fixed (480px) px;
  width: 480px;
  height: Hug (267px) px;
  top: 342px;
  left: 720px;
  opacity: 0px;
  gap: 24px;
`;

export const StyledInputTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle3};
  padding-left: 4px;
  padding-bottom: 3px;
  color: #505458;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textSecondary};
  ${({ theme }) => theme.typo.title2};
  text-align: center;
  margin-bottom: 1rem;
`;

export const StyledInputContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInputRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.color.inputFieldElevated};
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
  height: 3rem;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 0.75rem 1rem;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.inputFieldElevated} inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.inputFieldElevated} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.color.textTertiary} !important;
  }
`;
export const StyledFailedInput = styled.input`
  width: 100%;
  border: 1px solid #ff5252;
  background-color: ${({ theme }) => theme.color.inputFieldElevated};
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.inputFieldElevated} inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.inputFieldElevated} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.color.textTertiary} !important;
  }
`;

export const StyledErrorMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.caption1};
  color: #ff5252;
  padding-top: 0.1rem;
`;

export const StyledLogo = styled.img`
  width: 180px;
`;
