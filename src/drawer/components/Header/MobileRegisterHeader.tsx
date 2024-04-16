import { IcPersoncircleLine, IconContext } from '@yourssu/design-system-react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import soomsil from '@/assets/soomsil_v2_logo.svg';
import { FlexGrowItem } from '@/components/FlexContainer/FlexContainer';

import { StyledContainer, StyledHeaderTab } from './MobileRegisterHeader.style';

export const MobileRegisterHeader = () => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <Link to="/">
        <img src={soomsil} alt="soomsil" width={95} />
      </Link>
      <FlexGrowItem proportion={1} />
      <StyledHeaderTab to="register">서비스 등록</StyledHeaderTab>
      <button style={{ marginLeft: '0.5rem', height: '2rem' }}>
        <IconContext.Provider
          value={{
            color: theme.color.textPointed,
            size: '2rem',
          }}
        >
          <IcPersoncircleLine />
        </IconContext.Provider>
      </button>
    </StyledContainer>
  );
};
