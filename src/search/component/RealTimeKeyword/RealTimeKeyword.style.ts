import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  gap: 10px;
  border-radius: 12px;
  border: var(--0, 1px) solid var(--border-borderNormal, rgba(16, 17, 18, 0.1));
  background: var(--sponus_white, #fff);
`;

export const StyledHeader = styled.div`
  display: flex;
  position: relative;
  padding: 8px;
`;

export const StyledHeaderTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const StyledHeaderText1 = styled.span`
  color: var(--text-textPrimary, #101112);

  ${({ theme }) => theme.typo.subtitle1}
`;

export const StyledHeaderText2 = styled.span`
  color: var(--text-textTertiary, #8e9398);

  ${({ theme }) => theme.typo.body2}
`;

export const StyledHeaderImageSection = styled.img`
  width: 203px;
  height: 136px;
  position: absolute;
  right: -20px;
  top: -50px;
`;

export const StyledListItemText = styled.p`
  color: black;

  // body18
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const StyledListItemRanking = styled.span`
  // body18
  font-family: 'Spoqa Han Sans Neo';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-right: 16px;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`;
