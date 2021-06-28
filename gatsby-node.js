const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blog-post.js")
    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((res) => {
          if (res.errors){
              reject(res.errors)
          }
          res.data.allContentfulBlogPost.edges.forEach(edge => {
              createPage({
                  path: edge.node.slug,
                  component: blogPostTemplate,
                  context: {
                      slug: edge.node.slug
                  }
              })
          })
          return
      })
    )
  })
}
