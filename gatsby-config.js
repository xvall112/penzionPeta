/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Domeček Jalovčí',
    description: 'Ubytovani v penzionu Domeček Jalovčí',
    titleTemplate: '%s - Domeček Jalovčí',
    siteUrl: 'https://www.domecekjalovci.netlify.com',
    author: '@Lukas Valta <valtalukas@sezanm.cz>',
    image: '/manifestIcon.png',
    social: {
      twitter: 'Lukas',
    },
  },
  plugins: [
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
