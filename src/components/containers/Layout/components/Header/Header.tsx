import React from 'react';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';

import { IHeaderProps } from './Header.types';

import * as S from './Header.styled';

const Header: React.FC<IHeaderProps> = ({ handleMainMenuButtonClick, isMainMenuActive }) => {
  return (
    <S.Wrapper>
      <S.MenuButton
        displayType="borderless"
        icon={isMainMenuActive ? <Close /> : <Menu />}
        title="Меню"
        onClick={handleMainMenuButtonClick}
      />
      <S.LogoutButton displayType="borderless" icon={<Logout />} />
    </S.Wrapper>
  );
};

export default Header;
