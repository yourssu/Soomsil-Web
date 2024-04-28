import { SimpleTextField } from '@yourssu/design-system-react';
import styled from 'styled-components';

export const StyledContainer = styled.article`
  width: fit-content;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 1.5rem;
`;

export const StyledBoxContainer = styled.section`
  margin-top: 2rem;
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
`;

export const StyledInputTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle3};
  color: #505458;
  padding-left: 4px;
  padding-bottom: 3px;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textSecondary};
  ${({ theme }) => theme.typo.title2};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const StyledInputContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInput = styled(SimpleTextField)`
  width: 100%;
  height: 3rem;
  padding: 0.75rem 1rem;
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
