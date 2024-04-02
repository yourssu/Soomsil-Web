import styled from 'styled-components';

interface StyledNotificationArrayProps {
  $length: number;
  $currentIndex: number;
  $active: boolean;
}

export const StyledContainer = styled.div`
  width: 100vw;
  background: #e7ecf6;
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  max-width: 66rem;
  padding: 1.4375rem 0.5rem;
  margin: 0 auto;
`;

export const StyledNotificationContainer = styled.div`
  width: 100%;
  height: 1.625rem;

  text-align: left;
  overflow: hidden;
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledNotificationArray = styled.div<StyledNotificationArrayProps>`
  height: ${(props) => `${1.625 * props.$length}rem`};
  transform: ${(props) => `translateY(${-1.625 * props.$currentIndex}rem)`};
  transition: ${(props) => (props.$active ? 'all 500ms ease' : 'none')};
`;

export const StyledNotification = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.typo.subtitle3};
`;
