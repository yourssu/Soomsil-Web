import styled from 'styled-components';

export const StyledAgreeTermsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledAgreeTermsTitle = styled.div`
  ${({ theme }) => theme.typo.title2};
  text-align: center;
`;
