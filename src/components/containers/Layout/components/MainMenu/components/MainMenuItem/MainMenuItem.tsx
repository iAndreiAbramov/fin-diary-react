import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { IMainMenuItemProps } from './MainMenuItem.types';

import * as S from './MainMenuItem.styled';

const MainMenuItem: React.FC<IMainMenuItemProps> = ({
  name,
  icon,
  linkTo,
  isOuterLink,
  handleMenuItemClick,
}) => {
  const { pathname } = useLocation();
  const isActive = useMemo(() => pathname === linkTo, [pathname, linkTo]);

  return (
    <li>
      <S.ListItem
        key={name}
        linkTo={linkTo}
        handleClick={handleMenuItemClick}
        name={name}
        isOuterLink={isOuterLink}
        icon={icon}
        $isActive={isActive}
      />
    </li>
  );
};

export default MainMenuItem;
