/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { AnimatePresence } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/global.css'
import Footer from './footer'
import Header from './header'
import styles from '../styles/layout.module.css'


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
