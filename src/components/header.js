import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/header.module.css'
import SvgLogo from './SvgLogo';
import { useStaticQuery } from 'gatsby';
import SvgMenu from './SvgMenu';
import { motion, useCycle } from 'framer-motion';

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ's" },
  { href: "/contact", label: "Contact" },
];

const Nav = ({ ...props }) => {
  return (
    <motion.nav {...props}>
      {links.map(({ href, label }) => (
        <Link key={href} to={href}>{label}</Link>
      ))}
    </motion.nav>
  )
}

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const [open, cycleOpen] = useCycle(false, true)

  const variants = {
    headerOpen: {
      height: '100%'
    },
    headerClosed: {
      height: '3rem'
    },
    smNavOpen: {
      opacity: 1,
      display: 'flex'
    },
    smNavClosed: {
      opacity: 0,
      display: 'none'
    }
  }

  return (
    <motion.header
      className={styles.header}
      variants={variants}
      animate={open ? 'headerOpen' : 'headerClosed'}
    >
      <div>
        <Link to="/">
          <div className="flex items-center">
            <SvgLogo className={styles.logo} />
            <h1>{site.siteMetadata.title}</h1>
          </div>
        </Link>
        <div>
          <Nav
            className={styles.smNav}
            variants={variants}
            animate={open ? 'smNavOpen' : 'smNavClosed' }
          />
        </div>
        <div>
          <SvgMenu className={styles.menu} open={open} onClick={cycleOpen} />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
