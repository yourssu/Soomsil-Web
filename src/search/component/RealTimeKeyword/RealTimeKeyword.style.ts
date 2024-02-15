import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  width: 25rem;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: var(--0, 1px) solid var(--border-borderNormal, rgba(16, 17, 18, 0.1));
  background: ${({ theme }) => theme.color.bgNormal};
`;

export const StyledHeader = styled.div`
  display: flex;
  position: relative;
  padding: 0.5rem;
`;

export const StyledHeaderTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const StyledHeaderTitle = styled.span`
  color: ${({ theme }) => theme.color.textPrimary};

  ${({ theme }) => theme.typo.subtitle1};
`;

export const StyledHeaderTime = styled.span`
  color: ${({ theme }) => theme.color.textTertiary};

  ${({ theme }) => theme.typo.body2}
`;

export const StyledHeaderImageSection = styled.img`
  width: 12.6875rem;
  height: 8.5rem;

  position: absolute;
  right: -1.25rem;
  top: -3.125rem;
`;

export const StyledListItemText = styled.p`
  color: ${({ theme }) => theme.color.textPrimary};

  /* PC & Android/body18 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

interface StyledListItemRankingProp {
  rankingNumber: number;
}

export const StyledListItemRanking = styled.span<StyledListItemRankingProp>`
  color: ${(prop) => (prop.rankingNumber < 4 ? '#8a2ac5' : '#8E9398')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-right: 1rem;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`;
