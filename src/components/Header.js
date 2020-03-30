import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import useMedia from '../hooks/useMedia';
import styles from './styles/header.module.css';
import Link from './Link';
import SvgLogo from './SvgLogo';
import SvgMenu from './SvgMenu';
import SvgBearjamAvatar from './SvgBearjamAvatar'
import SvgBearjamTitle from './SvgBearjamTitle';

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

  const large = useMedia({
    queries: {
      "(min-width: 640px)": true
    },
    defaultValue: false
  })

  const [open, setOpen] = useState(false)
  const toggle = () => { setOpen(!open) }

  const variants = {
    navParent: {
      open: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
      },
      closed: {
        // transition: { staggerChildren: 1, delayChildren: 1 }
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
            <SvgBearjamAvatar className="w-12 p-2 ml-1" />
            <SvgBearjamTitle className="w-24 ml-1"/>
          </div>
        </Link>
        {large ? (
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
                <SvgMenu className={large < 1 ? styles.menu : "hidden"} open={open} onClick={toggle} />
              </motion.div>
              <motion.div
                key="navMobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.navMobileDiv}
              >
                <motion.nav
                  animate={open ? "open" : "closed"}
                  initial="closed"
                  variants={variants.navParent}
                >
                  {links.map(({ href, label }, i) => (
                    <Link
                      key={i}
                      to={href}
                      initial="closed"
                      variants={variants.navChildren}
                      onClick={() => { setOpen(false) }}
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
