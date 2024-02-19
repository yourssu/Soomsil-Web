import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.p`
  ${({ theme }) => theme.color.textPrimary}

  /* PC & Android/subtitle24 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
`;
