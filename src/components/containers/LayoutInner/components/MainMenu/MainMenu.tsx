import React from 'react';

import MainMenuSection from './components/MainMenuSection';
import { mainMenuSections } from './MainMenu.constants';
import { IMainMenuProps } from './MainMenu.types';

import * as S from './MainMenu.styled';

const MainMenu: React.FC<IMainMenuProps> = ({ handleMenuItemClick }) => {
  return (
    <S.MenuList>
      {mainMenuSections.map(({ title, icon, items }) => (
        <MainMenuSection
          key={title}
          title={title}
          icon={icon}
          items={items}
          handleMenuItemClick={handleMenuItemClick}
        />
      ))}
    </S.MenuList>
  );
};

export default MainMenu;
