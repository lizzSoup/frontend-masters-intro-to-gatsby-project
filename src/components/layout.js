import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo.js';
import '../styles/styles.scss';

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
  pageName,
  ...rest
}) {
  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header className="header" {...rest}>
        <div className="header-wrapper container">
          <Link to="/">{meta.title}</Link>
          <nav>
            <Link to="/products">Products</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
      </header>
      <main className={pageName}>{children}</main>
    </>
  );
}
