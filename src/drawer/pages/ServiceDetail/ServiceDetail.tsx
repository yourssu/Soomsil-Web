import { useRef } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  BoxButton,
  IcShareLine,
  IcStarLine,
  IconContext,
  IcStarFilled,
} from '@yourssu/design-system-react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { deleteBookmarked } from '@/drawer/apis/deleteBookmarked';
import { postBookmarked } from '@/drawer/apis/postBookmarked';
import carouselLeftButton from '@/drawer/assets/carousel_left_button.svg';
import carouselRightButton from '@/drawer/assets/carousel_right_button.svg';
import { MoreProductSection } from '@/drawer/components/MoreProductSection/MoreProductSection';
import { useGetProductDetail } from '@/drawer/hooks/useGetProductDetail';

import {
  StyledBackgroundImageContainer,
  StyledCategoryContainer,
  StyledCategoryHintText,
  StyledCategoryText,
  StyledIconButtonContainer,
  StyledIconLabelText,
  StyledServiceActionContainer,
  StyledServiceDetailContainer,
  StyledServiceDeveloperText,
  StyledServiceInfoContainer,
  StyledServiceTitleText,
  StyledThumbnailImage,
  StyledDescription,
  StyledDescriptionPart,
  StyledDescriptionSection,
  StyledProductImage,
  StyledCarousel,
  StyledSubtitle,
  StyledCarouselButton,
  StyledLowerSection,
} from './ServiceDetail.style';

const Category = {
  CAMPUS: '교내생활',
  HOBBY: '취미',
  HEALTH: '건강',
  IT: 'IT',
  KNOWLEDGE: '지식',
  LIFESTYLE: '라이프스타일',
  ETC: '기타',
};

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { product } = useGetProductDetail(Number(serviceId));
  const productUrls = [
    { url: product.webpageUrl, text: '웹페이지로 이동' },
    { url: product.appStoreUrl, text: 'App store로 다운로드' },
    { url: product.googlePlayUrl, text: 'Google play로 다운로드' },
    { url: product.githubUrl, text: 'GitHub' },
  ];
  const queryClient = useQueryClient();

  const theme = useTheme();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleCarouselClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLInputElement;
    const scrollAmount = 450;

    if (scrollRef.current) {
      const x = scrollRef.current!.scrollLeft;
      const scrollDirection = target.name === 'left' ? -scrollAmount : scrollAmount;

      scrollRef.current.scrollTo(x + scrollDirection, 0);
    }
  };

  const addBookmarkMutation = useMutation({
    mutationFn: postBookmarked,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['productDetail'] });
    },
  });

  const deleteBookmarkMutation = useMutation({
    mutationFn: deleteBookmarked,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['productDetail'] });
    },
  });

  return (
    <StyledServiceDetailContainer>
      <StyledBackgroundImageContainer $backgroundImage={product.thumbnail}>
        <StyledServiceTitleText>{product.productTitle}</StyledServiceTitleText>
        <StyledServiceDeveloperText>{product.providerName}</StyledServiceDeveloperText>
        <StyledServiceInfoContainer>
          <StyledThumbnailImage src={product.thumbnail} />
          <StyledCategoryContainer>
            <StyledCategoryText>{Category[product.category]}</StyledCategoryText>
            <StyledCategoryHintText>카테고리</StyledCategoryHintText>
          </StyledCategoryContainer>
        </StyledServiceInfoContainer>
        <StyledServiceActionContainer>
          {/* TODO: 버튼 사이즈 반응형 적용 필요 */}
          {productUrls.map(({ url, text }) => {
            return (
              url && (
                <BoxButton
                  size="medium"
                  rounding={8}
                  variant={url == product.githubUrl ? 'tinted' : 'filled'}
                  width="200px"
                  onClick={() => {
                    window.open(url);
                  }}
                >
                  {text}
                </BoxButton>
              )
            );
          })}
          <StyledIconButtonContainer>
            <button>
              <IconContext.Provider
                value={{
                  color: theme.color.pointViolet,
                  size: '1.5rem',
                }}
              >
                <IcShareLine />
              </IconContext.Provider>
            </button>
            <StyledIconLabelText $color={theme.color.pointViolet}>SHARE</StyledIconLabelText>
          </StyledIconButtonContainer>
          <StyledIconButtonContainer>
            <button>
              <IconContext.Provider
                value={{
                  color: theme.color.pointYellow,
                  size: '1.5rem',
                }}
              >
                {product.isBookmarked ? (
                  <IcStarFilled
                    onClick={() => deleteBookmarkMutation.mutate(product.productBookmarkKey)}
                  />
                ) : (
                  <IcStarLine
                    onClick={() => addBookmarkMutation.mutate(product.productBookmarkKey)}
                  />
                )}
              </IconContext.Provider>
            </button>
            <StyledIconLabelText $color={theme.color.pointYellow}>Recommend</StyledIconLabelText>
          </StyledIconButtonContainer>
        </StyledServiceActionContainer>
      </StyledBackgroundImageContainer>
      <StyledLowerSection>
        <StyledDescriptionSection>
          <StyledCarousel ref={scrollRef}>
            {product.introductionImage.length > 1 && (
              <>
                <StyledCarouselButton
                  $backgroundImage={carouselLeftButton}
                  $left={'-24px'}
                  type="button"
                  name="left"
                  onClick={handleCarouselClick}
                />
                <StyledCarouselButton
                  $backgroundImage={carouselRightButton}
                  $right={'-24px'}
                  type="button"
                  name="right"
                  onClick={handleCarouselClick}
                />
              </>
            )}
            {product.introductionImage.map((imageSrc) => (
              <StyledProductImage src={imageSrc} key={imageSrc} />
            ))}
          </StyledCarousel>
          <StyledDescriptionPart>
            <StyledSubtitle>{`추천`}</StyledSubtitle>
            <StyledDescription>
              {product.count}+
              <IconContext.Provider value={{ size: '15px', color: '#FDD655' }}>
                <IcStarFilled />
              </IconContext.Provider>
            </StyledDescription>
          </StyledDescriptionPart>

          <StyledDescriptionPart>
            <StyledSubtitle>{`서비스 소개`}</StyledSubtitle>
            <StyledDescription>{product.productContent}</StyledDescription>
          </StyledDescriptionPart>

          <StyledDescriptionPart>
            <StyledSubtitle>{`저작권`}</StyledSubtitle>
            <StyledDescription>{product.providerName}</StyledDescription>
          </StyledDescriptionPart>
        </StyledDescriptionSection>

        <MoreProductSection providerName={product.providerName} providerId={product.providerId} />
      </StyledLowerSection>
    </StyledServiceDetailContainer>
  );
};
