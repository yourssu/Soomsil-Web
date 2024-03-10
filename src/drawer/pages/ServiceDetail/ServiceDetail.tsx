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

import carouselLeftButton from '@/drawer/assets/carousel_left_button.svg';
import carouselRightButton from '@/drawer/assets/carousel_right_button.svg';
import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';
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
  StyledMoreProductSection,
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
  const { isSuccess, data } = useGetProductDetail(Number(serviceId));

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

  return (
    <>
      {isSuccess && (
        <StyledServiceDetailContainer>
          <StyledBackgroundImageContainer $backgroundImage={data.detail.thumbnail}>
            <StyledServiceTitleText>{data.detail.productTitle}</StyledServiceTitleText>
            <StyledServiceDeveloperText>{data.detail.providerId}</StyledServiceDeveloperText>
            <StyledServiceInfoContainer>
              <StyledThumbnailImage src={data.detail.thumbnail} />
              <StyledCategoryContainer>
                <StyledCategoryText>{Category[data.detail.category]}</StyledCategoryText>
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
                  const { appStoreUrl, googlePlayUrl, webpageUrl } = data.detail;
                  window.open(appStoreUrl || googlePlayUrl || webpageUrl);
                }}
              >
                DOWNLOAD
              </BoxButton>
              {data.detail.githubUrl && (
                /* TODO: 버튼 사이즈 반응형 적용 필요*/
                <BoxButton
                  size="medium"
                  rounding={8}
                  variant="tinted"
                  width="200px"
                  onClick={() => {
                    window.open(data.detail.githubUrl);
                  }}
                >
                  Github
                </BoxButton>
              )}
              <StyledIconButtonContainer>
                <button>
                  {/* TODO: 추후 색상 변경 필요 */}
                  <IconContext.Provider
                    value={{
                      color: theme.color.violetItemPrimary,
                      size: '1.5rem',
                    }}
                  >
                    <IcShareLine />
                  </IconContext.Provider>
                </button>
                <StyledIconLabelText $color={theme.color.violetItemPrimary}>
                  SHARE
                </StyledIconLabelText>
              </StyledIconButtonContainer>
              <StyledIconButtonContainer>
                <button>
                  {/* TODO: 추후 색상 변경 필요 */}
                  <IconContext.Provider
                    value={{
                      color: '#FDD655',
                      size: '1.5rem',
                    }}
                  >
                    {data.detail.isBookmarked ? <IcStarFilled /> : <IcStarLine />}
                  </IconContext.Provider>
                </button>
                <StyledIconLabelText $color={'#FDD655'}>Recommend</StyledIconLabelText>
              </StyledIconButtonContainer>
            </StyledServiceActionContainer>
          </StyledBackgroundImageContainer>
          <StyledLowerSection>
            <StyledDescriptionSection>
              <StyledCarousel ref={scrollRef}>
                {data.detail.introductionImage.length > 1 && (
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
                {data.detail.introductionImage.map((imageSrc) => (
                  <StyledProductImage src={imageSrc} key={imageSrc} />
                ))}
              </StyledCarousel>
              <StyledDescriptionPart>
                <StyledSubtitle>{`추천`}</StyledSubtitle>
                <StyledDescription>
                  {data.detail.count}+
                  <IconContext.Provider value={{ size: '15px', color: '#FDD655' }}>
                    <IcStarFilled />
                  </IconContext.Provider>
                </StyledDescription>
              </StyledDescriptionPart>

              <StyledDescriptionPart>
                <StyledSubtitle>{`서비스 소개`}</StyledSubtitle>
                <StyledDescription>{data.detail.productContent}</StyledDescription>
              </StyledDescriptionPart>

              <StyledDescriptionPart>
                <StyledSubtitle>{`저작권`}</StyledSubtitle>
                <StyledDescription>{data.detail.providerId}</StyledDescription>
              </StyledDescriptionPart>
            </StyledDescriptionSection>
            <StyledMoreProductSection>
              {data.detail.providerId}의 서비스 더보기
              {Array.from({ length: 5 }).map(() => (
                <SmallDrawerCard
                  link={``}
                  title={`TITLE`}
                  body={data.detail.providerId}
                  bookmarkCount={999}
                  isBookmarked={true}
                />
              ))}
            </StyledMoreProductSection>
          </StyledLowerSection>
        </StyledServiceDetailContainer>
      )}
    </>
  );
};
