/* eslint-disable n/no-path-concat */
import type { GatsbyConfig } from 'gatsby';

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/static/images/gallery/`,
        ignore: [`**/.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: `${__dirname}/static/images/hero/`,
        ignore: [`**/.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6bofxormpfeq`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
  ],
  jsxRuntime: `automatic`,
};

export default config;
