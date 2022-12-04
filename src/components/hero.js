import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Link } from 'gatsby';

export default function Hero({
  heading,
  description,
  gatsbyImage,
  altText,
  cta,
}) {
  return (
    <section className="hero">
      <div className="container">
        <div className="copy-wrapper">
          <h1 className="heading">
            <span className="logo">be amazed</span> {<br />} {heading}
          </h1>
          <p className="description" q>
            {description}
          </p>
          {cta ? (
            <Link to={cta.url} className="button">
              {cta.label}
            </Link>
          ) : null}
          <div className="logo-wrapper"></div>
        </div>
        <div className="img-wrapper">
          <GatsbyImage image={gatsbyImage} alt={altText} className="image" />
        </div>
      </div>
    </section>
  );
}
