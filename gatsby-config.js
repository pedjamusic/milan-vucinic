/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Reasumby`,
    description: `Interactive Resume Gatsby Theme`,
    author: `Hulk Hogan`,
    tagline: `Lorem ipsum`,
    menuLinks: [
      {
        name: "Experience",
        url: "/experience/",
        type: "internal"
      },
      {
        name: "Education",
        url: "/education/",
        type: "internal"
      },
      {
        name: "Courses",
        url: "/courses/",
        type: "internal"
      },
      {
        name: "Achievements",
        url: "/achievements/",
        type: "internal"
      },
      {
        name: "Notable Experiences",
        url: "/notable/",
        type: "internal"
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/`,
        name: "content"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    }
  ],
}
