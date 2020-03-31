import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { MediaContext } from '../contexts';
import Link from './Link';
import Nav from './Nav';
import styles from './styles/header.module.css';
import SvgBearjamAvatar from './SvgBearjamAvatar';
import SvgBearjamTitle from './SvgBearjamTitle';
import SvgMenu from './SvgMenu';

const Header = () => {
  const screen = useContext(MediaContext)

  const [open, setOpen] = useState(false)
  const toggle = () => { setOpen(!open) }

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
            <SvgBearjamTitle className="w-24 ml-1" />
          </div>
        </Link>
        <AnimatePresence exitBeforeEnter>
          {screen > 0 ? (
            <Nav
              key="navDesktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.navDesktop}
              linkProps={{}}
            />
          ) : (
              <>
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SvgMenu
                    className={screen < 1 ? styles.menu : "hidden"}
                    open={open}
                    onClick={toggle}
                  />
                </motion.div>
                <motion.div
                  key="navMobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.navMobileDiv}
                >
                  <Nav
                    animate={open ? "open" : "closed"}
                    initial="closed"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                      },
                      closed: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                      }
                    }}
                    linkProps={{
                      initial: "closed",
                      variants: {
                        open: {
                          opacity: 1
                        },
                        closed: {
                          opacity: 0
                        }
                      },
                      onClick: () => { setOpen(false) }
                    }}
                  />
                </motion.div>
              </>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
