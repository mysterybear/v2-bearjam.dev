import { graphql, Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <>
      <SEO title="Blog" />
      <div>
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
      </div>
    </>
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
