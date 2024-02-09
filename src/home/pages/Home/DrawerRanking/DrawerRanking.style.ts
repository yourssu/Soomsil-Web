import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: min-content;
  padding: 1.4375rem;

  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};

  // YDS 지정이 되어 있지 않아 임시로 작업했습니다.
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

export const StyledAllViewButton = styled(Link)`
  padding-right: 0.1875rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.textTertiary};

  // YDS 지정이 되어 있지 않아 임시로 작업했습니다.
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledRankCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: max-content;
  margin-bottom: 0.8125rem;
`;
