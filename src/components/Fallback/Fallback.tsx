import { isAxiosError } from 'axios';
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
import { FallbackWithNavigateProps, FallbackContent } from '@/components/Fallback/Fallback.type';
import { FALLBACK_TEXT } from '@/constants/fallback.constant';
import { FallbackDrawer } from '@/drawer/components/FallbackDrawer/FallbackDrawer';
import { Error as CustomError } from '@/types/Common.type';

const getFallbackContent = (status: number): FallbackContent => {
  if (status >= 500) return FALLBACK_TEXT['SERVER'];
  if (status >= 400) return FALLBACK_TEXT['CLIENT'];
  return { boldText: '' };
};

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const page = isAxiosError(error) ? error.response?.data.error : (error as CustomError).error;

  const renderFallback = (page: string) => {
    switch (page) {
      case 'Drawer':
      case 'System':
        return <FallbackDrawer error={error} resetErrorBoundary={resetErrorBoundary} />;

      case 'Auth':
      case 'Search':
      default:
        return (
          <FallbackWithNavigate
            error={error.status}
            resetErrorBoundary={resetErrorBoundary}
            backUrl="/"
          />
        );
    }
  };

  return <>{renderFallback(page.split('-')[0])}</>;
};

export const FallbackWithNavigate = ({
  error,
  resetErrorBoundary,
  backUrl,
}: FallbackWithNavigateProps) => {
  const { boldText, buttonText } = getFallbackContent(error);

  const navigate = useNavigate();

  const handleClick = () => {
    resetErrorBoundary();
    navigate(backUrl);
  };

  return (
    <StyledFallbackContainer>
      <StyledErrorTextContainer>
        <StyledBoldText>{boldText}</StyledBoldText>
      </StyledErrorTextContainer>
      <StyledErrorImg src={ErrorPpussung} />
      <StyledNavigateButton onClick={handleClick}>{buttonText}</StyledNavigateButton>
    </StyledFallbackContainer>
  );
};

export const FallbackWithDetail = () => {
  const { boldText, subText } = getFallbackContent(500);

  return (
    <StyledFallbackContainer>
      <StyledErrorTextContainer>
        <StyledBoldText>{boldText}</StyledBoldText>
        <StyledSubText>{subText}</StyledSubText>
      </StyledErrorTextContainer>
      <StyledErrorImg src={ErrorPpussung} />
    </StyledFallbackContainer>
  );
};
