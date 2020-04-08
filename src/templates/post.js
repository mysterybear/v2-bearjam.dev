import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Presence from "../components/Presence"
import SEO from "../components/SEO"

const shortcodes = { Link } // Provide common components here

export default function PostTemplate({ data: { mdx } }) {
  return (
    <Presence key={mdx.frontmatter.title}>
      <SEO title={mdx.frontmatter.title} />
      <div className={mdx.frontmatter.classnames}>
        <h1>{mdx.frontmatter.title}</h1>
        <h3>by {mdx.frontmatter.author}</h3>
        <time><em>{mdx.frontmatter.date}</em></time>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Presence>
  )
}
export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        author
        classnames
      }
    }
  }
`
