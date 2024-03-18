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
  padding-left: 17vw;
  padding-bottom: 5vh;

  margin-bottom: 5rem;
`;

export const StyledServiceTitleText = styled.h1`
  /* TODO: 추후 폰트 변경 필요 */
  /* Soomsil/Drawer/Web/title64 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  color: ${({ theme }) => theme.color.textBright};
`;

export const StyledServiceDeveloperText = styled.h2`
  /* TODO: 추후 폰트 변경 필요 */
  /* Soomsil/Drawer/Web/subtitle32 */
  font-family: 'Spoqa Han Sans Neo';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 44.8px */
  color: ${({ theme }) => theme.color.textPointed};
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

export const StyledLowerSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 0 1rem;
`;

export const StyledDescriptionSection = styled.div`
  display: grid;
  gap: 2rem;
  width: 52.5rem;
  height: fit-content;
  position: relative;
`;

export const StyledCarousel = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  scroll-behavior: smooth;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface StyledCarouselButtonProps {
  $backgroundImage: string;
  $left?: string;
  $right?: string;
}

export const StyledCarouselButton = styled.input<StyledCarouselButtonProps>`
  background-image: url(${(props) => props.$backgroundImage});
  background-color: transparent;

  width: 3rem;
  height: 3rem;

  position: absolute;
  top: 120px;
  left: ${(props) => props.$left && props.$left};
  right: ${(props) => props.$right && props.$right};

  border: none;
  border-radius: 24px;
  cursor: pointer;
`;

export const StyledProductImage = styled.img`
  width: 440px;
  height: 296px;
  border-radius: 0.5rem;
  margin: 0 auto;
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
