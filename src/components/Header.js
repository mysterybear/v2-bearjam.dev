import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { MediaContext } from '../contexts';
import Link from './Link';
import links from './links';
import SvgBearjamAvatar from './SvgBearjamAvatar';
import SvgBearjamTitle from './SvgBearjamTitle';
import SvgMenu from './SvgMenu';
import { useLocation } from '@reach/router'
import { theme } from '../../tailwind.full.config'


const Header = () => {
  const
    screen = useContext(MediaContext),

    [open, setOpen] = useState(false),
    toggle = () => { setOpen(!open) },

    { pathname } = useLocation()
    ;

  return (
    <motion.header
      className="fixed w-full overflow-hidden shadow-md z-50 bg-white"
      animate={open ? {
        height: '100%'
      } : {
          height: 'auto',
          transition: {
            delay: 0.8,
            type: "spring",
            damping: 30,
            mass: 2,
            stiffness: 200
          }
        }
      }
      transition={{ type: 'spring', damping: 30, mass: 2, stiffness: 200 }}
    >
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <SvgBearjamAvatar className="w-12 p-2 ml-1" />
            <SvgBearjamTitle className="w-24 ml-1" />
          </div>
        </Link>
        <AnimatePresence exitBeforeEnter>
          {screen > 0 ? (
            <motion.nav
              key="navDesktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mr-2"
            >
              {links.map(({ href, label }) => {
                const active = pathname === href
                return (
                  <Link
                    className="mr-10"
                    key={href}
                    to={href}
                    animate={active ? {
                      color: theme.colors.pink[400]
                    } : {
                        color: theme.colors.blue[800]
                      }}
                  >
                    {label}
                  </Link>
                )
              })}
            </motion.nav>
          ) : (
              <>
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SvgMenu
                    className={screen < 1 ? "w-6 mr-2" : "hidden"}
                    open={open}
                    onClick={toggle}
                  />
                </motion.div>
                <motion.div
                  key="navMobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute w-full h-full inset-0 pointer-events-none"
                >
                  <motion.nav
                    className="w-full h-full flex flex-col justify-center items-center"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.15, delayChildren: 0.15 }
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: 0.1,
                          staggerDirection: -1
                        }
                      }
                    }}
                    initial="closed"
                    animate={open ? "open" : "closed"}
                  >

                    {links.map(({ href, label }) => (
                      <Link
                        className="pointer-events-auto my-8 text-xl tracking-widest"
                        key={href}
                        to={href}
                        initial="closed"
                        custom={{ active: href === pathname }}
                        variants={{
                          open: ({ active }) => ({
                            opacity: 1,
                            color: active ? theme.colors.pink[400] : theme.colors.blue[800]
                          }),
                          closed: ({ active }) => ({
                            opacity: 0,
                            color: active ? theme.colors.pink[400] : theme.colors.blue[800]
                          })
                        }}
                        onClick={() => { setOpen(false) }}
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.nav>
                </motion.div>
              </>
            )}
        </AnimatePresence>
      </div>
    </motion.header >
  );
}

export default Header;
