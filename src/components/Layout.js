/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { AnimatePresence } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import 'typeface-corben'
import 'typeface-inter'
import './styles/global.css'
import styles from './styles/layout.module.css'
import Footer from './Footer'
import Header from './Header'


const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <main className={styles.main}>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default Layout
