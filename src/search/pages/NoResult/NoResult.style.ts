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
  word-break: break-all;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.color.textPointed};

  ${({ theme }) => theme.typo.title2}
`;

export const StyledNoResultDescription = styled.p`
  color: ${({ theme }) => theme.color.textPrimary};

  /* PC & Android/subtitle24 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.95rem */

  display: inline;
  white-space: nowrap;
`;

export const StyledModifySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StyledModifyDescription = styled.p`
  color: ${({ theme }) => theme.color.textTertiary};

  /* PC & Android/body18 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
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
`;

export const StyledCardDescriptionSection = styled.div`
  display: flex;
  gap: 1.25rem;
`;

interface StyledCardIconFrameProp {
  $index: number;
}

export const StyledCardIconFrame = styled.div<StyledCardIconFrameProp>`
  display: flex;
  width: 3.375rem;
  height: 3.375rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${(prop) => (prop.$index === 0 ? 'rgba(255, 44, 190, 0.1)' : '#ebe6fb')};
`;

export const StyledCardTextFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
`;

export const StyledCardLinkText = styled.a`
  color: ${({ theme }) => theme.color.textPrimary};

  ${({ theme }) => theme.typo.subtitle1}

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledCardLinkTextDescription = styled.p`
  color: ${({ theme }) => theme.color.textTertiary};

  /* PC & Android/body16 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.3rem */
`;
