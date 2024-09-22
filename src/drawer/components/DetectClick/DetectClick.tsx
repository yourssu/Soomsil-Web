import React from 'react';

import { LogClick } from '@yourssu/logging-system-react';

import { useGetDetectProvider } from '@/drawer/hooks/useGetDetectProvider';
import { ProductResult } from '@/drawer/types/product.type';
import { useGetUserData } from '@/home/hooks/useGetUserData';

interface DetectClickProps {
  product: ProductResult;
  children: React.ReactElement;
}

export const DetectClick = ({ product, children }: DetectClickProps) => {
  const { data: provider } = useGetDetectProvider(Number(product.productNo));
  const { data } = useGetUserData();

  const detectClickParams = {
    userId: data?.email || '',
    version: 1,
    event: {
      name: 'drawerServiceClicked',
      screen: 'DrawerMain',
      params: {
        drawerServiceName: product.productTitle,
        drawerServiceOwner: provider,
        drawerServiceStarCount: product.count,
      },
    },
  };

  return <LogClick params={detectClickParams}>{children}</LogClick>;
};
