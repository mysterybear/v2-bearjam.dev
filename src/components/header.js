import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/header.module.css'
import SvgLogo from './SvgLogo';
import { useStaticQuery } from 'gatsby';
import SvgMenu from './SvgMenu';
import { motion, useCycle } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';
import { theme } from '../../tailwind.full.config'
import { useEffect } from 'react';
import useMedia from '../hooks/useMedia'

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

  const screenMqs = [
    `(min-width: ${theme.screens.xl})`,
    `(min-width: ${theme.screens.lg})`,
    `(min-width: ${theme.screens.md})`,
    `(min-width: ${theme.screens.sm})`,
  ]

  const screen = useMedia(screenMqs, [4, 3, 2, 1], 0)
  const [open, toggle] = useState(false)

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

  const headerControls = useAnimation()
  const smNavControls = useAnimation()

  const toggler = () => {
    let isOpen = !open;
    toggle(isOpen);

    if (isOpen) {
      headerControls.start({
        height: '100%'
      })
      smNavControls.start({
        display: 'flex',
        opacity: 1
      })
    } else {
      headerControls.start({
        height: 'auto'
      })
      smNavControls.start({
        display: 'none',
        opacity: 0
      })
    }
  }

  useEffect(() => {
    if (screen > 0) {
      smNavControls.start({
        opacity: 1,
        display: 'flex'
      })
    } else {
      smNavControls.start({
        opacity: 0,
        display: 'none'
      })
    }
  }, [screen])

  return (
    <motion.header
      className={styles.header}
      animate={headerControls}
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
            animate={smNavControls}
          />
        </div>
        <div>
          <SvgMenu className={screen < 1 ? styles.menu : "hidden"} open={open} onClick={toggler} />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
