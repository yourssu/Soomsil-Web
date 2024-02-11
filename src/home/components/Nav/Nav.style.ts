import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const StyledProfileContainer = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
export const StyledNonLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const StyledColDivider = styled.div`
  // 해당 폰트크기가 yds에 없어 이런식으로 작업했습니다!
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.baseColor.logoViolet};
`;

export const StyledNonLoginText = styled(NavLink)`
  // 해당 폰트크기가 yds에 없어 이런식으로 작업했습니다!
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.baseColor.logoViolet};
`;

export const StyledDropDownName = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.color.textPrimary};
`;
export const StyledDropDownEmail = styled.div`
  ${({ theme }) => theme.typo.caption0};
  color: ${({ theme }) => theme.color.textDisabled};
`;
export const StyledDropDownMyPage = styled(NavLink)`
  ${({ theme }) => theme.typo.button0};
  color: ${({ theme }) => theme.color.textPrimary};
  padding-top: 1.25rem;
`;
export const StyledDropDownLogout = styled.div`
  ${({ theme }) => theme.typo.button0};
  padding-top: 0.75rem;
`;
