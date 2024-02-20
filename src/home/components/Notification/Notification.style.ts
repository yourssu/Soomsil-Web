import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100vw;
  background: #e7ecf6;
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 66rem;
  padding: 1.4375rem 0.5rem;
  margin: 0 auto;
`;

export const StyledNotificationContainer = styled.div`
  width: 100%;
  height: 26px;

  text-align: left;
  overflow: hidden;
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledNotification = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.typo.subtitle1};
`;
