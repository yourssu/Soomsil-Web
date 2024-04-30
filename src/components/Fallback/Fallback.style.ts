import styled from 'styled-components';

export const StyledFallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 2.5rem;
  padding: 10rem;
`;

export const StyledErrorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const StyledBoldText = styled.p`
  ${({ theme }) => theme.typo.subtitle1};
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const StyledSubText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.textTertiary};
`;

export const StyledErrorImg = styled.img`
  width: 9.375rem;
  height: 10.65625rem;
`;

export const StyledNavigateButton = styled.button`
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.color.buttonPoint};

  padding: 0.625rem 3.25rem;

  font-family: Spoqa Han Sans Neo;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;

  color: ${({ theme }) => theme.color.textBright};
`;
