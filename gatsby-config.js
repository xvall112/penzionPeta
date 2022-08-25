/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Penzion Peta',
    description: 'Ubytovani',
    titleTemplate: '%s - Faith in Travel',
    siteUrl: 'https://www.penzionpeta.cz',
    author: '@Lukas Valta <valtalukas@sezanm.cz>',
    image: '/manifestIcon.png',
    social: {
      twitter: 'Lukas',
    },
  },
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
  ],
};
