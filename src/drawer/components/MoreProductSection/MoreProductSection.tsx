import { useNavigate } from 'react-router-dom';

import IcRightArrow from '@/drawer/assets/ic_right_arrow.svg';
import { SmallDrawerCard } from '@/drawer/components/DrawerCard/SmallDrawerCard';
import { useGetProductByProvider } from '@/drawer/hooks/useGetProductByProvider';

import {
  StyledArrowButton,
  StyledContainer,
  StyledMoreProductSection,
} from './MoreProductSection.style';

export const MoreProductSection = ({
  providerName,
  providerId,
}: {
  providerName: string;
  providerId: string;
}) => {
  const { data } = useGetProductByProvider({ providerId });

  const navigate = useNavigate();

  return (
    <>
      {data.length > 0 && (
        <StyledMoreProductSection>
          <StyledContainer>
            {providerName}의 서비스 더보기
            <StyledArrowButton
              $backgroundImage={IcRightArrow}
              type="button"
              onClick={() => {
                navigate(`/drawer/${providerId}`);
              }}
            />
          </StyledContainer>
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
