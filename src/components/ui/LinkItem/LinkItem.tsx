import React from 'react';
import { Link } from 'react-router-dom';

import { ILink } from './LinkItem.types';

interface ILinkProps extends ILink {
  className?: string;
}

const LinkItem: React.FC<ILinkProps> = ({
  className,
  name,
  icon,
  linkTo,
  title,
  isOuterLink = false,
}) => {
  return (
    <>
      {isOuterLink ? (
        <a className={className} href={linkTo} title={title} target="_blank" rel="noreferrer">
          {icon && icon}
          {name && <span>{name}</span>}
        </a>
      ) : (
        <Link className={className} to={linkTo} title={title}>
          {icon && icon}
          {name && <span>{name}</span>}
        </Link>
      )}
    </>
  );
};

export default React.memo(LinkItem);
