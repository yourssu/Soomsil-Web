import styled, { css } from 'styled-components';

const Center = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const fontSize = (size: number, base: number = 16) => `
  font-size: ${size}px;
  font-size: calc(${size / base} * 1rem);
`;

export const StyledWrapper = styled.div`
  ${Center}
  gap: 24px;
`;

export const StyledWithdrawContainer = styled.div`
  ${Center}

  padding: 22px 24px 22px 24px;
  gap: 24px;
  width: 480px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.borderNormal};
`;

export const TitleText = styled.p`
  ${({ theme }) => theme.typo.title2};
  ${fontSize(24)};
  font-weight: 700;
  line-height: 31.2px;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const SubTitleTextThree = styled.p`
  ${({ theme }) => theme.typo.subtitle3};
  color: ${({ theme }) => theme.color.buttonNormal};
  ${fontSize(20)};
  font-weight: 500;
  line-height: 26px;
  align-self: self-start;
`;

export const ButtonText = styled.p`
  ${fontSize(14)};
  color: ${({ theme }) => theme.color.buttonDisabled};
  font-weight: 400;
  line-height: 18.2px;
  text-align: left;
  ${({ theme }) => theme.typo.button3};
`;

export const Left = styled.div`
  align-self: self-start;
`;

export const SubTitleTextFive = styled.ul`
  ${({ theme }) => theme.typo.subtitle5};
  color: ${({ theme }) => theme.color.buttonNormal};
  ${fontSize(16)};
  font-weight: 500;
  line-height: 20.8px;
  text-align: left;
  list-style-type: disc;
  padding: 0px 24px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;
