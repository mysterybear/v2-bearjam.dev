import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
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

const Link = motion.custom(GatsbyLink)

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
  const [open, setOpen] = useState(false)
  const toggle = () => { setOpen(!open) }

  const variants = {
    navParent: {
      open: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
      },
      closed: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
      }
    },
    navChildren: {
      open: {
        opacity: 1
      },
      closed: {
        opacity: 0
      }
    }
  }

  return (
    <motion.header
      className={styles.header}
      animate={open ? ({ height: '100%' }) : ({ height: 'auto' })}
    >
      <div>
        <Link to="/">
          <div className="flex items-center">
            <SvgLogo className={styles.logo} />
            <h1>{site.siteMetadata.title}</h1>
          </div>
        </Link>
        <AnimatePresence exitBeforeEnter>
          {screen > 0 ? (
            <motion.nav
              key="navDesktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {links.map(({ href, label }) => (
                <Link key={href} to={href}>{label}</Link>
              ))}
            </motion.nav>
          ) : (
              <>
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SvgMenu className={screen < 1 ? styles.menu : "hidden"} open={open} onClick={toggle} />
                </motion.div>
                <motion.div
                  key="navMobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={open ? styles.navMobileDiv : 'hidden'}
                >
                  <motion.nav
                    animate={open ? "open" : "closed"}
                    variants={variants.navParent}
                  >
                    {links.map(({ href, label }) => (
                      <Link
                        key={href}
                        to={href}
                        variants={variants.navChildren}
                      >{label}</Link>
                    ))}
                  </motion.nav>
                </motion.div>
              </>
            )}

        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
