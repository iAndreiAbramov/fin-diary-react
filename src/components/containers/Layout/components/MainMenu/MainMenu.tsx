import React from 'react';

import MainMenuItem from './components/MainMenuItem';
import { mainMenuItems } from './MainMenu.constants';
import { IMainMenuProps } from './MainMenu.types';

import * as S from './MainMenu.styled';

const MainMenu: React.FC<IMainMenuProps> = ({ handleMenuItemClick }) => {
  return (
    <S.MenuList>
      {mainMenuItems.map(({ name, linkTo, icon }) => (
        <MainMenuItem
          key={name}
          name={name}
          linkTo={linkTo}
          icon={icon}
          handleMenuItemClick={handleMenuItemClick}
        />
      ))}
    </S.MenuList>
  );
};

export default MainMenu;
