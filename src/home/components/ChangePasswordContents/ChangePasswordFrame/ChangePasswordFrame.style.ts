import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledChangePasswordFrame = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  //실수..
  margin-bottom: 101px;
`;

export const StyledLink = styled(Link)`
  width: 180px;
  height: 29px;
`;

export const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
