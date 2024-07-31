import styled from 'styled-components';

export const StyledOverviewContainer = styled.div`
  width: 81.25rem;
  display: flex;
  flex-direction: row;
  gap: 8.19rem;
  margin-top: 1.25rem;
  @media (max-width: 30rem) {
    width: 21.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const StyledOverviewTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface StyledOverviewProps {
  $isWarned?: boolean;
}

export const StyledOverviewTitle = styled.div<StyledOverviewProps>`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption0};
  }
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ $isWarned, theme }) =>
    $isWarned ? theme.color.buttonWarned : theme.color.textPrimary};
`;

export const StyledOverviewDescription = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 0.62rem;
`;

export const StyledImageUpload = styled.div`
  margin-top: 0.62rem;
  width: 62.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  @media (max-width: 30rem) {
    width: 21.875rem;
    gap: 0.75rem;
  }
`;
