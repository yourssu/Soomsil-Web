import styled from 'styled-components';

export const StyledServiceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-bottom: 10rem;
`;

interface StyledBackgroundImageContainerProps {
  $backgroundImage: string;
}

export const StyledBackgroundImageContainer = styled.div<StyledBackgroundImageContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55vh;
  justify-content: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$backgroundImage});
  /* TODO: 추후 반응형 적용 필요 */
  padding-left: 17%;
  padding-bottom: 3%;

  margin-bottom: 5rem;
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
  margin-top: 1.5rem;
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

export const StyledIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface StyledIconLabelTextProps {
  $color: string;
}

export const StyledIconLabelText = styled.span<StyledIconLabelTextProps>`
  /* TODO: 추후 폰트 변경 필요 */
  ${({ theme }) => theme.typo.button4}
  color: ${(props) => props.$color};
`;

export const StyledDescriptionSection = styled.div`
  display: grid;
  gap: 2rem;
  width: 52.5rem;
  height: fit-content;
`;

export const StyledCarousel = styled.div`
  display: flex;
  gap: 0.625rem;
  overflow-x: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledProductImage = styled.img`
  width: 27.5rem;
  height: 18.5rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  flex-shrink: 0;
  object-fit: cover;
`;

export const StyledDescriptionPart = styled.div`
  display: grid;
  gap: 0.875rem;
`;

export const StyledSubtitle = styled.p`
  ${({ theme }) => theme.typo.subtitle1};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledDescription = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.textSecondary};

  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const StyledMoreProductSection = styled.div`
  width: 24.8rem;
  height: fit-content;
  display: grid;
  gap: 2rem;
  padding: 0 0.5rem;
  margin-left: 5.25rem;

  /* Soomsil/Drawer/Web/title22 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 1.7875rem */
  color: ${({ theme }) => theme.color.textPrimary};
`;
