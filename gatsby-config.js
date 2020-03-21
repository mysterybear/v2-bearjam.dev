const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Bearjam`,
    description: `A JAMstack web development company`,
    author: `@mrandmrsbearjam`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '',   // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
              injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
              extensions: [],         // Third-party extensions providing additional themes and languages
              languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
                content,              //   - the string content of the line
                index,                //   - the zero-based index of the line within the code fence
                language,             //   - the language specified for the code fence
                meta                  //   - any options set on the code fence alongside the language (more on this later)
              }) => '',
              logLevel: 'warn'       // Set to 'info' to debug if something looks wrong
            }
          }
        ]
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
