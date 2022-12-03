import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function custom404() {
  return (
    <Layout pageName="four-zero-four" title="Not Found">
      <div className="container-xs">
        <h1>Sorry, the page you're looking for could not be found!</h1>
        <Link to="/">&larr; Go home</Link>
      </div>
    </Layout>
  );
}
