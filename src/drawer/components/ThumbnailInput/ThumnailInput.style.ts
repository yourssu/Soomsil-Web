import styled from 'styled-components';

export const StyledThumbnailContainer = styled.div`
  width: 81.25rem;
  display: flex;
  flex-direction: row;
  gap: 10.69rem;
  margin-top: 1.24rem;
  @media (max-width: 30rem) {
    width: 21.875rem;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0rem;
  }
  align-items: center;
`;

export const StyledThumbnailTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface StyledThumnailProps {
  $isWarned?: boolean;
}

export const StyledThumbnailTitle = styled.div<StyledThumnailProps>`
  @media (max-width: 30rem) {
    ${({ theme }) => theme.typo.caption0};
    width: 2.625rem;
  }
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ $isWarned, theme }) =>
    $isWarned ? theme.color.buttonWarned : theme.color.textPrimary};
`;

export const StyledThumbnailDescription = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: 0.62rem;
`;

export const StyledThumbnailNone = styled.label`
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 1.875rem;
  border: 1px solid ${({ theme }) => theme.color.buttonPoint};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 30rem) {
    margin: 3.0625rem 0.75rem 0 0.75rem;
  }
`;

export const StyledThumnailPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
