import { IcPersoncircleLine, IcSearchLine, IconContext } from '@yourssu/design-system-react';
import { useTheme } from 'styled-components';

import soomsil from '@/assets/soomsil_logo.svg';
import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderSearchContainer,
  StyledHeaderSearchInput,
  StyledHeaderTab,
  StyledHeaderTabs,
} from './Header.style';

export const Header = () => {
  const theme = useTheme();

  return (
    <StyledHeader>
      <StyledHeaderLogo to="/">
        <img src={soomsil} alt="soomsil" width={158} height={25.5} />
      </StyledHeaderLogo>
      <StyledHeaderTabs>
        <StyledHeaderTab to="rankings">랭킹</StyledHeaderTab>
        <StyledHeaderTab to="register">서비스 등록</StyledHeaderTab>
        <StyledHeaderTab to="myDrawers">내 서랍장</StyledHeaderTab>
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
