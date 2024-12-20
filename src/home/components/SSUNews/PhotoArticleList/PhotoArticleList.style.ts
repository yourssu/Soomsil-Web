import styled from 'styled-components';

export const StyledArticleBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

export const StyledArticleItem = styled.a`
  width: 25rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  color: inherit;
`;

export const StyledImg = styled.img`
  width: 12.4rem;
  height: 9.8rem;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const StyledArticleTitle = styled.p`
  ${({ theme }) => theme.typo.subtitle4};

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  max-height: 96px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDateSpan = styled.span`
  color: ${({ theme }) => theme.color.textTertiary};
  ${({ theme }) => theme.typo.button3};
`;
