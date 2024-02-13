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
  // subtitle24
  color: var(--text-textPointed, #816dec);

  font-family: 'Spoqa Han Sans Neo';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const StyledNoResultDescription = styled.p`
  // subtitle24
  color: var(--text-textPrimary, #101112);

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
  // body 18
  color: var(--text-textTertiary, #8e9398);

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
  background: var(--bg-bgNormal, #fff);
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
  color: var(--text-textPrimary, #101112);

  ${({ theme }) => theme.typo.subtitle1}

  &:hover {
    color: var(--text-textPrimary, #101112);
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledCardLinkTextDescription = styled.p`
  // body16
  color: var(--text-textTertiary, #8e9398);

  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
