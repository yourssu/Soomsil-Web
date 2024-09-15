import { BoxButton } from '@yourssu/design-system-react';
import { useRecoilValue } from 'recoil';

import { Category } from '@/drawer/components/Category/Category.type';
import { ServiceForm } from '@/drawer/components/ServiceForm/ServiceForm';
import { usePostProduct } from '@/drawer/hooks/usePostProduct';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { ServiceFormValues } from '@/drawer/types/form.type';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const ServiceRegister = () => {
  const isMobileView = useMediaQuery('(max-width: 30rem)');
  const category = useRecoilValue(CategoryState);

  const defaultValues: ServiceFormValues = {
    title: '',
    subtitle: '',
    content: '',
    category: category as Category,
    webpageUrl: '',
    googlePlayUrl: '',
    appStoreUrl: '',
    githubUrl: '',
    thumbnailImage: null,
    introductionImages: Array(5).fill(null),
  };

  const registerProductMutation = usePostProduct();

  const onSubmit = (data: ServiceFormValues) => {
    registerProductMutation.mutate(data, {
      onSuccess: () => {
        console.log('success');
      },
    });
  };

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
          disabled={registerProductMutation.isPending}
        >
          서비스 등록
        </BoxButton>
      </ServiceForm.Submit>
    </ServiceForm>
  );
};
