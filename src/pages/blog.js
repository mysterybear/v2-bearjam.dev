import { graphql, Link } from "gatsby"
import React from "react"
import Presence from "../components/Presence"
import SEO from "../components/SEO"
import { motion } from "framer-motion"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Presence key="blogPage" className="mt-3 sm:mt-6">
      <SEO title="Blog" />
      <h1>Awesome MDX Blog</h1>

      <div>
        {posts
          .filter(({ node: post }) => post.excerpt.length > 20)
          .map(({ node: post }) => (
            <motion.div
              key={post.id}
              className="mb-6"
            >
              <Link to={post.fields.slug}>
                <h2 className="text-2xl">{post.frontmatter.title}</h2>
              </Link>
              <date className="date">{post.frontmatter.date}</date>
              <p>{post.excerpt}</p>
            </motion.div>
          ))}
      </div>
    </Presence>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
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
