import * as React from "react";
import { Link as Router } from "gatsby";
import {
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Spacer,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import { shortcodes as s } from "../atoms/elements";
import BrandIcon from "../atoms/brand";

export const Header = () => {
  return (
    <React.Fragment>
      <Flex
        fontSize={["sm", "sm", "xl"]}
        color="blue.700"
        flexWrap="wrap"
        alignItems="center"
        pt={2}
        gap="4"
      >
        <Link as={Router} color="blue.700" to="/">
          <BrandIcon boxSize={16} />
          <Show above="sm">
            <s.Business.ShortName fontSize="2xl" verticalAlign="middle" />
          </Show>
        </Link>
        <Spacer />
        <Show above="sm">
          <s.Business.Contact.BookChat />
        </Show>
        <Menu>
          <MenuButton
            as={IconButton}
            borderColor="blue.700"
            aria-label="Navigation"
            icon={<RxHamburgerMenu />}
            variant="outline"
          />
          <MenuList>
            {Object.entries({
              "Our Services": "/services",
              "Ways of Working": "/ways-of-working",
              Experiments: "/experiments",
            }).map(([copy, target], i) => (
              <MenuItem as={Router} key={i} to={target}>
                {copy}
              </MenuItem>
            ))}
            <Show below="md">
              <s.Business.Contact.BookChat />
            </Show>
          </MenuList>
        </Menu>
      </Flex>
    </React.Fragment>
  );
};
