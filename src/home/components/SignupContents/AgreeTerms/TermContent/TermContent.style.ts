import styled from 'styled-components';

export const StyledTermContentTitle = styled.p`
  ${({ theme }) => theme.typo.title3};
  margin-bottom: 0.8rem;
`;

export const StyledTermSectionHeading = styled.p`
  ${({ theme }) => theme.typo.subtitle3};
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const StyledTermParagraph = styled.p`
  ${({ theme }) => theme.typo.body2};
  margin-bottom: 2rem;
`;
