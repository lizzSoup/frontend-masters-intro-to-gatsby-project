require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.testdomain.com',
    title: 'ecobee — lizz 🤓',
    description:
      'Sample project based off of frontend masters intro to gatsby course',
    image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    // * Contentful Plugin
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8a8rhy6szrto`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
