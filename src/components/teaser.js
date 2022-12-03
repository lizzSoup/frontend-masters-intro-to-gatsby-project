import { Link } from 'gatsby';
import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StaticImage } from 'gatsby-plugin-image';

export default function Teaser({
  gatsbyImage,
  altText,
  path,
  heading,
  description,
  as = 'div',
  isLink = false,
  ctaLabel,
}) {
  const Element = as;
  const cardContents = (
    <>
      <div className="img-wrapper">
        {gatsbyImage ? (
          <GatsbyImage image={gatsbyImage} alt={altText} className="image" />
        ) : (
          <StaticImage src="../images/cocktail.jpg" className="image" />
        )}
      </div>
      <div className="copy-wrapper">
        <div className="copy">
          <h2 className="heading">{heading}</h2>
          <div className="description">{description}</div>
        </div>
        {!isLink ? (
          <Link to={path} className="button">
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </>
  );

  return (
    <Element>
      {isLink ? (
        <Link to={path} className="content-link">
          {cardContents}
        </Link>
      ) : (
        cardContents
      )}
    </Element>
  );
}
