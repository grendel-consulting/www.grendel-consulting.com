import React from "react";
import { Link as Router } from "gatsby";
import { RxHome } from "react-icons/rx";

import {
  Breadcrumb as Trail,
  type BreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";

const Breadcrumb = (props: { location?: Location } & BreadcrumbProps) => {
  if (props.location === undefined) {
    return false;
  }

  const crumbs = props.location.pathname.split("/");
  let url = "";

  return (
    <Trail {...props}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Router} aria-label="Home" to="/">
          <Icon as={RxHome} mt={1} />
        </BreadcrumbLink>
      </BreadcrumbItem>

      {crumbs
        .filter((crumb) => crumb !== "")
        .map((crumb, i) => {
          url += `/${crumb}`;

          return (
            <BreadcrumbItem key={`crumb-${crumb}-${i}`}>
              <BreadcrumbLink
                as={Router}

                to={url}
                isCurrentPage={i == crumbs.length - 1}
              >
                {
                  // Convert hyphenated slug to title case string
                  crumb
                    .toLowerCase()
                    .split("-")
                    .map(function (word) {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    })
                    .join(" ")
                }
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
    </Trail>
  );
};

export default Breadcrumb;
