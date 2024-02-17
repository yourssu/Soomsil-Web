import { IcPersoncircleLine, IcSearchLine, IconContext } from '@yourssu/design-system-react';
<<<<<<< HEAD
=======
import { useTheme } from 'styled-components';
>>>>>>> 8d5579a6ff00d34db67ded4699734359b36db29d

import soomsil from '@/assets/soomsil.svg';
import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderTab,
  StyledHeaderTabs,
  StyledHeaderSearchContainer,
  StyledHeaderSearchInput,
<<<<<<< HEAD
  StyledHeaderIconButton,
  StyledSpacer,
=======
>>>>>>> 8d5579a6ff00d34db67ded4699734359b36db29d
} from './Header.style';

const Header = () => {
  const theme = useTheme();

  return (
    <StyledHeader>
      <StyledHeaderLogo to="/drawer">
        <img src={soomsil} alt="soomsil" />
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
<<<<<<< HEAD
            color: '#8E9398',
=======
            color: theme.color.buttonNormalPressed,
>>>>>>> 8d5579a6ff00d34db67ded4699734359b36db29d
            size: '1.125rem',
          }}
        >
          <IcSearchLine />
        </IconContext.Provider>
      </StyledHeaderSearchContainer>
<<<<<<< HEAD
      <StyledHeaderIconButton>
        <IconContext.Provider
          value={{
            color: '#816DEC',
=======
      <button style={{ marginLeft: '1rem' }}>
        <IconContext.Provider
          value={{
            color: theme.color.textPointed,
>>>>>>> 8d5579a6ff00d34db67ded4699734359b36db29d
            size: '2rem',
          }}
        >
          <IcPersoncircleLine />
        </IconContext.Provider>
<<<<<<< HEAD
      </StyledHeaderIconButton>
=======
      </button>
>>>>>>> 8d5579a6ff00d34db67ded4699734359b36db29d
    </StyledHeader>
  );
};

export default Header;
