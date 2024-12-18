import styled from 'styled-components';

export const StyledContainer = styled.section`
  min-width: 100%;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const StyledTitleSection = styled.div`
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.p`
  color: ${({ theme }) => theme.color.textPrimary};
  ${({ theme }) => theme.typo.subtitle3};

  span {
    color: var(--logoLightBlue, #5865f2);
    font-weight: 700;
  }
`;

export const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.button3};
`;

export const StyledArticleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.19rem;
`;
