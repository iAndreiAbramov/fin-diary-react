import React from 'react';
import { ILink } from 'types/ui/Link.interface';

export interface IMainMenuItem extends ILink {
  isPrivate?: boolean;
}

export interface IMainMenuSection {
  title: string;
  icon: React.ReactElement;
  items: IMainMenuItem[];
}

export interface IMainMenuProps {
  handleMenuItemClick: () => void;
}
