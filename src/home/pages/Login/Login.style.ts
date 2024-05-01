import styled from 'styled-components';

export const StyledLoginContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledBottomButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBottomButtonWrapper = styled.div`
  ${({ theme }) => theme.typo.button3};
`;

export const StyledButtonButtonSeparator = styled.div`
  color: ${({ theme }) => theme.color.textTertiary};
`;
