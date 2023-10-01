import React from 'react';
import { Link } from 'react-router-dom';
import { ILink } from 'types/ui/Link.interface';

interface ILinkProps extends ILink {
  className?: string;
  handleClick?: () => void;
}

const LinkItem: React.FC<ILinkProps> = ({
  className,
  name,
  icon,
  linkTo,
  title,
  isOuterLink = false,
  handleClick,
}) => {
  return (
    <>
      {isOuterLink ? (
        <a
          className={className}
          href={linkTo}
          title={title}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
        >
          {icon && icon}
          {name && <span>{name}</span>}
        </a>
      ) : (
        <Link className={className} to={linkTo} title={title} onClick={handleClick}>
          {icon && icon}
          {name && <span>{name}</span>}
        </Link>
      )}
    </>
  );
};

export default React.memo(LinkItem);
