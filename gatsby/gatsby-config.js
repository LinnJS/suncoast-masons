/* eslint-disable node/no-path-concat */

module.exports = {
  siteMetadata: {
    title: 'Suncoast Masons',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Suncoast Master Mason Association',
        short_name: 'SMMA',
        start_url: '/',
        background_color: '#fff9a0',
        theme_color: '#131b71',
        display: 'standalone',
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `aljo8d2t`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // these must be set to true for sanity preview
        watchMode: process.env.NODE_ENV === 'development',
        overlayDrafts: process.env.NODE_ENV === 'development',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/svgs`,
        name: 'svgs',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
  ],
};
