import styled from 'styled-components';

export const StyledTermContentContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.buttonDisabled};
  border-radius: 8px;
  padding: 8px 16px;
`;

export const StyledTermContentTitle = styled.p`
  ${({ theme }) => theme.typo.title4};
  margin-bottom: 0.8rem;
`;

export const StyledTermSectionHeading = styled.p`
  ${({ theme }) => theme.typo.subtitle4};
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const StyledTermParagraph = styled.p`
  ${({ theme }) => theme.typo.body3};
  margin-bottom: 2rem;
`;
