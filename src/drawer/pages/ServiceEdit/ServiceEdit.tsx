import { useEffect } from 'react';

import { BoxButton } from '@yourssu/design-system-react';
import { isAxiosError } from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();

  const methods = useForm<ServiceFormValues>({
    mode: 'onChange',
    defaultValues: {
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
    },
  });

  const updateProductMutation = usePutUpdateProduct(Number(serviceId));

  const onSubmit = (data: ServiceFormValues) => {
    updateProductMutation.mutate(data, {
      onSuccess: () => {
        navigate('/drawer/myDrawers?tab=MYDRAWER');
      },
      onError: (error) => {
        if (isAxiosError(error)) {
          // TODO: 서비스 수정 API에서는 서비스 명 중복 시 'Drawer-008'로 처리되지 않음
          if (error.response?.data?.error === 'Drawer-008') {
            methods.setError(
              'title',
              {
                type: 'custom',
                message: '이미 등록된 서비스 이름입니다.',
              },
              { shouldFocus: true }
            );
          }
        }
      },
    });
  };

  // 카테고리 선택 폼이 category atom과 연결되어 있기 때문에 동기화 effect 발생
  useEffect(() => {
    if (product) {
      setCategory(product.category);
    }
  }, [product, setCategory]);

  return (
    <FormProvider {...methods}>
      <ServiceForm onSubmit={onSubmit}>
        <ServiceForm.Submit>
          <BoxButton
            size={isMobileView ? 'small' : 'medium'}
            variant={'filled'}
            rounding={4}
            width="8.125rem"
            style={{
              alignSelf: 'flex-end',
            }}
            disabled={updateProductMutation.isPending}
          >
            서비스 수정
          </BoxButton>
        </ServiceForm.Submit>
      </ServiceForm>
    </FormProvider>
  );
};
