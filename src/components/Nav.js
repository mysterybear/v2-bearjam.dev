import React from 'react';
import { motion } from 'framer-motion';
import Link from './Link';

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const Nav = ({ linkProps, ...navProps }) => {
  return (
    <motion.nav
      {...navProps}
    >
      {links.map(({ href, label }) => (
        <Link
          className="text-black"
          key={href}
          to={href}
          {...linkProps}
        >
          {label}
        </Link>
      ))}
    </motion.nav>
  );
}

export default Nav;
