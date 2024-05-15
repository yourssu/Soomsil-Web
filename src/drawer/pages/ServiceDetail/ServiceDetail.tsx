import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  BoxButton,
  IcShareLine,
  IcStarLine,
  IconContext,
  IcStarFilled,
  useToast,
  ToastDuration,
  Toast,
} from '@yourssu/design-system-react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { deleteBookmarked } from '@/drawer/apis/deleteBookmarked';
import { postBookmarked } from '@/drawer/apis/postBookmarked';
import { Description } from '@/drawer/components/ServiceDetailContents/Description/Description';
import { MoreProductSection } from '@/drawer/components/ServiceDetailContents/MoreProductSection/MoreProductSection';
import { CategoryObj } from '@/drawer/constants/category.constant';
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
  StyledLowerSection,
} from './ServiceDetail.style';

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

  const { showToast, isShowToast } = useToast();
  const toastProps = {
    children: 'URL이 복사되었습니다',
    duration: 'short' as ToastDuration,
  };

  const addBookmarkMutation = useMutation({
    mutationFn: postBookmarked,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['productDetail', product.productNo] });
    },
  });

  const deleteBookmarkMutation = useMutation({
    mutationFn: deleteBookmarked,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['productDetail', product.productNo] });
    },
  });

  const handleClickShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    showToast(toastProps.duration);
  };

  return (
    <StyledServiceDetailContainer>
      <StyledBackgroundImageContainer $backgroundImage={product.thumbnail}>
        <StyledServiceTitleText>{product.productTitle}</StyledServiceTitleText>
        <StyledServiceDeveloperText>{product.providerName}</StyledServiceDeveloperText>
        <StyledServiceInfoContainer>
          <StyledThumbnailImage src={product.thumbnail} />
          <StyledCategoryContainer>
            <StyledCategoryText>{CategoryObj[product.category]}</StyledCategoryText>
            <StyledCategoryHintText>카테고리</StyledCategoryHintText>
          </StyledCategoryContainer>
        </StyledServiceInfoContainer>
        <StyledServiceActionContainer>
          {/* TODO: 버튼 사이즈 반응형 적용 필요 */}
          {productUrls.map(({ url, text }) => {
            return (
              url && (
                <BoxButton
                  key={url}
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
                <IcShareLine onClick={handleClickShare} />
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
        <Description product={product} />
        {/* <MoreProductSection providerName={product.providerName} providerId={product.providerId} /> */}
      </StyledLowerSection>
      {isShowToast && <Toast {...toastProps} />}
    </StyledServiceDetailContainer>
  );
};
