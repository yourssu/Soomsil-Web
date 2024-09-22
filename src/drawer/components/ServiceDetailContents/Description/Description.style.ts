import styled from 'styled-components';

export const StyledDescriptionSection = styled.div`
  display: grid;
  gap: 2rem;
  width: 52.5rem;
  height: fit-content;
  position: relative;
`;

export const StyledDescriptionPart = styled.div`
  display: grid;
  gap: 0.875rem;
`;

export const StyledSubtitle = styled.p`
  ${({ theme }) => theme.typo.subtitle1};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledDescription = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.textSecondary};

  display: flex;
  align-items: center;
  padding: 0 1rem;
`;
