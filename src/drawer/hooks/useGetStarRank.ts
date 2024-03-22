import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { CategoryState } from '@/drawer/recoil/CategoryState';
import { ProductListResponse } from '@/drawer/types/ProductList.type';

import { getRanking } from '../apis/getRanking';

export const useGetStarRank = () => {
  const [rankings, setRankings] = useState<ProductListResponse['productList']>([]);
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRanking({
        responseType: 'WEB',
        category: selectedCategory,
        page: 0,
      });
      setRankings(response.productList);
    };

    fetchData();
  }, [selectedCategory]);

  return { rankings, selectedCategory, setSelectedCategory };
};
