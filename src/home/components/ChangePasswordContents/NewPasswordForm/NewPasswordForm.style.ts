import { SimpleTextField } from '@yourssu/design-system-react';
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
`;

export const StyledBoxContainer = styled.section`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 22px 24px;
  width: 480px;
  top: 342px;
  left: 720px;
  gap: 24px;
`;

export const StyledInputTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle3};
  ${({ theme }) => theme.color.buttonNormal};
  padding: 11px 4px 3px 4px;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textSecondary};
  ${({ theme }) => theme.typo.title2};
  text-align: center;
`;

export const StyledInputContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const StyledInputAnimation = styled.article`
  transition:
    visibility 0s 0.5s,
    opacity 0.5s ease,
    max-height 0.5s ease;
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  overflow: hidden;

  &.active {
    margin-top: 1rem;
    visibility: visible;
    opacity: 1;
    max-height: 150px;
    transition-delay: 0s;
  }
`;

export const StyledInput = styled(SimpleTextField)`
  width: 100%;
  height: 3rem;
`;

export const StyledErrorMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.caption1};
  color: ${({ theme }) => theme.color.textWarned};
`;

export const StyledLogo = styled.img`
  width: 180px;
`;
