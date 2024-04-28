import { SimpleTextField } from '@yourssu/design-system-react';
import styled from 'styled-components';

export const StyledContainer = styled.article`
  width: fit-content;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 1.5rem;
`;

export const StyledBoxContainer = styled.section`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
  border: 1px 0px 0px 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 22px 24px 22px 24px;
  width: Fixed (480px) px;
  width: 480px;
  height: Hug (267px) px;
  top: 342px;
  left: 720px;
  opacity: 0px;
  margin-top: 2rem;
`;

export const StyledInputTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle3};
  color: #505458;
  padding-left: 4px;
  padding-bottom: 3px;
`;
export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textSecondary};
  ${({ theme }) => theme.typo.title2};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const StyledInputContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInputContainerAnimation = styled.article`
  display: flex;
  flex-direction: column;
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
  padding: 0.75rem 1rem;
`;

export const StyledErrorMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.caption1};
  color: #ff5252;
  padding-top: 0.1rem;
`;

export const StyledLogo = styled.img`
  width: 180px;
`;
