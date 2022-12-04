import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, Link } from 'gatsby';

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      <title> ecobee | {title}</title>
      <meta name="description" content={description} />
      <meta name="icon" href="../images/favicon.png" />
      <Link rel="cannonical" href={url} />
      {image && <meta name="image" content={image} />}
    </Helmet>
  );
}
