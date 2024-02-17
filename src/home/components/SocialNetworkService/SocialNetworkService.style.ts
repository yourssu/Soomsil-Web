import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.5rem;

  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const StyledIcon = styled(Link)<{ $image: string }>`
  background: url(${(props) => props.$image});
  width: 2.5rem;
  height: 2.5rem;
`;

export const StyledLine = styled.hr`
  width: 3.375rem;
  height: 0.0625rem;
  border: none;
  background: ${({ theme }) => theme.color.borderThin};
`;
