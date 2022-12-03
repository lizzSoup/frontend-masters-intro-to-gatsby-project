import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import Teaser from '../components/teaser.js';

export const query = graphql`
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
            width: 500
          )
          description
        }
        path
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
        <h1 className="heading">Latest Posts</h1>
        <ul className="gallery">
          {dataNodes.map((blogPost) => {
            const image = getImage(blogPost.image);
            return (
              <li className="teaser">
                <Teaser
                  path={blogPost.path}
                  gatsbyImage={image}
                  altText={blogPost.image.description}
                  heading={blogPost.heading}
                  description={blogPost.description.description}
                  // isLink={true}
                  ctaLabel="TEST"
                />
              </li>
            );
          })}
        </ul>
      </article>
    </Layout>
  );
}
