import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

export const query = graphql`
  query cocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function About({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
      pageName="About"
    >
      <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling around it."
      />
      <main>
        <h1>About this site</h1>
        <Link to="/">Go home</Link>
      </main>
    </Layout>
  );
}
