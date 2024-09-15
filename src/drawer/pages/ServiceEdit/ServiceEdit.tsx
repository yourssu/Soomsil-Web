import { useEffect } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ServiceForm } from '@/drawer/components/ServiceForm/ServiceForm';
import { useGetProductDetail } from '@/drawer/hooks/useGetProductDetail';
import { usePutUpdateProduct } from '@/drawer/hooks/usePutUpdateProduct';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { ServiceFormValues } from '@/drawer/types/form.type';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const ServiceEdit = () => {
  const { serviceId } = useParams();
  const { data: product } = useGetProductDetail(Number(serviceId));

  const isMobileView = useMediaQuery('(max-width: 30rem)');
  const setCategory = useSetRecoilState(CategoryState);

  const defaultValues: ServiceFormValues = {
    title: product.productTitle,
    subtitle: product.productSubTitle,
    content: product.productContent,
    category: product.category,
    webpageUrl: product.webpageUrl ?? '',
    googlePlayUrl: product.googlePlayUrl ?? '',
    appStoreUrl: product.appStoreUrl ?? '',
    githubUrl: product.githubUrl ?? '',
    thumbnailImage: null,
    introductionImages: Array(5).fill(null),
  };

  const updateProductMutation = usePutUpdateProduct(Number(serviceId));

  const onSubmit = (data: ServiceFormValues) => {
    updateProductMutation.mutate(data, {
      onSuccess: () => {
        console.log('서비스가 수정되었습니다.');
      },
    });
  };

  useEffect(() => {
    if (product) {
      setCategory(product.category);
    }
  }, [product, setCategory]);

  return (
    <ServiceForm defaultValues={defaultValues} onSubmit={onSubmit}>
      <ServiceForm.Submit>
        <BoxButton
          size={isMobileView ? 'small' : 'medium'}
          variant={'filled'}
          rounding={4}
          width="8.125rem"
          style={{
            alignSelf: 'flex-end',
          }}
        >
          서비스 수정
        </BoxButton>
      </ServiceForm.Submit>
    </ServiceForm>
  );
};
