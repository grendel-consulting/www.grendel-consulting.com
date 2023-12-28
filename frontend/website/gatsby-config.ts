import type { GatsbyConfig } from "gatsby";
import { BUSINESS } from "./src/atoms/constants";

const config: GatsbyConfig = {
  siteMetadata: {
    title: BUSINESS.LEGAL_NAME,
    description: BUSINESS.PURPOSE,
    siteUrl: BUSINESS.WEBSITE,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-pnpm",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content/",
      },
      __key: "content",
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
  ],
};

export default config;
