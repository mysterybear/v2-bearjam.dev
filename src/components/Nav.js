import React from 'react';
import { motion } from 'framer-motion';
import Link from './Link';

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ's" },
  { href: "/contact", label: "Contact" },
]

const Nav = ({ linkProps, ...navProps }) => {
  return (
    <motion.nav
      {...navProps}
    >
      {links.map(({ href, label }) => (
        <Link
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
