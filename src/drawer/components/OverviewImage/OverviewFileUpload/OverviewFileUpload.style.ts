import styled from 'styled-components';

import { Z_INDEX } from '@/constants/zIndex.constant';

export const StyledFileUploadLabel = styled.label`
  position: absolute;
  padding: 0.48rem 1.56rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.textPointed};
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textBright};
  @media (max-width: 30rem) {
    padding: 0.25rem 1rem;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 0.625rem;
  }
`;

export const StyledOverviewUpload = styled.label`
  z-index: ${Z_INDEX.fileUploadLabel};
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
  @media (max-width: 30rem) {
    margin-top: 0.05rem;
    padding-right: 0.2rem;
  }
  float: right;
  padding-right: 0.5rem;
`;
