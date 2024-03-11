import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { getNewRelease } from '@/drawer/apis/getNewRelease';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { ProductListResponse } from '@/drawer/types/ProductList.type';

export const useGetNewRelease = () => {
  const [newReleases, setNewReleases] = useState<ProductListResponse['productList']>([]);
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewRelease({ responseType: 'WEB', category: selectedCategory });
      setNewReleases(response.productList);
    };

    fetchData();
  }, [selectedCategory]);

  return { newReleases, selectedCategory, setSelectedCategory };
};
