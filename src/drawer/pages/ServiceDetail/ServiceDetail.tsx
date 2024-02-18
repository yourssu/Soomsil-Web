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

import backgroundImage from '@/assets/service_detail_background.png';
import carouselLeftButton from '@/drawer/assets/carousel_left_button.svg';
import carouselRightButton from '@/drawer/assets/carousel_right_button.svg';
import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';

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

export const ServiceDetail = () => {
  const { serviceId } = useParams();
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
    <StyledServiceDetailContainer>
      <StyledBackgroundImageContainer $backgroundImage={backgroundImage}>
        <StyledServiceTitleText>TITLE</StyledServiceTitleText>
        <StyledServiceDeveloperText>Developer</StyledServiceDeveloperText>
        <StyledServiceInfoContainer>
          <StyledThumbnailImage src={backgroundImage} />
          <StyledCategoryContainer>
            <StyledCategoryText>학교생활</StyledCategoryText>
            <StyledCategoryHintText>카테고리</StyledCategoryHintText>
          </StyledCategoryContainer>
        </StyledServiceInfoContainer>
        <StyledServiceActionContainer>
          {/* TODO: 버튼 사이즈 반응형 적용 필요 */}
          <BoxButton size="medium" rounding={8} variant="filled" width="200px">
            DOWNLOAD
          </BoxButton>
          {/* TODO: 버튼 사이즈 반응형 적용 필요*/}
          <BoxButton size="medium" rounding={8} variant="tinted" width="200px">
            Github
          </BoxButton>
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
            <StyledIconLabelText $color={theme.color.violetItemPrimary}>SHARE</StyledIconLabelText>
          </StyledIconButtonContainer>
          <StyledIconButtonContainer>
            <button>
              {/* TODO: 추후 색상 변경 필요 */}
              <IconContext.Provider
                value={{
                  color: theme.color.limeItemPrimary,
                  size: '1.5rem',
                }}
              >
                <IcStarLine />
              </IconContext.Provider>
            </button>
            <StyledIconLabelText $color={theme.color.limeItemPrimary}>
              Recommend
            </StyledIconLabelText>
          </StyledIconButtonContainer>
        </StyledServiceActionContainer>
      </StyledBackgroundImageContainer>
      <StyledLowerSection>
        <StyledDescriptionSection>
          <StyledCarousel ref={scrollRef}>
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
            {Array.from({ length: 3 }).map(() => (
              <StyledProductImage src={backgroundImage} />
            ))}
          </StyledCarousel>
          <StyledDescriptionPart>
            <StyledSubtitle>{`추천`}</StyledSubtitle>
            <StyledDescription>
              {`999`}+
              <IconContext.Provider value={{ size: '15px', color: '#FDD655' }}>
                <IcStarFilled />
              </IconContext.Provider>
            </StyledDescription>
          </StyledDescriptionPart>

          <StyledDescriptionPart>
            <StyledSubtitle>{`서비스 소개`}</StyledSubtitle>
            <StyledDescription>{`service`}</StyledDescription>
          </StyledDescriptionPart>

          <StyledDescriptionPart>
            <StyledSubtitle>{`저작권`}</StyledSubtitle>
            <StyledDescription>{`Yourssu`}</StyledDescription>
          </StyledDescriptionPart>
        </StyledDescriptionSection>
        <StyledMoreProductSection>
          {`제작자`}의 서비스 더보기
          {Array.from({ length: 5 }).map(() => (
            <SmallDrawerCard
              link={``}
              title={`TITLE`}
              body={`제작자`}
              bookmarkCount={999}
              isBookmarked={true}
            />
          ))}
        </StyledMoreProductSection>
      </StyledLowerSection>
    </StyledServiceDetailContainer>
  );
};
