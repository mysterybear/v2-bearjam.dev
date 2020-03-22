import { graphql, Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <SEO title="Blog" />
      <h1>Awesome MDX Blog</h1>

      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
