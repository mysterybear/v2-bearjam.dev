module.exports = {
  siteMetadata: {
    title: `Bearjam`,
    description: `A JAMstack web development company`,
    author: `@mrandmrsbearjam`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
