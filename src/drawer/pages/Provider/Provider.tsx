import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { CardLayout } from '@/drawer/components/CardLayout/CardLayout';
import { Category } from '@/drawer/components/Category/Category';
import { EmptyScreen } from '@/drawer/components/EmptyScreen/EmptyScreen';
import { NOT_FOUND_TEXT } from '@/drawer/constants/empty.constant';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';
import { CategoryState } from '@/drawer/recoil/CategoryState';

import {
  StyledDescription,
  StyledContainer,
  StyledProviderContainer,
  StyledProviderName,
} from './Provider.style';

export const Provider = () => {
  const { providerId } = useParams();
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  const { data } = useGetProductByProvider({
    providerId: String(providerId),
    category: selectedCategory,
  });

  return (
    <StyledContainer>
      <Category isAll={true} handleCategorySelect={setSelectedCategory} isRank={true} />
      <StyledProviderContainer>
        <div>
          <StyledProviderName>{providerId}</StyledProviderName>
          <StyledDescription>개발자의 서비스를 확인해보세요.</StyledDescription>
        </div>
        {data?.length ? (
          <CardLayout data={data} type={'PROVIDER'} />
        ) : (
          <EmptyScreen {...NOT_FOUND_TEXT['PROVIDER']} type={'PROVIDER'} />
        )}
      </StyledProviderContainer>
    </StyledContainer>
  );
};
