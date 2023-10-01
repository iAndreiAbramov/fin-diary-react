import React from 'react';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';

import { TextItem } from 'components/atoms/TextItem';

import { IHeaderProps } from './Header.types';

import * as S from './Header.styled';

const Header: React.FC<IHeaderProps> = ({ handleMainMenuButtonClick, isMainMenuActive }) => {
  return (
    <S.Wrapper>
      <TextItem>Header</TextItem>
      <S.MenuButton
        displayType="borderless"
        icon={isMainMenuActive ? <Close /> : <Menu />}
        title="Меню"
        onClick={handleMainMenuButtonClick}
      />
    </S.Wrapper>
  );
};

export default Header;
