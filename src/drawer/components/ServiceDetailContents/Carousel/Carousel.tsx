import { useRef } from 'react';

import carouselLeftButton from '@/drawer/assets/carousel_left_button.svg';
import carouselRightButton from '@/drawer/assets/carousel_right_button.svg';
import { ProductDetailResult } from '@/drawer/types/product.type';

import { StyledProductImage, StyledCarousel, StyledCarouselButton } from './Carousel.style';

export const Carousel = ({ introductionImage }: Pick<ProductDetailResult, 'introductionImage'>) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleCarouselClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLInputElement;
    const scrollAmount = 450;

    if (scrollRef.current) {
      const x = scrollRef.current!.scrollLeft;
      const scrollDirection = target.dataset.direction === 'left' ? -scrollAmount : scrollAmount;

      scrollRef.current.scrollTo(x + scrollDirection, 0);
    }
  };

  return (
    <StyledCarousel ref={scrollRef}>
      {introductionImage.length > 1 && (
        <>
          <StyledCarouselButton
            $left={'-24px'}
            data-direction="left"
            onClick={handleCarouselClick}
            title={'carousel-left-button'}
          >
            <img src={carouselLeftButton} alt={'carousel-left-img'} />
          </StyledCarouselButton>
          <StyledCarouselButton
            $right={'-24px'}
            data-direction="right"
            onClick={handleCarouselClick}
            title={'carousel-right-button'}
          >
            <img src={carouselRightButton} alt={'carousel-right-img'} />
          </StyledCarouselButton>
        </>
      )}
      {introductionImage.map((imageSrc) => (
        <StyledProductImage src={imageSrc} key={imageSrc} />
      ))}
    </StyledCarousel>
  );
};
