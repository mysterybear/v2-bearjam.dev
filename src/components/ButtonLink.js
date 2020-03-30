import React from 'react';
import Button from './Button';
import Link from './Link';

const ButtonLink = ({
  className = "bg-pink-400 px-4 py-2 rounded-lg shadow-md border-2",
  to,
  children,
  ...props
}) => {
 return (
   <Button className={className} {...props}>
     <Link className="text-purple-100" to={to}>{children}</Link>
   </Button>
 );
}

export default ButtonLink;
