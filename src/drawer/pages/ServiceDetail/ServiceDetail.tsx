import { useRef } from 'react';

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
  const { isSuccess, refetch, data } = useGetProductDetail(Number(serviceId));

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

  const handleBookmarkClick = (bookmarkedkey: number | undefined) => {
    postBookmarked(bookmarkedkey).then(() => {
      refetch();
    });
  };

  const handleBookmarkDeleteClick = (bookmarkedkey: number | undefined) => {
    deleteBookmarked(bookmarkedkey).then(() => {
      refetch();
    });
  };

  return (
    <>
      {isSuccess && data && (
        <StyledServiceDetailContainer>
          <StyledBackgroundImageContainer $backgroundImage={data.thumbnail}>
            <StyledServiceTitleText>{data.productTitle}</StyledServiceTitleText>
            <StyledServiceDeveloperText>{data.providerId}</StyledServiceDeveloperText>
            <StyledServiceInfoContainer>
              <StyledThumbnailImage src={data.thumbnail} />
              <StyledCategoryContainer>
                <StyledCategoryText>{Category[data.category]}</StyledCategoryText>
                <StyledCategoryHintText>카테고리</StyledCategoryHintText>
              </StyledCategoryContainer>
            </StyledServiceInfoContainer>
            <StyledServiceActionContainer>
              {/* TODO: 버튼 사이즈 반응형 적용 필요 */}
              <BoxButton
                size="medium"
                rounding={8}
                variant="filled"
                width="200px"
                onClick={() => {
                  const { appStoreUrl, googlePlayUrl, webpageUrl } = data;
                  window.open(appStoreUrl || googlePlayUrl || webpageUrl);
                }}
              >
                DOWNLOAD
              </BoxButton>
              {data.githubUrl && (
                /* TODO: 버튼 사이즈 반응형 적용 필요*/
                <BoxButton
                  size="medium"
                  rounding={8}
                  variant="tinted"
                  width="200px"
                  onClick={() => {
                    window.open(data.githubUrl);
                  }}
                >
                  Github
                </BoxButton>
              )}
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
                    {data.isBookmarked ? (
                      <IcStarFilled
                        onClick={() => handleBookmarkDeleteClick(data.productBookmarkKey)}
                      />
                    ) : (
                      <IcStarLine onClick={() => handleBookmarkClick(data.productBookmarkKey)} />
                    )}
                  </IconContext.Provider>
                </button>
                <StyledIconLabelText $color={theme.color.pointYellow}>
                  Recommend
                </StyledIconLabelText>
              </StyledIconButtonContainer>
            </StyledServiceActionContainer>
          </StyledBackgroundImageContainer>
          <StyledLowerSection>
            <StyledDescriptionSection>
              <StyledCarousel ref={scrollRef}>
                {data.introductionImage.length > 1 && (
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
                {data.introductionImage.map((imageSrc) => (
                  <StyledProductImage src={imageSrc} key={imageSrc} />
                ))}
              </StyledCarousel>
              <StyledDescriptionPart>
                <StyledSubtitle>{`추천`}</StyledSubtitle>
                <StyledDescription>
                  {data.count}+
                  <IconContext.Provider value={{ size: '15px', color: '#FDD655' }}>
                    <IcStarFilled />
                  </IconContext.Provider>
                </StyledDescription>
              </StyledDescriptionPart>

              <StyledDescriptionPart>
                <StyledSubtitle>{`서비스 소개`}</StyledSubtitle>
                <StyledDescription>{data.productContent}</StyledDescription>
              </StyledDescriptionPart>

              <StyledDescriptionPart>
                <StyledSubtitle>{`저작권`}</StyledSubtitle>
                <StyledDescription>{data.providerId}</StyledDescription>
              </StyledDescriptionPart>
            </StyledDescriptionSection>

            <MoreProductSection providerId={data.providerId} />
          </StyledLowerSection>
        </StyledServiceDetailContainer>
      )}
    </>
  );
};
