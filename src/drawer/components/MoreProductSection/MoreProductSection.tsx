import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';

import { StyledMoreProductSection } from './MoreProductSection.style';

export const MoreProductSection = ({
  providerName,
  providerId,
}: {
  providerName: string;
  providerId: string;
}) => {
  const { isSuccess, data } = useGetProductByProvider({ providerId });

  return (
    <>
      {isSuccess && data.length > 0 && (
        <StyledMoreProductSection>
          {providerName}의 서비스 더보기
          {data.map(({ productTitle, count, productNo, mainImage }) => (
            <SmallDrawerCard
              key={productNo}
              link={`/drawer/services/${productNo}`}
              title={productTitle}
              body={providerName}
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
