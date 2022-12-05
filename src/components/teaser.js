import { Link } from 'gatsby';
import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StaticImage } from 'gatsby-plugin-image';
import ButtonLink from './button-link';
import RichText from './rich-text';

export default function Teaser({
  gatsbyImage,
  heading,
  richText,
  description,
  altText,
  path,
  ctaLabel,
  isLink = false,
  as = 'div',
  ...rest
}) {
  const Element = as;

  const teaserContents = (
    <div className="teaser-contents">
      <div className="copy-wrapper">
        <div className="copy">
          <h2 className="heading">{heading}</h2>
          {richText ? (
            <RichText html={richText} />
          ) : (
            <div className="description">{description}</div>
          )}
          {!isLink && path ? <ButtonLink path={path} label={ctaLabel} /> : null}
        </div>
      </div>
      <div className="img-wrapper">
        {gatsbyImage ? (
          <GatsbyImage image={gatsbyImage} alt={altText} className="image" />
        ) : (
          <StaticImage
            src="../images/kalen-emsley-Bkci_8qcdvQ-unsplash (1).jpg"
            className="image"
          />
        )}
      </div>
    </div>
  );

  return (
    <Element {...rest}>
      {isLink ? (
        <Link to={path} className="content-link">
          {teaserContents}
        </Link>
      ) : (
        teaserContents
      )}
    </Element>
  );
}
