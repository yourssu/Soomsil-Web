import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import ErrorPpussung from '@/assets/error_ppussung.webp';
import {
  StyledBoldText,
  StyledErrorImg,
  StyledErrorTextContainer,
  StyledFallbackContainer,
  StyledNavigateButton,
  StyledSubText,
} from '@/components/Fallback/Fallback.style';
import { FallbackContent } from '@/components/Fallback/Fallback.type';
import { FALLBACK_TEXT } from '@/constants/fallback.constant';

const getFallbackContent = (status: number): FallbackContent => {
  if (status >= 500) return FALLBACK_TEXT['SERVER'];
  if (status >= 400) return FALLBACK_TEXT['CLIENT'];
  return { boldText: '' };
};

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const backUrl = window.location.pathname.startsWith('/drawer') ? '/drawer' : '/';
  const status = error.response?.data.status;

  return <></>;
};
