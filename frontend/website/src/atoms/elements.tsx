import * as React from "react";
import { Link as Router } from "gatsby";
import { RxCalendar, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import {
  Box,
  type BoxProps,
  Button,
  Heading,
  type HeadingProps,
  OrderedList,
  UnorderedList,
  type ListProps,
  ListItem,
  type ListItemProps,
  Link,
  type LinkProps,
  Text,
  type TextProps,
  Icon,
} from "@chakra-ui/react";
import { BUSINESS, PRINCIPAL } from "../atoms/constants";

const styleBrand = { color: "blue.700", fontWeight: "semibold" };
const styleLinks = { color: "blue.700", textDecoration: "underline" };

export const elements = {
  p: (props: BoxProps) => <Box mb={4} {...props} />,
  h1: (props: HeadingProps) => <Heading as="h1" mb={6} {...props} />,
  h2: (props: HeadingProps) => (
    <Heading as="h2" mb={4} fontSize="2xl" {...props} />
  ),
  h3: (props: HeadingProps) => <Heading as="h3" mb={3} {...props} />,
  h4: (props: HeadingProps) => <Heading as="h4" mb={2} {...props} />,
  h5: (props: HeadingProps) => <Heading as="h5" mb={1} {...props} />,
  h6: (props: HeadingProps) => <Heading as="h6" mb={1} {...props} />,
  // thematicBreak
  // blockquote
  ul: (props: ListProps) => <UnorderedList mb={3} {...props} />,
  ol: (props: ListProps) => <OrderedList mb={3} {...props} />,
  li: (props: ListItemProps) => <ListItem mb={0.5} {...props} />,
  // table
  // tr
  // th
  // td
  // pre
  // code
  em: (props: TextProps) => <Text as="em" {...props} />,
  strong: (props: TextProps) => <Text as="b" {...props} />,
  // delete
  // inlineCode
  // hr
  a: (props: LinkProps) => <Link {...styleLinks} {...props} />,
  // img
};

export const shortcodes = {
  Business: {
    LegalName: (props: TextProps) => (
      <Text as="b" className="h-card" {...styleBrand} {...props}>
        {BUSINESS.LEGAL_NAME}
      </Text>
    ),
    ShortName: (props: TextProps) => (
      <Text as="b" className="h-card" {...styleBrand} {...props}>
        {BUSINESS.SHORT_NAME}
      </Text>
    ),
    Registration: (props: TextProps) => (
      <Text as="span" {...props}>
        {BUSINESS.REGISTRATION}
      </Text>
    ),
    Jurisdiction: (props: TextProps) => (
      <Text as="span" {...props}>
        {BUSINESS.JURISDICTION}
      </Text>
    ),
    Office: (props: BoxProps) => (
      <Box as="span" className="h-adr" {...props}>
        <Text as="span" className="p-street-address">
          {BUSINESS.OFFICE.STREET_ADDRESS},{" "}
        </Text>
        <Text as="span" className="p-locality">
          {BUSINESS.OFFICE.LOCALITY},{" "}
        </Text>
        <Text as="span" className="p-postal-code">
          {BUSINESS.OFFICE.POSTAL_CODE},{" "}
        </Text>
        <Text
          as="abbr"
          className="p-country-name"
          title={BUSINESS.OFFICE.COUNTRY_NAME}
        >
          {BUSINESS.OFFICE.COUNTRY_CODE}
        </Text>
      </Box>
    ),
    Founding: (props: TextProps) => (
      <Text as="span" {...props}>
        {BUSINESS.FOUNDING}
      </Text>
    ),
    Contact: {
      Reception: (props: LinkProps) => (
        <Link
          href={`mailto:${BUSINESS.CONTACT.RECEPTION}`}
          {...styleLinks}
          isExternal
          {...props}
        >
          {BUSINESS.CONTACT.RECEPTION}
        </Link>
      ),
      Privacy: (props: LinkProps) => (
        <Link
          href={`mailto:${BUSINESS.CONTACT.PRIVACY}`}
          {...styleLinks}
          isExternal
          {...props}
        >
          {BUSINESS.CONTACT.PRIVACY}
        </Link>
      ),
      Security: (props: LinkProps) => (
        <Link
          href={`mailto:${BUSINESS.CONTACT.SECURITY}`}
          {...styleLinks}
          isExternal
          {...props}
        >
          {BUSINESS.CONTACT.SECURITY}
        </Link>
      ),
      BookChat: (props: LinkProps) => (
        <Link
          as={Button}
          bg="blue.600"
          color="white"
          _hover={{ bg: "blue.500" }}
          href={BUSINESS.CONTACT.BOOKINGS}
          isExternal
          {...props}
        >
          Book a Chat <Icon as={RxCalendar} boxSize={[4, 4, 6, 8]} ml="2" />
        </Link>
      ),
      Bookings: (props: LinkProps) => (
        <Link
          href={BUSINESS.CONTACT.BOOKINGS}
          {...styleLinks}
          isExternal
          {...props}
        />
      ),
    },
    Socials: {
      GitHub: (props: LinkProps) => (
        <Link href={BUSINESS.SOCIALS.GITHUB} isExternal {...props}>
          <Icon as={RxGithubLogo} boxSize={[4, 4, 6, 8]} />
        </Link>
      ),
      LinkedIn: (props: LinkProps) => (
        <Link href={BUSINESS.SOCIALS.LINKEDIN} isExternal {...props}>
          <Icon as={RxLinkedinLogo} boxSize={[4, 4, 6, 8]} />
        </Link>
      ),
    },
    Website: (props: LinkProps) => (
      <Link as="a" href={BUSINESS.WEBSITE} {...styleLinks} {...props}>
        {BUSINESS.WEBSITE}
      </Link>
    ),
  },
  Principal: {
    FullName: (props: TextProps) => (
      <Text as="b" className="h-card" {...styleBrand} {...props}>
        {PRINCIPAL.FULL_NAME}
      </Text>
    ),
  },
  Link: (props: LinkProps) => <Link as={Router} {...props} />,
};

export const Header = (props: HeadingProps) => (
  <Heading as="h1" color="blue.700" mb={6} {...props} />
);
