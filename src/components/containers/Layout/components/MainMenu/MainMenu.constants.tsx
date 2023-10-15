import { ReactComponent as Finance } from 'assets/icons/finance.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';

import { GetRoute } from 'utils/routes/get-route';

import { IMainMenuItem, IMainMenuSection } from './MainMenu.types';

export const mainMenuItems: IMainMenuItem[] = [
  {
    name: 'Финансы',
    linkTo: GetRoute.Dashboard(),
    icon: <Finance />,
    isOuterLink: false,
    isPrivate: false,
  },
  {
    name: 'Кабинет',
    linkTo: GetRoute.Cabinet(),
    icon: <User />,
    isOuterLink: false,
    isPrivate: false,
  },
];

export const financeItems: IMainMenuItem[] = [
  { name: 'Расходы', linkTo: GetRoute.Dashboard() },
  { name: 'Доходы', linkTo: GetRoute.Dashboard() },
];

export const cabinetItems: IMainMenuItem[] = [
  {
    name: 'Смена пароля',
    linkTo: GetRoute.Cabinet(),
  },
];

export const mainMenuSections: IMainMenuSection[] = [
  { title: 'Финансы', icon: <Finance />, items: financeItems },
  { title: 'Личный кабинет', icon: <User />, items: cabinetItems },
];
