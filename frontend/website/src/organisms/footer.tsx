import * as React from "react";
import { Link as Router } from "gatsby";
import {
  Box,
  Flex,
  Icon,
  Link,
  Spacer,
  VisuallyHidden,
} from "@chakra-ui/react";
import { RxExternalLink } from "react-icons/rx";
import { shortcodes as s } from "../atoms/elements";

const styleLegalese = { color: "gray.600" };

export const Footer = () => {
  return (
    <React.Fragment>
      <Box className="v-event">
        <Box as="span" className="summary">
          <s.Business.LegalName />, a company registered
        </Box>{" "}
        in <s.Business.Jurisdiction className="location" /> in{" "}
        <s.Business.Founding className="dstart" />, (company registration{" "}
        <s.Business.Registration />
        ).
      </Box>
      <Box>
        Registered office: <s.Business.Office />.
      </Box>
      <Flex
        fontWeight="semibold"
        pt={2}
        pb={4}
        flexWrap="wrap"
        alignItems="center"
        gap={[2, 2, 4]}
      >
        {Object.entries({
          Accessibility: "/accessibility",
          Terms: "/terms",
          Privacy: "/privacy",
          Cookies: "/cookies",
          Security: "/security",
          Sustainability: "/sustainability",
          Colophon: "/colophon",
          Sitemap: "/sitemap-index.xml",
        }).map(([copy, target], i) => (
          <Link
            as={Router}
            key={target}
            _hover={{ textDecoration: "underline", ...styleLegalese }}
            to={target}
          >
            {copy}
          </Link>
        ))}
        <Spacer />
        <s.Business.Socials.LinkedIn _hover={styleLegalese} />
        <s.Business.Socials.GitHub _hover={styleLegalese} />
      </Flex>
      <Box>
        Copyright &copy; <s.Business.Founding />-{new Date().getFullYear()}{" "}
        <s.Business.LegalName />. Some rights reserved,{" "}
        <Link
          fontWeight="semibold"
          _hover={{ textDecoration: "underline", ...styleLegalese }}
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          rel="license noopener"
          isExternal
        >
          CC-BY-NC 4.0 <Icon as={RxExternalLink} pt={1} />{" "}
          <VisuallyHidden>(opens in new tab)</VisuallyHidden>
        </Link>
        . Icons by{" "}
        <Link
          fontWeight="semibold"
          _hover={{ textDecoration: "underline", ...styleLegalese }}
          href="https://www.radix-ui.com/icons"
          isExternal
        >
          WorkOS <Icon as={RxExternalLink} pt={1} />{" "}
          <VisuallyHidden>(opens in new tab)</VisuallyHidden>
        </Link>
        .
      </Box>
    </React.Fragment>
  );
};
