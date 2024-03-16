import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';

import { StyledMoreProductSection } from './MoreProductSection.style';

export const MoreProductSection = ({ providerId }: { providerId: string }) => {
  const { isSuccess, data } = useGetProductByProvider({ providerId });

  return (
    <>
      {isSuccess && data.length > 0 && (
        <StyledMoreProductSection>
          {providerId}의 서비스 더보기
          {data.map(({ productTitle, count, productNo, mainImage }) => (
            <SmallDrawerCard
              key={productNo}
              link={`/drawer/services/${productNo}`}
              title={productTitle}
              body={providerId}
              bookmarkCount={count}
              isBookmarked={true}
              smallImgSrc={mainImage}
            />
          ))}
        </StyledMoreProductSection>
      )}
    </>
  );
};
