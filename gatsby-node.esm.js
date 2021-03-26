const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const buildPages = (edges, createPage) => {
  const pages = edges.filter((edge) => {
    if ("templateKey" in edge.node.frontmatter) {
      return edge
    }
  })

  // create pages with the filtered edges
  pages.map((page) => {
    console.log(`Creating page ${JSON.stringify(page.node.frontmatter)}`)

    createPage({
      path: page.node.fields.slug,
      // getting the component to render the page using the templateKey property
      component: path.resolve(
        `src/templates/${String(page.node.frontmatter.templateKey)}.js`
      ),
      context: {
        id: page.node.id,
        slug: page.node.fields.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // graphql query for pages only
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(pages|blog)/i" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `
  )
  // if errors then throw
  if (result.errors) {
    throw result.errors
  }
  console.log("Creating pages ---->>>>")
  // Create pages
  buildPages(result.data.allMarkdownRemark.edges, createPage)
}