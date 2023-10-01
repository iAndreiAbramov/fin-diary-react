import React from 'react';

export interface ILink {
  linkTo: string;
  isOuterLink?: boolean;
  name?: string;
  title?: string;
  icon?: React.ReactElement;
}
