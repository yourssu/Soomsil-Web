import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  BoxButton,
  IcShareLine,
  IcStarLine,
  IconContext,
  IcStarFilled,
  useToast,
  Toast,
} from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import { deleteBookmarked } from '@/drawer/apis/deleteBookmarked';
import { postBookmarked } from '@/drawer/apis/postBookmarked';
import { ProductDetailResult } from '@/drawer/types/product.type';

import {
  StyledIconButtonContainer,
  StyledIconLabelText,
  StyledServiceActionContainer,
} from './ServiceAction.style';

export const ServiceAction = ({ product }: { product: ProductDetailResult }) => {
  const productUrls = [
    { url: product.webpageUrl, text: '웹페이지로 이동' },
    { url: product.appStoreUrl, text: 'App store로 다운로드' },
    { url: product.googlePlayUrl, text: 'Google play로 다운로드' },
    { url: product.githubUrl, text: 'GitHub' },
  ];

  const theme = useTheme();

  const queryClient = useQueryClient();

  const { showToast, isShowToast } = useToast();
  const toastProps = {
    children: 'URL이 복사되었습니다',
    duration: 'short',
  } as const;

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
    <>
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
      {isShowToast && <Toast {...toastProps} />}
    </>
  );
};
