import { IcPersoncircleLine, IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useTheme } from 'styled-components';

import soomsil from '@/assets/soomsil_logo.svg';
import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';
import { LogInState } from '@/home/recoil/LogInState';
import { DialogState } from '@/recoil/DialogState';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderSearchContainer,
  StyledHeaderSearchInput,
  StyledHeaderTab,
  StyledHeaderTabs,
} from './Header.style';

export const Header = () => {
  const isLoggedIn = useRecoilValue(LogInState);
  const setDialog = useSetRecoilState(DialogState);

  const theme = useTheme();

  const handleClick = (event: React.MouseEvent) => {
    if (isLoggedIn) return;

    setDialog({ open: true, type: 'login' });
    event.preventDefault();
  };

  return (
    <StyledHeader>
      <StyledHeaderLogo to="/">
        <img src={soomsil} alt="soomsil" width={158} height={25.5} />
      </StyledHeaderLogo>
      <StyledHeaderTabs>
        <StyledHeaderTab to="rankings">랭킹</StyledHeaderTab>
        <StyledHeaderTab to="register" onClick={handleClick}>
          서비스 등록
        </StyledHeaderTab>
        <StyledHeaderTab to="myDrawers" onClick={handleClick}>
          내 서랍장
        </StyledHeaderTab>
      </StyledHeaderTabs>
      <FlexGrowItem proportion={1} />
      <StyledHeaderSearchContainer>
        <StyledHeaderSearchInput type="text" />
        <IconContext.Provider
          value={{
            color: theme.color.buttonNormalPressed,
            size: '1.125rem',
          }}
        >
          <IcSearchLine />
        </IconContext.Provider>
      </StyledHeaderSearchContainer>
      <button style={{ marginLeft: '1rem' }}>
        <IconContext.Provider
          value={{
            color: theme.color.textPointed,
            size: '2rem',
          }}
        >
          <IcPersoncircleLine />
        </IconContext.Provider>
      </button>
    </StyledHeader>
  );
};
