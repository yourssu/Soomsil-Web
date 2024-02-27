import styled from 'styled-components';

export const StyledOverviewContainer = styled.div`
  width: 81.25rem;
  display: flex;
  flex-direction: row;
  gap: 8.19rem;
  margin-bottom: 3.25rem;
  @media (max-width: 24.375rem) {
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
  @media (max-width: 24.375rem) {
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
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media (max-width: 24.375rem) {
    gap: 2.2rem;
  }
`;

export const StyledFileUploadLabel = styled.label`
  position: absolute;
  padding: 0.48rem 1.56rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.textPointed};
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textBright};
  @media (max-width: 24.375rem) {
    padding: 0.25rem 1rem;
    font-family: 'Apple SD Gothic Neo';
    font-size: 0.625rem;
  }
`;

export const StyledOverviewUpload = styled.label`
  z-index: -999;
  position: absolute;
  width: 62.5rem;
  height: 2rem;
  border-radius: 0.5rem;
  padding-top: 0.48rem;
  padding-bottom: 0.48rem;
  padding-left: 6.88rem;
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textPrimary};
  border: 1px solid ${({ theme }) => theme.color.buttonDisabled};
  @media (max-width: 24.375rem) {
    width: 21.875rem;
    height: 1.3125rem;
    font-size: 0.625rem;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.01563rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 4.8rem;
  }
`;
