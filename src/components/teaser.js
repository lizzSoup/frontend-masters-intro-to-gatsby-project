import { Link } from 'gatsby';
import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StaticImage } from 'gatsby-plugin-image';
import ButtonLink from './button-link';
import RichText from './rich-text';

export default function Teaser({
  gatsbyImage,
  altText,
  path,
  heading,
  description,
  richText,
  as = 'div',
  isLink = false,
  ctaLabel,
  ...rest
}) {
  const Element = as;
  const teaserContents = (
    <div className="teaser-contents">
      <div className="copy-wrapper">
        <div className="copy">
          <h2 className="heading">{heading}</h2>
          <div className="test">
            {richText ? (
              <RichText html={richText} />
            ) : (
              <div className="description">{description}</div>
            )}
          </div>
        </div>
        {!isLink && path ? <ButtonLink path={path} label={ctaLabel} /> : null}
      </div>
      <div className="img-wrapper">
        {gatsbyImage ? (
          <GatsbyImage image={gatsbyImage} alt={altText} className="image" />
        ) : (
          <StaticImage
            src="../images/shiangling-RQbwjCKWxQw-unsplash.jpg"
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
