import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useCloseByClick } from 'hooks/useCloseByClick';
import { useCloseByEsc } from 'hooks/useCloseByEsc';
import { useScrollToTop } from 'hooks/useScrollToTop';

import Footer from './components/Footer';
import HeaderContent from './components/Header';
import MainMenu from './components/MainMenu';

import * as S from './Layout.styled';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [isMainMenuActive, setIsMainMenuActive] = useState(false);

  const closeMainMenu = () => setIsMainMenuActive(false);
  const handleMainMenuClick = () => setIsMainMenuActive((current) => !current);

  useScrollToTop(pathname);
  useCloseByClick({ isShown: isMainMenuActive, cb: closeMainMenu });
  useCloseByEsc({ isShown: isMainMenuActive, cb: closeMainMenu });

  return (
    <>
      <S.HeaderWrapper>
        <HeaderContent
          isMainMenuActive={isMainMenuActive}
          handleMainMenuButtonClick={handleMainMenuClick}
        />
      </S.HeaderWrapper>
      <S.DashboardWrapper>
        <S.MenuWrapper $isActive={isMainMenuActive}>
          <MainMenu handleMenuItemClick={closeMainMenu} />
        </S.MenuWrapper>
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
        <S.FooterWrapper>
          <Footer />
        </S.FooterWrapper>
      </S.DashboardWrapper>
    </>
  );
};

export default Layout;
