import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Teaser from '../components/teaser';
import TeaserGroup from '../components/teaser-group';

export const query = graphql`
  query {
    contentfulHero(heroType: { eq: "Homepage Hero" }) {
      id
      description
      heading
      image {
        gatsbyImageData(
          width: 1800
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
        )
        description
      }
      cta {
        label
        url
      }
    }
    contentfulTeaserGroup(title: { eq: "Homepage Sustainability Teasers" }) {
      id
      heading
      teaser {
        body {
          childMarkdownRemark {
            html
          }
        }
        image {
          description
          gatsbyImageData(
            width: 500
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
          )
        }
        cta {
          url
          label
        }
      }
    }
  }
`;

export default function Index({ data }) {
  const heroData = data.contentfulHero;
  const image = getImage(heroData.image);
  const sustainabilityData = data.contentfulTeaserGroup;
  return (
    <Layout pageName="home">
      <Hero
        heading={heroData.heading}
        description={heroData.description}
        gatsbyImage={image}
        altText={heroData.image.description}
        cta={heroData.cta}
      />
      <TeaserGroup
        heading={sustainabilityData.heading}
        headingAs="h2"
        as="section"
        className="teaser-group-of-three container"
      >
        <ul className="teaser-group-of-three__list">
          {sustainabilityData.teaser.map((teaser, index) => {
            const image = getImage(teaser.image[0]);
            const ctaLabel = teaser.cta?.label;
            return (
              <Teaser
                richText={teaser.body.childMarkdownRemark.html}
                gatsbyImage={image}
                altText={teaser.image[0].description}
                ctaLabel={ctaLabel ? ctaLabel : null}
                path={teaser.cta?.url ? '/' : null}
                className="teaser-group-of-three__list-item"
                as="li"
                key={`teaser-${index}`}
              />
            );
          })}
        </ul>
      </TeaserGroup>
    </Layout>
  );
}
