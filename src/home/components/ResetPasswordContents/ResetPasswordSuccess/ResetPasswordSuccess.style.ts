import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitleText = styled.p`
  ${({ theme }) => theme.typo.title2}
`;

export const StyledSubTitleText = styled.p`
  ${({ theme }) => theme.typo.subtitle3}
  text-align: center;
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;
