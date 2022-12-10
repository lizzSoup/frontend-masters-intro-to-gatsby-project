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
  // CMS Variables
  const teaserGroupData = data.contentfulTeaserGroup;

  // Quiz variables
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [question1Answer, setquestion1Answer] = useState('');
  const [question2Answer, setquestion2Answer] = useState('');
  const [question3Answer, setquestion3Answer] = useState('');
  const [quizResult, setQuizResult] = useState('');

  // Dark Mode Variables
  const [theCurrentDate, setTheCurrentDate] = useState(null);
  const isNightTime = theCurrentDate > 16 ? 'dark-mode' : null;

  // Gets User's local time and updates state
  useEffect(() => {
    const theDate = new Date();
    setTheCurrentDate(theDate.getHours());
  }, []);

  // Updates quiz visibility state on start btn click
  const handleStartBtnClick = () => {
    setIsQuizVisible(true);
  };

  // Updates question number state with currently selected value
  const handleSelectionChange = (e) => {
    const value = e.currentTarget.value;
    const questionNumber = e.currentTarget.dataset.question;

    switch (questionNumber) {
      case '1':
        setquestion1Answer(value);
        break;
      case '2':
        setquestion2Answer(value);
        break;
      case '3':
        setquestion3Answer(value);
        break;
      default:
        console.log('something went wrong');
    }
  };

  const handleNextBtnClick = (e) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
  };

  // Update quiz result state based on user selections
  const handleSubmit = (e) => {
    e.preventDefault();

    const premium = 'Smart Thermostat Premium';
    const enhanced = 'Smart Thermostat Enhanced';
    const lite = 'Ecobee 3 Lite';

    const isPremiumSelected =
      question1Answer === premium ||
      question2Answer === premium ||
      question3Answer === premium;
    const isEnhancedSelected =
      question1Answer === enhanced ||
      question2Answer === enhanced ||
      question3Answer === enhanced;

    if (isPremiumSelected) {
      setQuizResult(premium);
    } else if (isEnhancedSelected && !isPremiumSelected) {
      setQuizResult(enhanced);
    } else {
      setQuizResult(lite);
    }
  };

  return (
    <Layout
      title="Products"
      pageName={`products ${isNightTime}`}
      className={`${isNightTime} header`}
      aria-live="polite"
    >
      <div className="container">
        {/*  Quiz Landing: Teaser  */}
        <Teaser
          heading="Find your home's fit."
          description="Take this short quiz to discover the right ecobee thermostat for your home and family."
          altText="alt text for the image"
          className={`teaser placeholder horizontal ${
            quizResult !== '' ? 'hide' : null
          } ${isQuizVisible ? 'hide' : null}`}
          aria-hidden={isQuizVisible ? true : false}
          ctaLabel="Start Quiz"
          handleClick={handleStartBtnClick}
          aria-controls="quiz"
        />

        {/* Thermostat Quiz */}
        <form
          className={`container-xs ${isQuizVisible ? 'show' : 'hide'} ${
            quizResult !== '' ? 'hide' : 'show'
          }`}
          aria-hidden={isQuizVisible ? false : true}
          id="quiz"
        >
          <h1 className="heading">Find your home's fit.</h1>
          <p className="subheading">
            Let us help you find the right ecobee thermostat for your home and
            family.
          </p>

          {/* Quiz Question 1 */}
          <fieldset
            className={currentQuestion === 1 ? 'show' : 'hide'}
            aria-hidden={currentQuestion === 1 ? false : true}
          >
            <h2>
              <legend>Option 1.</legend>
            </h2>
            <p>
              Select one of the following options, and we'll help you find the
              right fit for your home.
            </p>
            <label className="label">
              <input
                type="radio"
                name="question one"
                id="question11lite"
                value="Ecobee 3 Lite"
                data-question="1"
                onChange={handleSelectionChange}
              />
              A balance of comfort, value, and up to 23% savings.
            </label>
            <label className="label">
              <input
                type="radio"
                name="question one"
                id="question1enhanced"
                value="Smart Thermostat Enhanced"
                data-question="1"
                onChange={handleSelectionChange}
              />
              Adapts to your life to deliver automatic comfort and up to 26%
              savings.
            </label>
            <label className="label">
              <input
                type="radio"
                name="question one"
                id="question1premium"
                value="Smart Thermostat Premium"
                data-question="1"
                onChange={handleSelectionChange}
              />
              Solve your comfort, home health, and security needs, all in one
              beautiful design that delievers your family up to 26% savings.
            </label>
            <button
              className="button"
              onClick={handleNextBtnClick}
              disabled={question1Answer === '' ? true : false}
            >
              Next
            </button>
            <p className="legend" aria-label="Now on question:">
              1/3
            </p>
          </fieldset>

          {/* Quiz Question 2 */}
          <fieldset
            className={currentQuestion === 2 ? 'show' : 'hide'}
            aria-hidden={currentQuestion === 2 ? false : true}
          >
            <h2>
              <legend>Option 2.</legend>
            </h2>
            <label className="label">
              <input
                type="radio"
                name="question two"
                id="question2premium"
                value="Smart Thermostat Premium"
                data-question="2"
                onChange={handleSelectionChange}
              />
              Built-in air quality monitor alerts you when air quality is poor
              and offer tips on how to improve it.
            </label>
            <label className="label">
              <input
                type="radio"
                name="question two"
                id="question2lite"
                value="Ecobee 3 Lite"
                data-question="2"
                onChange={handleSelectionChange}
              />
              Lite
            </label>
            <label className="label">
              <input
                type="radio"
                name="question two"
                id="question2enhanced"
                value="Smart Thermostat Enhanced"
                data-question="2"
                onChange={handleSelectionChange}
              />
              Enhanced
            </label>
            <button
              className="button"
              onClick={handleNextBtnClick}
              disabled={question2Answer === '' ? true : false}
            >
              Next
            </button>
            <p className="legend" aria-label="Now on question:">
              2/3
            </p>
          </fieldset>

          {/* Quiz Question 3 */}
          <fieldset
            className={currentQuestion === 3 ? 'show' : 'hide'}
            aria-hidden={currentQuestion === 3 ? false : true}
          >
            <h2>
              <legend>Option 3.</legend>
            </h2>
            <label className="label">
              <input
                type="radio"
                name="question three"
                id="question3lite"
                value="Ecobee 3 Lite"
                data-question="3"
                onChange={handleSelectionChange}
              />
              Lite
            </label>
            <label className="label">
              <input
                type="radio"
                name="question three"
                id="question3enhanced"
                value="Smart Thermostat Enhanced"
                data-question="3"
                onChange={handleSelectionChange}
              />
              Enhanced
            </label>
            <label className="label">
              <input
                type="radio"
                name="question three"
                id="question3premium"
                value="Smart Thermostat Premium"
                data-question="3"
                onChange={handleSelectionChange}
              />
              Get ultimate convenience like two-way talk with a built-in smart
              speaker and your choice of Siri¹ or Alexa Built-In.
            </label>
            <input
              className={`button`}
              disabled={question3Answer === '' ? true : false}
              type="submit"
              value="Find Your Match"
              onClick={handleSubmit}
            />
            <p className="legend" aria-label="Now on question:">
              2/3
            </p>
          </fieldset>
        </form>

        {/* Dynamic Teaser: Result */}
        {teaserGroupData.teaser?.map((teaser, index) => {
          const image = getImage(teaser.image[0]);
          let teaserStyleVariant = null;

          if (index === 1) {
            teaserStyleVariant = 'secondary';
          } else if (index === 2) {
            teaserStyleVariant = 'tertiary';
          }

          const isShown = teaser.heading === quizResult ? 'show' : 'hide';

          return (
            <Teaser
              key={teaser.heading}
              heading={`Recommended: ${teaser.heading}`}
              gatsbyImage={image}
              richText={teaser.body.childMarkdownRemark.html}
              className={`teaser horizontal ${isShown} ${teaserStyleVariant}`}
              aria-hidden={isShown ? false : true}
              ctaLabel={teaser.cta.label}
              path="/"
              altText={teaser.image.description}
            />
          );
        })}
      </div>
    </Layout>
  );
}
