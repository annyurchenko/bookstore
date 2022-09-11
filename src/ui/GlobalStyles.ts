import { createGlobalStyle } from "styled-components";
import resetCSS from "./resetCSS";
import { Color } from "./colors";

const GlobalStyles = createGlobalStyle`
${resetCSS};

body {
    font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${Color.Primary};
  }
`;

export default GlobalStyles;
