import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const ProfileContainer = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
export const NonLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const ColDivider = styled.div`
  // 해당 폰트크기가 yds에 없어 이런식으로 작업했습니다!
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.baseColor.logoViolet};
`;

export const NonLoginText = styled(NavLink)`
  // 해당 폰트크기가 yds에 없어 이런식으로 작업했습니다!
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.baseColor.logoViolet};
`;

export const DropDownName = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.color.textPrimary};
`;
export const DropDownEmail = styled.div`
  ${({ theme }) => theme.typo.caption0};
  color: ${({ theme }) => theme.color.textDisabled};
`;
export const DropDownMyPage = styled(NavLink)`
  ${({ theme }) => theme.typo.button0};
  color: ${({ theme }) => theme.color.textPrimary};
`;
export const DropDownLogout = styled.div`
  ${({ theme }) => theme.typo.button0};
`;
