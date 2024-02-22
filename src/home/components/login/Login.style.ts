import { NavLink } from 'react-router-dom';
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
  padding-top: 1.38rem;
  padding-bottom: 1.38rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  gap: 1.5rem;
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
`;
export const StyledButtonLabel = styled(NavLink)`
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
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;
export const StyledInputSuffix = styled.div`
  background-color: ${({ theme }) => theme.color.inputFieldElevated};
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
  height: 3rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const StyledBottomContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding-right: 2.25rem;
  padding-left: 2.25rem;
  gap: 2.25rem;
`;
