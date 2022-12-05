const path = require('path');

exports.createPages = async function ({ actions: { createPage }, graphql }) {
  const blogPostsQuery = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          heading
          description {
            description
          }
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
              width: 1800
            )
            description
          }
          path
          body {
            childMarkdownRemark {
              html
            }
          }
          cta {
            label
            url
          }
          createdAt(formatString: "dddd MMMM Do, YYYY")
        }
      }
    }
  `);

  const blogPosts = blogPostsQuery.data.allContentfulBlogPost.nodes;

  blogPosts.forEach((blogPost) => {
    createPage({
      path: blogPost.path,
      component: path.resolve('./src/templates/blog-post.js'),
      context: blogPost,
    });
  });
};
