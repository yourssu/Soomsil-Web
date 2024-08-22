import styled from 'styled-components';

export const StyledProductImage = styled.img`
  flex-shrink: 0;
  width: 440px;
  height: 296px;
  border-radius: 0.5rem;
  margin: 0 auto;
  object-fit: cover;
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
  $left?: string;
  $right?: string;
}

export const StyledCarouselButton = styled.img<StyledCarouselButtonProps>`
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
