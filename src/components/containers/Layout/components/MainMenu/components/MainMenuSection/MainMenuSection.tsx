import React from 'react';

import MainMenuItem from 'components/containers/Layout/components/MainMenu/components/MainMenuItem';

import { IMainMenuSectionProps } from './MainMenuSection.types';

import * as S from './MainMenuSection.styled';

const MainMenuSection: React.FC<IMainMenuSectionProps> = ({
  items,
  icon,
  title,
  handleMenuItemClick,
}) => {
  return (
    <S.MainMenuSectionWrapper>
      <S.SectionTitle>
        {icon} {title}
      </S.SectionTitle>
      <S.ItemsWrapper>
        {items.map(({ name, linkTo }) => (
          <MainMenuItem
            key={name}
            linkTo={linkTo}
            name={name}
            handleMenuItemClick={handleMenuItemClick}
          />
        ))}
      </S.ItemsWrapper>
    </S.MainMenuSectionWrapper>
  );
};

export default MainMenuSection;
