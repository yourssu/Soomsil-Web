import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledTabWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80rem;
  height: 4.625rem;
`;

export const StyledDescription = styled.p`
  ${({ theme }) => theme.color.textPrimary};
  width: 80rem;

  /* PC & Android/subtitle24 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
