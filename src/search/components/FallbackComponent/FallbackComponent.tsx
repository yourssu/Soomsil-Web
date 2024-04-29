import { FallbackProps } from 'react-error-boundary';

interface FallbackComponentProps extends FallbackProps {
  children: React.ReactNode;
}

export const FallbackComponent = ({ error, children }: FallbackComponentProps) => {
  if (error?.message === '검색결과가 없습니다.') {
    return <>{children}</>;
  }

  return <div>다른 에러가 발생했습니다: {error?.message}</div>;
};
