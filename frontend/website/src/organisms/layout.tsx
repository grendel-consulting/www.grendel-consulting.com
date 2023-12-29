import * as React from "react";
import {
  Center,
  Grid,
  GridItem,
  SkipNavContent,
  SkipNavLink,
} from "@chakra-ui/react";

import Breadcrumb from "../molecules/breadcrumb";
import { Header } from "../organisms/header";
import { Footer } from "../organisms/footer";
import { RxCaretRight } from "react-icons/rx";

type PageProps = {
  location?: Location;
  children?: React.ReactNode;
};

const Layout = ({ location, children }: PageProps) => {
  return (
    <Center>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Grid
        as="main"
        color="blackAlpha.800"
        templateAreas={`"header" "main" "footer"`}
        gridTemplateRows="auto 1fr auto"
        gridTemplateColumns="auto"
        maxWidth={"1280px"}
        h="100vh"
      >
        <GridItem pl={0} pr={4} pb={4} area="header">
          <Header />
        </GridItem>
        <GridItem as="article" p={[2, 2, 4]} area="main">
          <Breadcrumb
            location={location}
            fontSize={"xs"}
            separator={<RxCaretRight role="presentation" color="gray.700" />}
          />
          <SkipNavContent />
          {children}
        </GridItem>
        <GridItem
          as="footer"
          p={[2, 2, 4]}
          color="gray.700"
          fontSize={["xs", "sm", "md"]}
          area="footer"
        >
          <Footer />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Layout;
