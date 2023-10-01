import { ReactComponent as Finance } from 'assets/icons/finance.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';

import { GetRoute } from 'utils/routes/get-route';

import { IMainMenuItem } from './MainMenu.types';

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
