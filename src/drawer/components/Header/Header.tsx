
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { IcSearchLine } from '@yourssu/design-system-react';
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
  StyledProfileIconButton,
} from './Header.style';

export const Header = () => {
  const isLoggedIn = useRecoilValue(LogInState);
  const setDialog = useSetRecoilState(DialogState);

  const theme = useTheme();
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClickAuthTab = (event: React.MouseEvent) => {
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
        <StyledHeaderTab to="register" onClick={handleClickAuthTab}>
          서비스 등록
        </StyledHeaderTab>
        <StyledHeaderTab to="myDrawers" onClick={handleClickAuthTab}>
          내 서랍장
        </StyledHeaderTab>
      </StyledHeaderTabs>
      <FlexGrowItem proportion={1} />
      <StyledHeaderSearchContainer>
        <StyledHeaderSearchInput
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              navigate(`/drawer/search?keyword=${searchValue}`);
            }
          }}
        />
        <IcSearchLine color={theme.color.buttonNormalPressed} size="1.25rem" />
      </StyledHeaderSearchContainer>
      <StyledProfileIconButton color={theme.color.textPointed} size="2rem" />
    </StyledHeader>
  );
};
