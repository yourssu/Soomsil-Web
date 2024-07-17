import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const StyledLogo = styled.img`
  width: 180px;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 22px 24px;
  gap: 24px;
  width: 480px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
`;
