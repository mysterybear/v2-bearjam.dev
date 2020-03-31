/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { AnimatePresence } from 'framer-motion'
import React from 'react'
import 'typeface-corben'
import 'typeface-inter'
import { MediaContext } from '../contexts'
import useMedia from '../hooks/useMedia'
import Footer from './Footer'
import Header from './Header'
import './styles/global.css'
import styles from './styles/layout.module.css'

const Layout = ({ children }) => {

  const screen = useMedia()
  return (
    <MediaContext.Provider value={screen}>
      <Header />
      <main className={styles.main}>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </main>
      <Footer />
    </MediaContext.Provider>
  )
}

export default Layout
