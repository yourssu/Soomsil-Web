import { BoxButton, IcShareLine, IcStarLine, IconContext } from '@yourssu/design-system-react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import backgroundImage from '@/assets/service_detail_background.png';

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
} from './ServiceDetail.style';

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const theme = useTheme();

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
    </StyledServiceDetailContainer>
  );
};
