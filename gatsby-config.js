/* eslint-disable no-undef */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: 'Domeček Jalovčí',
    description:
      'Penzion Domeček Jalovčí. Ubytovani a agroturistika v malé zemědělské usedlosti v oblsati Středočeského kraje nedaleko Kamýku nad Vltavou',
    titleTemplate: '%s - Domeček Jalovčí',
    siteUrl: 'https://www.domecekjalovci.netlify.com',
    author: '@Lukas Valta <valtalukas@sezanm.cz>',
    image: '/manifestIcon.png',
    social: {
      twitter: 'Lukas',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `std3enenx15w`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
  ],
};
