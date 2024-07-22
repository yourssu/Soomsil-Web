import styled from 'styled-components';

export const StyledButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledBoxContainer = styled.form`
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
  color: ${({ theme }) => theme.color.buttonNormal};
  ${({ theme }) => theme.typo.subtitle3};
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
