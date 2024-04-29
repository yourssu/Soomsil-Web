import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Background from '@/assets/home/background.png';

export const StyledContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 12.5rem;

  background-image: url(${Background});
  background-size: cover;
  background-position: center -18.75rem;
`;

export const StyledLogoContainer = styled(Link)`
  display: flex;
  margin-left: 2.5rem;
`;

export const StyledSoomsilLogo = styled.img`
  position: absolute;
  top: -9.4375rem;
  left: 0;
  width: 180px;
  height: 38px;
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  position: relative;
`;
