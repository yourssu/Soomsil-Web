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

   ${({ theme }) => theme.typo.title3}
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.caption0};
`;
