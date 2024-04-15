import { FallbackProps } from 'react-error-boundary';

import { FallbackWithDetail, FallbackWithNavigate } from '@/components/Fallback/Fallback';

export const FallbackDrawer = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (error.response.data.status === 500) {
    return <FallbackWithDetail />;
  }

  return (
    <FallbackWithNavigate
      error={error.response.data.status}
      resetErrorBoundary={resetErrorBoundary}
      backUrl="/drawer"
    />
  );
};
