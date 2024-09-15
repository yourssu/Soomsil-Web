import { BoxButton } from '@yourssu/design-system-react';
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
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ios) {
          window.webkit.messageHandlers.ios.postMessage('onRegisterSuccess');
        } else if (window.Android && window.Android.onRegisterSuccess) {
          window.Android.onRegisterSuccess();
        }

        navigate('/drawer/myDrawers?tab=MYDRAWER');
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
