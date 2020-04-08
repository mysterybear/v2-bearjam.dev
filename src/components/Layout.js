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

const Layout = ({ children }) => {

  const screen = useMedia()
  return (
    <MediaContext.Provider value={screen}>
      <Header key="header" />
      <main className="flex-1-0-auto max-w-4xl mx-auto pt-16 px-2 mb-12 sm:mb-20 sm:px-4 lg:px-0">
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </main>
      <Footer key="footer" />
    </MediaContext.Provider>
  )
}

export default Layout
