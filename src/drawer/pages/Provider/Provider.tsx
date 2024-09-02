import { useParams } from 'react-router-dom';

import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/constants/mobileview.constant';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';
import { ProviderProductResponses } from '@/drawer/types/product.type';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useScrollObserve } from '@/hooks/useScrollObserve';

import {
  StyledDescription,
  StyledContainer,
  StyledProviderContainer,
  StyledProviderName,
} from './Provider.style';

export const Provider = () => {
  const isSmallDesktop = useMediaQuery(SMALL_DESKTOP_MEDIA_QUERY);

  const { providerId } = useParams();
  const { data, isPending, fetchNextPage, hasNextPage } = useGetProductByProvider({
    providerId: String(providerId),
  });
  const providerName = data.pages[0].providerName;
  const isEmpty = data.pages[0].products.length === 0;

  const { lastElementRef } = useScrollObserve<ProviderProductResponses>({
    isPending,
    fetchNextPage,
    hasNextPage,
  });

  return (
    <StyledContainer>
      {!isSmallDesktop && <RankingCategory />}
      <StyledProviderContainer $isSmallDesktop={isSmallDesktop}>
        {isSmallDesktop && <CategoryDropdownMenu />}
        <div>
          <StyledProviderName>{providerName}</StyledProviderName>
          <StyledDescription>개발자의 서비스를 확인해보세요.</StyledDescription>
        </div>
        {isEmpty ? (
          <EmptyScreen type={'CATEGORY'} />
        ) : (
          <>
            <CardLayout data={data.pages.flatMap((page) => page.products)} type={'PROVIDER'} />
            <div ref={lastElementRef} />
          </>
        )}
      </StyledProviderContainer>
    </StyledContainer>
  );
};
