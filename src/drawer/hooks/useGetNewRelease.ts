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
      const response = await getNewRelease({
        responseType: 'WEB',
        category: selectedCategory,
        page: 0,
      });
      setNewReleases(response.productList);
    };

    fetchData();
    console.log(newReleases);
  }, [selectedCategory]);

  return { newReleases, selectedCategory, setSelectedCategory };
};
