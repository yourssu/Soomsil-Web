import { Component, ComponentType, createElement, ReactNode, ErrorInfo } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type FallbackProps = {
  error: Error | null;
};

type ErrorBoundaryProps = {
  // fallback 용도의 컴포넌트는 Error 정보를 props로 받을 수 있는 컴포넌트여야 한다.
  fallback: ComponentType<FallbackProps>;
  children: ReactNode;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    const { state, props } = this;

    const { hasError, error } = state;

    const { fallback, children } = props;

    const fallbackProps: FallbackProps = {
      error,
    };

    // fallback 컴포넌트 측에서 오류 정보를 props로 받을 수 있도록 설정
    const fallbackComponent = createElement(fallback, fallbackProps);

    // 오류 발생 여부를 체크하여, 오류가 발생했을때 조건부 렌더링 처리를 해줍니다.
    return hasError ? fallbackComponent : children;
  }
}
