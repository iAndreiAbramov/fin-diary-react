import { ReactComponent as Finance } from 'assets/icons/finance.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';

import { GetRoute } from 'utils/routes/get-route';

import { IMainMenuItem, IMainMenuSection } from './MainMenu.types';

export const financeItems: IMainMenuItem[] = [
  { name: 'Сводка', linkTo: GetRoute.Summary() },
  { name: 'Доходы', linkTo: GetRoute.Income() },
  { name: 'Расходы', linkTo: GetRoute.Spending() },
];

export const cabinetItems: IMainMenuItem[] = [
  {
    name: 'Смена пароля',
    linkTo: GetRoute.ChangePassword(),
  },
];

export const mainMenuSections: IMainMenuSection[] = [
  { title: 'Финансы', icon: <Finance />, items: financeItems },
  { title: 'Личный кабинет', icon: <User />, items: cabinetItems },
];
