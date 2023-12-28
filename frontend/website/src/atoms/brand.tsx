import * as React from "react";
import { createIcon } from "@chakra-ui/icons";

// Adapted from https://www.github.com/grendel-consulting/favicon-creator
const BrandIcon = createIcon({
  displayName: "BrandIcon",
  viewBox: "0 0 5400 5400",
  path: (
    <g id="Canvas" transform="translate(900,1200)">
      <g id="Background">
        <circle fill="white" cx="1800" cy="1200" r="2700" />
      </g>
      <g id="Logo">
        <polygon fill="#104378" points="2432,341 3268,762 3708,0 " />
        <polygon fill="#145593" points="1994,1099 2432,341 3268,762 " />
        <polygon fill="#165EA0" points="1431,610 1854,1342 2432,341 " />
        <polygon fill="#104378" points="0,0 1244,333 345,598 " />
        <polygon fill="#6DB7F2" points="1854,1974 1854,3211 1217,2108 " />
        <polygon fill="#2491EB" points="1854,1974 1854,3211 2651,1830 " />
        <polygon fill="#165EA0" points="3268,762 2425,985 2651,1830 " />
        <polygon fill="#1B70BB" points="2425,985 2651,1830 1854,1974 " />
        <polygon fill="#145593" points="345,598 956,418 729,1263 " />
        <polygon fill="#165EA0" points="956,418 729,1263 1443,1263 " />
        <polygon fill="#1B70BB" points="729,1263 1443,1263 1217,2108 " />
        <polygon fill="#2491EB" points="1443,1263 1217,2108 1854,1974 " />
      </g>
    </g>
  ),
});

export default BrandIcon;
