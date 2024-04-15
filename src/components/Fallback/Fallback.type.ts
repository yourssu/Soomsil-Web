import { FallbackProps } from 'react-error-boundary';

export interface FallbackWithNavigateProps extends FallbackProps {
  backUrl: string;
}

export interface FallbackContent {
  boldText: string;
  subText?: string;
  buttonText?: string;
}

export type ErrorCause = 'SERVER' | 'CLIENT';
