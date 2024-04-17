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

const getFallbackContent = (status: number): FallbackContent => {
  if (status >= 500) return FALLBACK_TEXT['SERVER'];
  if (status >= 400) return FALLBACK_TEXT['CLIENT'];
  return { boldText: '' };
};

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const backUrl = window.location.pathname.startsWith('/drawer') ? '/drawer' : '/';
  const status = error.response?.data.status;

  if (status >= 500) {
    return <FallbackWithDetail status={status} />;
  }
  return (
    <FallbackWithNavigate error={error} resetErrorBoundary={resetErrorBoundary} backUrl={backUrl} />
  );
};

const FallbackWithNavigate = ({
  error,
  resetErrorBoundary,
  backUrl,
}: FallbackWithNavigateProps) => {
  const { boldText, buttonText } = getFallbackContent(error.response.data.status);

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

const FallbackWithDetail = ({ status }: { status: number }) => {
  const { boldText, subText } = getFallbackContent(status);

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
