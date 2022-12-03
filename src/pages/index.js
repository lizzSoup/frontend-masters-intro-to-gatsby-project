import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default function Index() {
  return (
    <Layout className="home">
      <Hero />
      <div>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="A corgi sitting on a bed with red paper hearts all over it. It looks unamused."
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
    </Layout>
  );
}
