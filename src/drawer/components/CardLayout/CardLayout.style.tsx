import styled from 'styled-components';

export const StyledCardLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25.5rem);
  gap: 1.75rem;
  margin-top: 2rem;
`;

export const StyledNotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const StyledNotTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const StyledNotImg = styled.img`
  width: 9.375rem;
  height: 11.16525rem;
`;

export const StyledNotTextBold = styled.div`
  margin-top: 5.62rem;
  ${({ theme }) => theme.typo.subtitle1}
`;
