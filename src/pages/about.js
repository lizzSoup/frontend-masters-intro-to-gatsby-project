import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function About({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site."
      pageName="About"
    >
      <main className="container">
        <h1>About this site</h1>
        <Link to="/">&larr; Go home</Link>
      </main>
    </Layout>
  );
}
