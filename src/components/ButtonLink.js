import React from 'react'
import Button from './Button'
import Link from './Link'

const ButtonLink = ({
  className,
  to,
  children,
  ...props
}) => {
 return (
   <Button className={className} {...props}>
     <Link to={to}>{children}</Link>
   </Button>
 );
}

export default ButtonLink;
