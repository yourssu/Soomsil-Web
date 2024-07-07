import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8.56rem;
`;

interface StyledRankingCategoryContainerProps {
  $isSmallDesktop?: boolean;
}

export const StyledRankingContainer = styled.section<StyledRankingCategoryContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: ${({ $isSmallDesktop }) => ($isSmallDesktop ? '0' : '3.37rem')};
  margin-bottom: 4rem;
`;

export const StyledCardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 25.5rem);
  gap: 1.75rem;
  margin-top: 2rem;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 22.125rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const StyledTitle = styled.span`
  /* 폰트 논의 픽스 전까지 임시로 작업합니다. */

  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledDescription = styled.span`
  ${({ theme }) => theme.typo.caption0};
  color: ${({ theme }) => theme.color.textTertiary};
`;
