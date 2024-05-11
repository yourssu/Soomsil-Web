import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import { CustomErrorType } from '@/search/apis/getSearch';
import ppussungError from '@/search/assets/ppussungError.svg';
import { NAVIGATION_OPTIONS } from '@/search/constant';
import { CustomErrorCode } from '@/search/constant/customError';

import {
  StyledBoldText,
  StyledContainer,
  StyledSubText,
  StyledTextButtonContainer,
  StyledTextContainer,
  StyledButtonContainer,
  StyledBoxButton,
} from './FallbackComponent.style';

interface FallbackComponentProps extends FallbackProps {
  children: React.ReactNode;
  error: CustomErrorType;
}

export const FallbackComponent = ({
  error,
  resetErrorBoundary,
  children,
}: FallbackComponentProps) => {
  const navigate = useNavigate();

  const handleClick = (option: keyof typeof NAVIGATION_OPTIONS) => {
    resetErrorBoundary();

    switch (option) {
      case 'HOME':
        navigate('/');
        break;
      case 'PREVIOUS':
        navigate(-1);
        break;
      default:
    }
  };

  if (error?.statusCode === CustomErrorCode.NoResult) {
    return <>{children}</>;
  }

  return (
    <StyledContainer>
      <StyledTextButtonContainer>
        <StyledTextContainer>
          <StyledBoldText>시스템 오류가 발생했습니다!</StyledBoldText>
          <Spacing direction="vertical" size={12} />
          <StyledSubText>
            오류로 인하여 페이지를 표시할 수 없습니다. 이용에 불편을 드려 죄송합니다.
          </StyledSubText>
        </StyledTextContainer>
        <StyledButtonContainer>
          <StyledBoxButton variant="line" onClick={() => handleClick('HOME')}>
            숭실 홈으로
          </StyledBoxButton>
          <StyledBoxButton variant="filled" onClick={() => handleClick('PREVIOUS')}>
            이전 페이지
          </StyledBoxButton>
        </StyledButtonContainer>
      </StyledTextButtonContainer>
      <img src={ppussungError} alt="error" />
    </StyledContainer>
  );
};
