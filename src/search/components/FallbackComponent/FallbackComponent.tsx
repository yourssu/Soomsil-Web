import { BoxButton } from '@yourssu/design-system-react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import { Spacing } from '@/components/Spacing/Spacing';
import ppussungError from '@/search/assets/ppussungError.svg';

import {
  StyledBoldText,
  StyledContainer,
  StyledSubText,
  StyledTextButtonContainer,
  StyledTextContainer,
  StyledButtonContainer,
} from './FallbackComponent.style';

interface FallbackComponentProps extends FallbackProps {
  children: React.ReactNode;
}

export const FallbackComponent = ({
  error,
  resetErrorBoundary,
  children,
}: FallbackComponentProps) => {
  const navigate = useNavigate();

  const handleClick = (option: 'home' | 'previous') => {
    resetErrorBoundary();

    switch (option) {
      case 'home':
        navigate('/');
        break;
      case 'previous':
        navigate(0);
        break;
      default:
    }
  };

  if (error?.message === '검색결과가 없습니다.') {
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
          <BoxButton
            width="134px"
            size="large"
            variant="line"
            rounding={8}
            onClick={() => handleClick('home')}
          >
            숭실 홈으로
          </BoxButton>
          <Spacing size={12} direction="horizontal" />
          <BoxButton
            width="134px"
            size="large"
            variant="filled"
            rounding={8}
            onClick={() => handleClick('previous')}
          >
            이전 페이지
          </BoxButton>
        </StyledButtonContainer>
      </StyledTextButtonContainer>
      <img src={ppussungError} alt="error" />
    </StyledContainer>
  );
};
