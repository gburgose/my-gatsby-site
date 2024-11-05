import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || `http://localhost:8000`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /src\/images/, // Asegúrate de que la ruta sea correcta
        },
      },
    },
  ],
};

export default config;