import { useEffect, useState } from 'react';

import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { EMAIL_DOMAIN } from '@/constants/email.constant';
import { useGetProductDetail } from '@/drawer/hooks/useGetProductDetail';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { RegisterFormValues } from '@/drawer/types/form.type';
import { useGetUserData } from '@/home/hooks/useGetUserData';

import { useGetFilesFromURLs } from './useGetFilesFromURLs';

type UseLoadServiceDetailEffectProps = {
  serviceId: number;
  setValue: UseFormReturn<RegisterFormValues>['setValue'];
};

export const useLoadServiceDetailEffect = ({
  serviceId,
  setValue,
}: UseLoadServiceDetailEffectProps) => {
  // 본인이 등록한 서비스인지 확인하기 전까지는
  // 폼에 값을 채우지 않기 위해 isValidated를 사용합니다.
  const [isValidated, setIsValidated] = useState(false);

  const setSelectedCategory = useSetRecoilState(CategoryState);
  const navigate = useNavigate();
  const { data: userData, isLoading: isUserDataLoading } = useGetUserData();
  const { data: product, isLoading: isProductLoading } = useGetProductDetail(serviceId);

  const { data: thumbnailFiles, isLoading: isThumbnailLoading } = useGetFilesFromURLs(
    product?.thumbnail
  );
  const { data: introductionFiles, isLoading: isIntroductionsLoading } = useGetFilesFromURLs(
    product?.introductionImage
  );

  useEffect(() => {
    if (isUserDataLoading || isProductLoading) return;

    const productProviderEmail = `${product.providerId}${EMAIL_DOMAIN}`;
    const currentUserEmail = userData?.email;

    if (productProviderEmail !== currentUserEmail) {
      navigate('/');
      return;
    }

    setIsValidated(true);
  }, [product, userData, isUserDataLoading, isProductLoading, navigate]);

  useEffect(() => {
    if (!isValidated) return;
    if (isThumbnailLoading || isIntroductionsLoading) return;

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

    setValue('title', productTitle, { shouldValidate: true });
    setValue('subtitle', productSubTitle, { shouldValidate: true });
    setValue('content', productContent, { shouldValidate: true });
    setValue('category', category, { shouldValidate: true });
    setSelectedCategory(category);
    setValue('webpageUrl', webpageUrl ?? '', { shouldValidate: true });
    setValue('googlePlayUrl', googlePlayUrl ?? '', { shouldValidate: true });
    setValue('appStoreUrl', appStoreUrl ?? '', { shouldValidate: true });
    setValue('githubUrl', githubUrl ?? '', { shouldValidate: true });
    setValue('thumbnailImage', thumbnailFiles), { shouldValidate: true };
    setValue('introductionImages', introductionFiles, { shouldValidate: true });
  }, [
    isValidated,
    product,
    setValue,
    setSelectedCategory,
    thumbnailFiles,
    introductionFiles,
    isThumbnailLoading,
    isIntroductionsLoading,
  ]);
};
