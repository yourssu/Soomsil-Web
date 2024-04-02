import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8.56rem;
`;

export const StyledProviderContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3.37rem;
  margin-bottom: 4rem;
`;

export const StyledProviderName = styled.p`
  color: ${({ theme }) => theme.color.textPrimary};
  width: 80rem;

  /* Soomsil/Drawer/Web/title22 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 28.6px */
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.caption0};
`;
