import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"

const shortcodes = { Link } // Provide common components here

export default function PostTemplate({ data: { mdx } }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <SEO title={mdx.frontmatter.title} />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </motion.div>
  )
}
export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
