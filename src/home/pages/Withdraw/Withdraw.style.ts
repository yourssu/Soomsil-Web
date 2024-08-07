import styled, { css } from 'styled-components';

const Center = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  ${Center}
  gap: 24px;
`;

export const StyledWithdrawContainer = styled.div`
  ${Center}

  padding: 22px 24px;
  gap: 24px;
  width: 480px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const StyledTitleText = styled.p`
  ${({ theme }) => theme.typo.title2};
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const StyledSubTitleText = styled.p`
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.buttonNormal};
  align-self: self-start;
`;

export const StyledButtonText = styled.p`
  ${({ theme }) => theme.typo.button3};
  color: ${({ theme }) => theme.color.buttonDisabled};
`;

export const StyledLeft = styled.div`
  align-self: self-start;
`;

export const StyledText = styled.ul`
  ${({ theme }) => theme.typo.subtitle5};
  color: ${({ theme }) => theme.color.buttonNormal};
  list-style-type: disc;
  padding: 0px 24px;
`;

export const StyledListItem = styled.li`
  margin-bottom: 10px;
`;
