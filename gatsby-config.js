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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Domecek Jalovci`,
        short_name: `Jalovci`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: [
          '20905e3bb9284a1ac13e2615c11a06aad66cc83c5fbfcd691b2f8ca201f2f129@group.calendar.google.com',
          '455c42f3b8736fb4abfd92c70eb6ed9f1a8261c8a09e797439dc4d83b78ccc07@group.calendar.google.com',
          '8e9dc68a7a4ea6b92cd1bc19daac83091cfa37e8fa3cd689d7ab8c2d97eef091@group.calendar.google.com',
        ],
        // options to retrieve the next 10 upcoming events
        timeMin: new Date().toISOString(),

        singleEvents: true,
        orderBy: 'startTime',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `std3enenx15w`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
  ],
};
