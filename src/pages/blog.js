import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import Teaser from '../components/teaser.js';

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { createdAt: DESC }) {
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
        isFeaturedBlog
      }
    }
  }
`;

export default function Blog({ data }) {
  const dataNodes = data.allContentfulBlogPost.nodes;
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
      pageName="blog-landing-page"
    >
      <article className="container">
        <h1 className="page-heading">Blog Posts</h1>
        <ul className="gallery">
          <h2 className="subheading">Featured Posts</h2>
          <h2 className="subheading">Latest Posts</h2>
          {dataNodes.map((blogPost) => {
            const image = getImage(blogPost.image);
            const isFeatured = blogPost.isFeaturedBlog === true;
            const teaserClass = isFeatured ? 'featured-blog teaser' : 'teaser';
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
                className={teaserClass}
              />
            );
          })}
        </ul>
      </article>
    </Layout>
  );
}
