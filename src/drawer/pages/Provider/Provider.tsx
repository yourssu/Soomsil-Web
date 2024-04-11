import { useParams } from 'react-router-dom';

import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { CategoryDropdownMenu } from '@/drawer/components/Category/CategoryDropdownMenu/CategoryDropdownMenu';
import { RankingCategory } from '@/drawer/components/Category/RankingCategory';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { NOT_FOUND_TEXT } from '@/drawer/constants/empty.constant';
import { SMALL_DESKTOP_MEDIA_QUERY } from '@/drawer/constants/mobileview.constant';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
  StyledDescription,
  StyledContainer,
  StyledProviderContainer,
  StyledProviderName,
} from './Provider.style';

export const Provider = () => {
  const isSmallDesktop = useMediaQuery(SMALL_DESKTOP_MEDIA_QUERY);

  const { providerId } = useParams();

  const { data } = useGetProductByProvider({
    providerId: String(providerId),
  });

  return (
    <StyledContainer>
      {!isSmallDesktop && <RankingCategory />}
      <StyledProviderContainer $isSmallDesktop={isSmallDesktop}>
        {isSmallDesktop && <CategoryDropdownMenu />}
        <div>
          <StyledProviderName>{providerId}</StyledProviderName>
          <StyledDescription>개발자의 서비스를 확인해보세요.</StyledDescription>
        </div>
        {data && data.length > 0 ? (
          <CardLayout data={data} type={'PROVIDER'} />
        ) : (
          <EmptyScreen {...NOT_FOUND_TEXT['PROVIDER']} type={'PROVIDER'} />
        )}
      </StyledProviderContainer>
    </StyledContainer>
  );
};
