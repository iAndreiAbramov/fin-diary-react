import { IMainMenuSection } from 'components/containers/LayoutInner/components/MainMenu/MainMenu.types';

export interface IMainMenuSectionProps extends IMainMenuSection {
  handleMenuItemClick: () => void;
}
