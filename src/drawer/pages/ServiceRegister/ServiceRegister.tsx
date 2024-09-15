import { BoxButton } from '@yourssu/design-system-react';
import { isAxiosError } from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Category } from '@/drawer/components/Category/Category.type';
import { ServiceForm } from '@/drawer/components/ServiceForm/ServiceForm';
import { usePostProduct } from '@/drawer/hooks/usePostProduct';
import { CategoryState } from '@/drawer/recoil/CategoryState';
import { ServiceFormValues } from '@/drawer/types/form.type';
import { useMediaQuery } from '@/hooks/useMediaQuery';

declare global {
  interface Window {
    Android: {
      getAccessToken: () => void;
      onRegisterSuccess: () => void;
    };
    webkit: {
      messageHandlers: {
        ios: {
          postMessage: (message: string) => void;
        };
      };
    };
    setAccessToken: (token: string) => void;
  }
}

export const ServiceRegister = () => {
  const isMobileView = useMediaQuery('(max-width: 30rem)');
  const category = useRecoilValue(CategoryState);
  const navigate = useNavigate();

  const methods = useForm<ServiceFormValues>({
    mode: 'onChange',
    defaultValues: {
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
    },
  });

  const registerProductMutation = usePostProduct();

  const onSubmit = (data: ServiceFormValues) => {
    registerProductMutation.mutate(data, {
      onSuccess: () => {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ios) {
          window.webkit.messageHandlers.ios.postMessage('onRegisterSuccess');
        } else if (window.Android && window.Android.onRegisterSuccess) {
          window.Android.onRegisterSuccess();
        }

        navigate('/drawer/myDrawers?tab=MYDRAWER');
      },
      onError: (error) => {
        if (isAxiosError(error)) {
          // 서비스명 중복 에러
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
            disabled={registerProductMutation.isPending}
          >
            서비스 등록
          </BoxButton>
        </ServiceForm.Submit>
      </ServiceForm>
    </FormProvider>
  );
};
