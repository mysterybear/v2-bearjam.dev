import { graphql, Link } from "gatsby"
import React from "react"
import Presence from "../components/presence"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Presence>
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
    </Presence>
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
