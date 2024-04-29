import { SimpleTextField } from '@yourssu/design-system-react';
import styled from 'styled-components';

export const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const StyledButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledBoxContainer = styled.section`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 22px 24px 22px 24px;
  width: 480px;
  top: 342px;
  left: 720px;
  gap: 24px;
`;

export const StyledInputTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle3};
  color: #505458;
  padding: 11px 4px 3px 4px;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textSecondary};
  ${({ theme }) => theme.typo.title2};
  text-align: center;
`;

export const StyledInputContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const StyledInputAnimation = styled.article`
  transition:
    visibility 0s 0.5s,
    opacity 0.5s ease,
    max-height 0.5s ease;
  visibility: hidden; // 요소를 숨깁니다.
  opacity: 0; // 요소를 투명하게 만듭니다.
  max-height: 0; // 요소의 최대 높이를 0으로 설정하여 요소를 숨깁니다.
  overflow: hidden; // 초과 내용을 숨깁니다.

  &.active {
    margin-top: 1rem;
    visibility: visible; // 요소를 보이게 만듭니다.
    opacity: 1; // 요소를 불투명하게 만듭니다.
    max-height: 150px; // 요소의 최대 높이를 증가시켜 요소를 보이게 합니다.
    transition-delay: 0s; // 활성화 상태일 때는 지연 없이 즉시 전환을 시작합니다.
  }
`;

export const StyledInput = styled(SimpleTextField)`
  width: 100%;
  height: 3rem;
`;

export const StyledErrorMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.caption1};
  color: #ff5252;
`;

export const StyledLogo = styled.img`
  width: 180px;
`;
