import * as React from 'react';
import Layout from '../components/layout';
import RichText from '../components/rich-text';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { readingTime } from 'reading-time-estimator';

export default function BlogPost({ pageContext }) {
  return (
    <Layout
      description={pageContext.description.description}
      title={pageContext.heading}
      pageName="blog-post"
    >
      <article className="container-xl">
        <div className="copy-wrapper container-xs">
          <h1>{pageContext.heading}</h1>
          <p className="reading-time">
            {readingTime(pageContext.body.childMarkdownRemark.html).text}
          </p>
          <p className="created-at">Created {pageContext.createdAt}</p>
          <RichText html={pageContext.body.childMarkdownRemark.html} />
          <Link to={pageContext.cta.url} className="link">
            &larr; {pageContext.cta.label}
          </Link>
        </div>
        <div className="img-wrapper">
          <GatsbyImage image={getImage(pageContext.image)} className="image" />
        </div>
      </article>
    </Layout>
  );
}
