import styled from 'styled-components';

export const StyledSignupContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledSignupContentTitle = styled.div`
  ${({ theme }) => theme.typo.title2};
  text-align: center;
`;

export const StyledSignupButtonText = styled.div`
  ${({ theme }) => theme.typo.button0};
`;
