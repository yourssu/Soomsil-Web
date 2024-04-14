import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { getNewRelease } from '@/drawer/apis/getNewRelease';
import { CategoryState } from '@/drawer/recoil/CategoryState';

import { ProductResponses } from '../types/product.type';

export const useGetNewRelease = () => {
  const [newReleases, setNewReleases] = useState<ProductResponses['productList']>([]);
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewRelease({
        responseType: 'WEB',
        category: selectedCategory,
        page: 0,
      });
      setNewReleases(response.productList);
    };

    fetchData();
  }, [selectedCategory]);

  return { newReleases, selectedCategory, setSelectedCategory };
};
