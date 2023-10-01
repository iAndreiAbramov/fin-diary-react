import { ILink } from 'types/ui/Link.interface';

export interface IMainMenuItem extends ILink {
  isPrivate?: boolean;
}

export interface IMainMenuProps {
  handleMenuItemClick: () => void;
}
