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
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.$backgroundImage});
  filter: brightness(40%);
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
