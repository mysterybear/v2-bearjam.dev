import { AnimatePresence, motion } from 'framer-motion';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { theme } from '../../tailwind.full.config';
import useMedia from '../hooks/useMedia';
import styles from '../styles/header.module.css';
import SvgLogo from './SvgLogo';
import SvgMenu from './SvgMenu';
import { forwardRef } from 'react';

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ's" },
  { href: "/contact", label: "Contact" },
];


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
  const MyLink = forwardRef((props, ref) => <GatsbyLink innerRef={ref} onClick={() => { setOpen(false) }} {...props}/>)
  const Link = motion.custom(MyLink)

  const variants = {
    navParent: {
      open: {
        transition: { staggerChildren: 0.5, delayChildren: 0.5 }
      },
      closed: {
        transition: { staggerChildren: 0.5, delayChildren: 0.5 }
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
      transition={{ type: 'spring', damping: 30, mass: 2, stiffness: 200 }}
    >
      <div>
        <Link to="/">
          <div className="flex items-center">
            <SvgLogo className={styles.logo} />
            <h1>{site.siteMetadata.title}</h1>
          </div>
        </Link>
          {screen > 0 ? (
            <motion.nav
              key="navDesktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.navDesktop}
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
      </div>
    </motion.header>
  );
}

export default Header;
