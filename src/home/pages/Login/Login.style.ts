import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
`;

export const StyledLoginContainer = styled.section`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 1.38rem 1.5rem;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textSecondary};
  ${({ theme }) => theme.typo.title2};
  text-align: center;
`;

export const StyledLabel = styled.div`
  color: ${({ theme }) => theme.color.textSecondary};
  ${({ theme }) => theme.typo.subtitle3};
`;

export const StyledInputContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.5rem;
`;
export const StyledButtonLabel = styled(Link)`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.button3};
`;
export const StyledButtonDivider = styled.div`
  color: ${({ theme }) => theme.color.textTertiary};
  /* wd web/Body3 R */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
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
  border-top-left-radius: 0.5rem;
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
export const StyledFailedLeftInput = styled.input`
  width: 100%;
  border-left: 1px solid #ff5252;
  border-top: 1px solid #ff5252;
  border-bottom: 1px solid #ff5252;
  background-color: ${({ theme }) => theme.color.inputFieldElevated};
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
  height: 3rem;
  border-radius: 0.5rem 0 0 0.5rem;
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
export const StyledFailedInputSuffix = styled.div`
  background-color: ${({ theme }) => theme.color.inputFieldElevated};
  border: 1px solid #ff5252;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
  height: 3rem;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.75rem 1rem;
`;
export const StyledFailedRightInputSuffix = styled.div`
  background-color: ${({ theme }) => theme.color.inputFieldElevated};
  border-right: 1px solid #ff5252;
  border-top: 1px solid #ff5252;
  border-bottom: 1px solid #ff5252;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
  height: 3rem;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.75rem 1rem;
`;
export const StyledInputSuffix = styled.div`
  background-color: ${({ theme }) => theme.color.inputFieldElevated};
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
  height: 3rem;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.75rem 1rem;
`;

export const StyledBottomContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0 2.25rem;
  gap: 2.25rem;
`;
export const StyledErrorMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.caption1};
  color: #ff5252;
  padding-top: 0.5rem;
`;
export const StyledLoginButtonContainer = styled.section`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`;
