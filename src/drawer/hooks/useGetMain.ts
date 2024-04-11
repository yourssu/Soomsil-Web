import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { getNewRelease } from '@/drawer/apis/getNewRelease';
import { getRanking } from '@/drawer/apis/getRanking';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { ProductListResponse } from '@/drawer/types/ProductList.type';

export const useGetMain = () => {
  const [newReleases, setNewReleases] = useState<ProductListResponse['productList']>([]);
  const [rankings, setRankings] = useState<ProductListResponse['productList']>([]);
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  const fetchData = async () => {
    const [newReleaseResponse, rankingResponse] = await Promise.all([
      getNewRelease({ responseType: 'WEB', category: '', page: 1 }),
      getRanking({ responseType: 'WEB', category: '', page: 1 }),
    ]);

    setNewReleases(newReleaseResponse.productList);
    setRankings(rankingResponse.productList);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  return { newReleases, rankings, setSelectedCategory };
};
