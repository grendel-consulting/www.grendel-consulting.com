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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage(filter: { pluginCreator: { name: { eq: "gatsby-plugin-mdx" }}}) {
            nodes {
              path
              pageContext
            }
          }
        }
        `,
        resolveSiteUrl: () => BUSINESS.WEBSITE,
        serialize: (page:any) => {
          return {
            url: page.path,
            ...( page.pageContext.frontmatter?.modified && {lastmod: page.pageContext.frontmatter.modified} ),
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: BUSINESS.SHORT_NAME,
        short_name: BUSINESS.SHORT_NAME,
        icon: "./src/images/icon.png",
        icon_options: {
          purpose: "any maskable",
        },
        background_color: "#FFFFFF",
        theme_color: "#2C5282",
        start_url: "/",
        display: "standalone",
        lang: "en",
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
  trailingSlash: 'always',
};

export default config;
