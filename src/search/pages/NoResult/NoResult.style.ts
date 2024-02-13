import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  w-auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex-shrink: 0;
`;

export const StyledNoResultSection = styled.div`
  display: flex;
`;

export const StyledNoResultKeyword = styled.span`
  color: ${({ theme }) => theme.color.textPointed};

  // subtitle24
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const StyledNoResultDescription = styled.p`
  color: ${({ theme }) => theme.color.textPrimary};

  // subtitle24
  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

export const StyledModifySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledModifyDescription = styled.p`
  color: ${({ theme }) => theme.color.textTertiary};

  // body 18
  font-family: 'Spoqa Han Sans Neo';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const StyledCard = styled.div`
  display: flex;
  width: 799px;
  height: auto;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 12px;
  border: 1px solid var(--border-borderNormal, rgba(16, 17, 18, 0.1));
  background: ${({ theme }) => theme.baseColor.white000};
`;

export const StyledCardDescriptionSection = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledCardIconFrame = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const StyledCardTextFrame = styled.div``;

export const StyledCardLink = styled.a`
  color: ${({ theme }) => theme.color.textPrimary};

  ${({ theme }) => theme.typo.subtitle1}

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledCardLinkTextDescription = styled.p`
  color: ${({ theme }) => theme.color.textTertiary};

  // body16
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
