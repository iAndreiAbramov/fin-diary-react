import { IMainMenuItem } from 'components/containers/Layout/components/MainMenu/MainMenu.types';

export interface IMainMenuItemProps extends IMainMenuItem {
  handleMenuItemClick: () => void;
}
