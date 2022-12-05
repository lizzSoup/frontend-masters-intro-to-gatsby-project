import * as React from 'react';
import { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout.js';
import Teaser from '../components/teaser';
import { getImage } from 'gatsby-plugin-image';

export const query = graphql`
  query {
    contentfulTeaserGroup(title: { eq: "Thermostat Selector" }) {
      teaser {
        cta {
          url
          label
        }
        image {
          gatsbyImageData(
            width: 700
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
          )
          description
        }
        body {
          childMarkdownRemark {
            html
          }
        }
        heading
      }
      heading
      id
    }
  }
`;

export default function Products({ data }) {
  const [selection, setSelection] = useState(null);
  const teaserGroupData = data.contentfulTeaserGroup;
  const [theCurrentDate, setTheCurrentDate] = useState(null);

  useEffect(() => {
    const theDate = new Date();
    setTheCurrentDate(theDate.getHours() % 12);
  }, []);

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setSelection(value);
  };

  const isNightTime = theCurrentDate < 5 ? 'dark-mode' : null;

  return (
    <Layout
      title="Products"
      pageName={`products ${isNightTime}`}
      className={`${isNightTime} header`}
    >
      <div className="container">
        <div className="container-xs">
          <h1 className="heading">Find your home's fit.</h1>
          <p className="subheading">
            Select from these options find the right ecobee thermostat for your
            home and family.
          </p>
          <label className="label">
            <input
              type="radio"
              name="product"
              id="lite"
              value="Ecobee 3 Lite"
              onChange={handleChange}
            />
            A balance of comfort, value, and up to 23% energy savings.
          </label>
          <label className="label">
            <input
              type="radio"
              name="product"
              id="enhanced"
              value="Smart Thermostat Enhanced"
              onChange={handleChange}
            />
            Adapts to your life to deliver automatic comfort and up to 26%
            savings, with built-in occupancy sensor and dual-band Wi-Fi.
          </label>
          <label className="label">
            <input
              type="radio"
              name="product"
              id="premium"
              value="Smart Thermostat Premium"
              onChange={handleChange}
            />
            Solve your comfort, home health, and security needs, all in one
            beautiful design. Choice of Siri or Alexa, hands-free intercom,
            smoke alarm detect and more.
          </label>
        </div>

        {/*  Placeholder Teaser  */}
        <Teaser
          heading="Find your home's fit."
          description="Select from the options above and we'll reccommend the right ecobee thermostat for your home and family."
          altText="alt text for the image"
          className={`teaser placeholder horizontal ${
            selection !== null ? 'hide' : null
          }`}
        />

        {/* Dynamic Teaser */}
        {teaserGroupData.teaser.map((teaser, index) => {
          const image = getImage(teaser.image[0]);
          const styleVariant = index === 1 ? 'secondary' : 'tertiary';
          const isShown = teaser.heading === selection ? 'show' : 'hide';

          return (
            <Teaser
              heading={`Recommended: ${teaser.heading}`}
              gatsbyImage={image}
              richText={teaser.body.childMarkdownRemark.html}
              className={`teaser horizontal ${
                index === 1 || index === 2 ? styleVariant : null
              } ${isShown}`}
              ctaLabel={teaser.cta.label}
              path={teaser.cta.url}
            />
          );
        })}
      </div>
    </Layout>
  );
}
