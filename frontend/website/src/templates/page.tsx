import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { elements, Header, shortcodes } from "../atoms/elements";
import SEO from "../molecules/seo";
import Layout from "../organisms/layout";

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      slug: string;
    };
  };
};

const PageTemplate: React.FC<PageProps<Queries.PageQuery>> = ({
  data,
  location,
  children,
}) => {
  return (
    <Layout location={location}>
      <Header>{data.mdx?.frontmatter?.title}</Header>
      <MDXProvider components={{ ...elements, ...shortcodes }}>
        {children}
      </MDXProvider>
    </Layout>
  );
};

export default PageTemplate;

export const query = graphql`
  query Page($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;

export const Head: HeadFC<DataProps> = ({ data }) => (
  <SEO title={data.mdx?.frontmatter?.title} />
);
