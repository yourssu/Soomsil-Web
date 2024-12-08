import styled from 'styled-components';

export const StyledArticleItem = styled.div`
  width: 29.4rem;
  padding: 0.62rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.62rem;
`;

export const StyledArticleTitle = styled.p`
  ${({ theme }) => theme.typo.subtitle4};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDateSpan = styled.span`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.button3};
`;
