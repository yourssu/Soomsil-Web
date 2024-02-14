import styled from 'styled-components';

export const StyledServiceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface StyledBackgroundImageContainerProps {
  $backgroundImage: string;
}

export const StyledBackgroundImageContainer = styled.div<StyledBackgroundImageContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  justify-content: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$backgroundImage});
`;

export const StyledServiceTitleText = styled.h1`
  /* TODO: 추후 폰트 변경 필요 */
  ${({ theme }) => theme.typo.title1}
  color: ${({ theme }) => theme.color.textBright};
`;

export const StyledServiceDeveloperText = styled.h2`
  /* TODO: 추후 폰트 변경 필요 */
  ${({ theme }) => theme.typo.subtitle3}
  color: ${({ theme }) => theme.color.textBright};
`;

export const StyledServiceInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
`;

export const StyledThumbnailImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
`;

export const StyledCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledCategoryText = styled.span`
  ${({ theme }) => theme.typo.button2}
  color: ${({ theme }) => theme.color.textBright};
`;

export const StyledCategoryHintText = styled.span`
  ${({ theme }) => theme.typo.button4}
  color: ${({ theme }) => theme.color.textTertiary};
`;

export const StyledServiceActionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;
