import styled from 'styled-components';

export const StyledTextFieldLabel = styled.div`
  ${({ theme }) => theme.typo.subtitle3};
  margin-bottom: 11px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    width: 100%;
  }
`;

export const StyledPlainButtonWrapper = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledEmailSuffix = styled.div`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.textTertiary};
`;

export const StyledEmailFieldWrapper = styled.div`
  ${({ theme }) => theme.typo.body1};
`;

export const StyledLink = styled.a`
  ${({ theme }) => theme.typo.button3};
  color: inherit;
  &:visited {
    color: inherit;
  }
`;
