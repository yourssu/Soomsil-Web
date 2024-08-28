import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex-shrink: 0;
`;

export const StyledNoResultKeyword = styled.span`
  ${({ theme }) => theme.typo.title2}
  color: ${({ theme }) => theme.color.textPointed};
`;

export const StyledNoResultDescription = styled.p`
  ${({ theme }) => theme.typo.subtitle2}
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledModifySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StyledModifyDescription = styled.p`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.textTertiary};
`;

export const StyledCard = styled.div`
  display: flex;
  width: 49.9375rem;
  height: auto;

  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  background: ${({ theme }) => theme.color.bgNormal};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCardDescriptionSection = styled.div`
  display: flex;
  gap: 1.25rem;
`;

interface StyledCardIconFrameProp {
  $type: 'request' | 'edit';
}

export const StyledCardIconFrame = styled.div<StyledCardIconFrameProp>`
  display: flex;
  width: 3.375rem;
  height: 3.375rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ $type }) => ($type === 'request' ? 'rgba(255, 44, 190, 0.1)' : '#ebe6fb')};
`;

export const StyledCardTextFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
`;

export const StyledCardTitle = styled.span`
  ${({ theme }) => theme.typo.subtitle3}
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledCardDescription = styled.p`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.textTertiary};
`;
