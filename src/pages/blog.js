import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import Teaser from '../components/teaser.js';

export const query = graphql`
  query {
    featured: allContentfulBlogPost(
      filter: { isFeaturedBlog: { eq: true } }
      sort: { createdAt: DESC }
      limit: 4
    ) {
      nodes {
        heading
        description {
          description
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            width: 1000
          )
          description
        }
        path
        cta {
          label
          url
        }
      }
    }
    blogs: allContentfulBlogPost(
      filter: { isFeaturedBlog: { eq: false } }
      sort: { createdAt: DESC }
    ) {
      nodes {
        heading
        description {
          description
        }
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            width: 500
          )
          description
        }
        path
        cta {
          label
          url
        }
      }
    }
  }
`;

export default function Blog({ data }) {
  const featuredBlogs = data.featured.nodes;
  const blogs = data.blogs.nodes;

  return (
    <Layout
      title="About This Site"
      description="More information about this site."
      pageName="blog-landing-page"
    >
      <article class="blog-landing-page">
        <h1 className="page-heading container">Blog</h1>
        <ul className="gallery container">
          <h2 className="subheading">Featured Posts</h2>

          {/* Featured Blogs */}
          {featuredBlogs.map((blogPost) => {
            const image = getImage(blogPost.image);
            return (
              <Teaser
                path={blogPost.path}
                gatsbyImage={image}
                altText={blogPost.image.description}
                heading={blogPost.heading}
                description={blogPost.description.description}
                isLink={false}
                ctaLabel="Read More"
                as="li"
                className="featured-blog teaser"
              />
            );
          })}

          {/* Blogs */}
          <h2 className="subheading">Latest Posts</h2>
          {blogs.map((blogPost) => {
            const image = getImage(blogPost.image);
            return (
              <Teaser
                path={blogPost.path}
                gatsbyImage={image}
                altText={blogPost.image.description}
                heading={blogPost.heading}
                description={blogPost.description.description}
                isLink={false}
                ctaLabel="Read More"
                as="li"
                className="teaser"
              />
            );
          })}
        </ul>
      </article>
    </Layout>
  );
}
