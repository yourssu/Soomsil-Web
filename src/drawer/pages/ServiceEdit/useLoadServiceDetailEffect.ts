import { useEffect } from 'react';

import { UseFormReturn } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useGetProductDetail } from '@/drawer/hooks/useGetProductDetail';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { RegisterFormValues } from '@/drawer/types/form.type';

export const useLoadServiceDetailEffect = ({ setValue }: UseFormReturn<RegisterFormValues>) => {
  const { serviceId } = useParams();
  const { data: product } = useGetProductDetail(Number(serviceId));
  const setSelectedCategory = useSetRecoilState(CategoryState);

  // const { data: thumbnailFiles } = useGetURLsToFiles(product?.thumbnail);
  // const { data: introductionFiles } = useGetURLsToFiles(product?.introductionImage);

  useEffect(() => {
    const {
      productTitle,
      productSubTitle,
      productContent,
      category,
      webpageUrl,
      googlePlayUrl,
      appStoreUrl,
      githubUrl,
    } = product;

    setValue('title', productTitle);
    setValue('subtitle', productSubTitle);
    setValue('content', productContent);
    setValue('category', category);
    setSelectedCategory(category);
    setValue('webpageUrl', webpageUrl ?? '');
    setValue('googlePlayUrl', googlePlayUrl ?? '');
    setValue('appStoreUrl', appStoreUrl ?? '');
    setValue('githubUrl', githubUrl ?? '');
  }, [product, setValue, setSelectedCategory]);
};
