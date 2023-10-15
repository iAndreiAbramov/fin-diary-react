import { IMainMenuSection } from 'components/containers/Layout/components/MainMenu/MainMenu.types';

export interface IMainMenuSectionProps extends IMainMenuSection {
  handleMenuItemClick: () => void;
}
