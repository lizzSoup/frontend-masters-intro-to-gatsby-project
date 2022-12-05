import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Teaser from '../components/teaser';

export default function TestPage() {
  const [theCurrentDate, setTheCurrentDate] = useState();

  useEffect(() => {
    const theDate = new Date();
    setTheCurrentDate(theDate.getHours() % 12);
  }, []);
  return (
    <Layout pageName="pr" className="header dark-mode">
      <div className="container">
        <h1>{theCurrentDate ? theCurrentDate : null} </h1>
        <div className="container-xs">
          <h1>Find the Right Fit for Your Home.</h1>
          <p className="subheading">
            Select from the options below, and we'll reccommend the right ecobee
            thermostat for your home and family.
          </p>
          <label htmlFor="test" className="test-label">
            <input type="radio" name="test" id="test" />A balance of comfort,
            value, and up to 23% energy savings.
          </label>
          <label htmlFor="test" className="test-label">
            <input type="radio" name="test" id="test" />
            Adapts to your life to deliver automatic comfort and up to 26%
            savings, with built-in occupancy sensor and dual-band Wi-Fi.
          </label>
          <label htmlFor="test" className="test-label">
            <input type="radio" name="test" id="test" /> Solve your comfort,
            home health, and security needs, all in one beautiful design. Choice
            of Siri or Alexa, hands-free intercom, and smoke alarm detect.
          </label>
        </div>

        <Teaser
          heading="Lorem Ipsum sit amet"
          description="Lorem ipsum sit amet dolar ipsum sipsum ecobee sustainability thermostat security energy star certified."
          altText="alt text for the image"
          path="https://ecobee.com"
          ctaLabel="Learn More"
          className="teaser horizontal"
        />
      </div>
    </Layout>
  );
}
