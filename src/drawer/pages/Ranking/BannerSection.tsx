import { useGetDrawerBanner } from '@/drawer/hooks/useGetDrawerBanner';

import { StyledImage } from './Ranking.style';

export const BannerSection = () => {
  const { data: bannerList } = useGetDrawerBanner();

  return (
    <section>
      {bannerList.slice(0, 2).map((banner) => (
        <a href={banner.website} key={banner.id} target="_blank">
          <StyledImage src={banner.image} alt={banner.name} />
        </a>
      ))}
    </section>
  );
};
