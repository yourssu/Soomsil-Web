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

export const StyledFileUploadLabel = styled.label`
  position: absolute;
  padding: 0.48rem 1.56rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.textPointed};
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textBright};
  @media (max-width: 30rem) {
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
  @media (max-width: 30rem) {
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

export const StyledDeleteFileBtn = styled.button`
  margin-top: 0.4rem;
  z-index: 1;
  @media (max-width: 30rem) {
    margin-top: 0rem;
    padding-right: 0.2rem;
  }
  float: right;
  padding-right: 0.5rem;
`;
