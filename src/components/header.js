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
import { AnimatePresence } from 'framer-motion';

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
  const navDesktopControls = useAnimation()
  const navMobileControls = useAnimation()

  const toggler = () => {
    let isOpen = !open;
    toggle(isOpen);

    if (isOpen) {
      headerControls.start({
        height: '100%'
      })
      navDesktopControls.start({
        display: 'flex',
        opacity: 1
      })
    } else {
      headerControls.start({
        height: 'auto'
      })
      navDesktopControls.start({
        display: 'none',
        opacity: 0
      })
    }
  }

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
        <AnimatePresence exitBeforeEnter>
          {screen > 0 && (
            <motion.div
              key="navDesktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Nav className={styles.navDesktop} />
            </motion.div>
          ) || (
              <>
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SvgMenu className={screen < 1 ? styles.menu : "hidden"} open={open} onClick={toggler} />
                </motion.div>
                {open && (
                  <motion.div
                    key="navMobile"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.navMobile}
                  >
                    <Nav />
                  </motion.div>
                )}
              </>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
