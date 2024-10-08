import * as React from "react";
import { Link as Router, HeadFC, PageProps } from "gatsby";
import { Box, Link } from "@chakra-ui/react";
import { Header } from "../atoms/elements";
import Seo from "../molecules/seo";
import Layout from "../organisms/layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header>Page Not Found</Header>
      <Box mb={4}>Sorry, we couldn't find what you were looking for.</Box>
      <Link as={Router} to="/">
        Go home
      </Link>
      .
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Not Found" />;
