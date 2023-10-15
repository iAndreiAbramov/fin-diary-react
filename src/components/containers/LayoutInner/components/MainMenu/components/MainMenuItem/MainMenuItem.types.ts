import { IMainMenuItem } from 'components/containers/LayoutInner/components/MainMenu/MainMenu.types';

export interface IMainMenuItemProps extends IMainMenuItem {
  handleMenuItemClick: () => void;
}
