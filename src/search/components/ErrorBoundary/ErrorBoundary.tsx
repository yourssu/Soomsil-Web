import { Component, ComponentType, createElement, ReactNode } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  prevQuery: string;
};

export type FallbackProps = {
  error: Error | null;
};

type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>;
  children: ReactNode;
  query: string;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      prevQuery: props.query,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      prevQuery: '',
    };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.props.query !== prevProps.query) {
      this.setState({ hasError: false, error: null, prevQuery: this.props.query });
    }
  }

  render() {
    const { state, props } = this;

    const { hasError, error } = state;

    const { fallback, children } = props;

    const fallbackProps: FallbackProps = {
      error,
    };

    const fallbackComponent = createElement(fallback, fallbackProps);

    return hasError ? fallbackComponent : children;
  }
}
