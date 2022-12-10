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
  const teaserGroupData = data.contentfulTeaserGroup;
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [option1, setoption1] = useState('');
  const [option2, setoption2] = useState('');
  const [option3, setoption3] = useState('');
  const [quizResult, setQuizResult] = useState('');
  const [theCurrentDate, setTheCurrentDate] = useState(null);
  const isNightTime = theCurrentDate > 16 ? 'dark-mode' : null;

  // Gets User's local time
  useEffect(() => {
    const theDate = new Date();
    setTheCurrentDate(theDate.getHours());
  }, []);

  // Handles form input updates and updates option states
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const questionNumber = e.currentTarget.dataset.question;

    switch (questionNumber) {
      case '1':
        setoption1(value);
        break;
      case '2':
        setoption2(value);
        break;
      case '3':
        setoption3(value);
        break;
      default:
        console.log('something went wrong');
    }
  };

  // Handles form submit and update quiz result state based on user options
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
    const premium = 'Smart Thermostat Premium';
    const enhanced = 'Smart Thermostat Enhanced';
    const lite = 'Ecobee 3 Lite';

    const isResultPremium =
      option1 === premium || option2 === premium || option3 === premium;
    const isResultEnhanced =
      option1 === enhanced || option2 === enhanced || option3 === enhanced;

    if (isResultPremium) {
      setQuizResult(premium);
    } else if (isResultEnhanced && !isResultPremium) {
      setQuizResult(enhanced);
    } else {
      setQuizResult(lite);
    }
  };

  // Starts the quiz
  const handleStart = () => {
    setIsQuizVisible(true);
  };

  // Moves user along to next question
  const handleNext = (e) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Layout
      title="Products"
      pageName={`products ${isNightTime}`}
      className={`${isNightTime} header`}
    >
      <div className="container">
        {/*  Quiz Landing Teaser  */}
        <Teaser
          heading="Find your home's fit."
          description="Select from the options and we'll reccommend the right ecobee thermostat for your home and family."
          altText="alt text for the image"
          className={`teaser placeholder horizontal ${
            quizResult !== '' ? 'hide' : null
          } ${isQuizVisible ? 'hide' : null}`}
          ctaLabel="Start Quiz"
          handleClick={handleStart}
        />

        {/* Thermostat Quiz */}
        <form
          className={`container-xs ${isQuizVisible ? 'show' : 'hide'} ${
            quizResult !== '' ? 'hide' : 'show'
          }`}
        >
          <h1 className="heading">Find your home's fit.</h1>
          <p className="subheading">
            Select from these options find the right ecobee thermostat for your
            home and family.
          </p>

          {/* Option 1 */}
          <fieldset className={currentQuestion === 1 ? 'show' : 'hide'}>
            <h2>Option 1.</h2>
            <label className="label">
              <input
                type="radio"
                name="question one"
                id="option1lite"
                value="Ecobee 3 Lite"
                data-question="1"
                onChange={handleChange}
              />
              A balance of comfort, value, and up to 23% energy savings.
            </label>
            <label className="label">
              <input
                type="radio"
                name="question one"
                id="option2enhanced"
                value="Smart Thermostat Enhanced"
                data-question="1"
                onChange={handleChange}
              />
              Adapts to your life to deliver automatic comfort and up to 26%
              savings, with built-in occupancy sensor and dual-band Wi-Fi.
            </label>
            <label className="label">
              <input
                type="radio"
                name="question one"
                id="option1premium"
                value="Smart Thermostat Premium"
                data-question="1"
                onChange={handleChange}
              />
              Solve your comfort, home health, and security needs, all in one
              beautiful design. Choice of Siri or Alexa, hands-free intercom,
              smoke alarm detect and more.
            </label>
            <button
              className={`button ${option1 === '' ? 'hide' : 'show'}`}
              onClick={handleNext}
            >
              Next
            </button>
          </fieldset>

          {/* Option 2 */}
          <fieldset className={currentQuestion === 2 ? 'show' : 'hide'}>
            <h2>Option 2.</h2>
            <label className="label">
              <input
                type="radio"
                name="question two"
                id="option2lite"
                value="Ecobee 3 Lite"
                data-question="2"
                onChange={handleChange}
              />
              Lite
            </label>
            <label className="label">
              <input
                type="radio"
                name="question two"
                id="option2enhanced"
                value="Smart Thermostat Enhanced"
                data-question="2"
                onChange={handleChange}
              />
              Enhanced
            </label>
            <label className="label">
              <input
                type="radio"
                name="question two"
                id="option2premium"
                value="Smart Thermostat Premium"
                data-question="2"
                onChange={handleChange}
              />
              Premium
            </label>
            <button
              className={`button ${option2 === '' ? 'hide' : 'show'}`}
              onClick={handleNext}
            >
              Next
            </button>
          </fieldset>

          {/* Option 3. */}
          <fieldset className={currentQuestion === 3 ? 'show' : 'hide'}>
            <h2>Option 3.</h2>
            <label className="label">
              <input
                type="radio"
                name="question three"
                id="option3lite"
                value="Ecobee 3 Lite"
                data-question="3"
                onChange={handleChange}
              />
              Lite
            </label>
            <label className="label">
              <input
                type="radio"
                name="question three"
                id="option3enhanced"
                value="Smart Thermostat Enhanced"
                data-question="3"
                onChange={handleChange}
              />
              Enhanced
            </label>
            <label className="label">
              <input
                type="radio"
                name="question three"
                id="option3premium"
                value="Smart Thermostat Premium"
                data-question="3"
                onChange={handleChange}
              />
              Premium
            </label>
            <input
              className={`button ${option3 === '' ? 'hide' : 'show'}`}
              type="submit"
              value="Find Your Match"
              onClick={handleSubmit}
            />
          </fieldset>
        </form>

        {/* Dynamic Teaser: Result */}
        {teaserGroupData.teaser.map((teaser, index) => {
          const image = getImage(teaser.image[0]);
          const styleVariant = index === 1 ? 'secondary' : 'tertiary';
          const isShown = teaser.heading === quizResult ? 'show' : 'hide';

          return (
            <>
              <h1 className={isShown}>Reccommended:</h1>
              <Teaser
                key={teaser.heading}
                heading={teaser.heading}
                gatsbyImage={image}
                richText={teaser.body.childMarkdownRemark.html}
                className={`teaser horizontal ${
                  index === 1 || index === 2 ? styleVariant : null
                } ${isShown}`}
                ctaLabel={teaser.cta.label}
                path="/"
                altText={teaser.image.description}
              />
            </>
          );
        })}
      </div>
    </Layout>
  );
}
