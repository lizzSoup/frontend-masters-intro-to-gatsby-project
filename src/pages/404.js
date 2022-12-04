import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function custom404() {
  return (
    <Layout pageName="four-zero-four" title="Not Found">
      <div className="container-xs">
        <h1 className="heading">
          Baaaah. We couldn't find the page you were looking for.
        </h1>
        <p className="body">Our most sheepish appologies.</p>
        <StaticImage src="../images/sulthan-auliya-E9ex3BxWqG0-unsplash.jpg" />
        <Link to="/" className="link">
          &larr; Go home
        </Link>
      </div>
    </Layout>
  );
}
