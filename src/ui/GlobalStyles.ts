import { createGlobalStyle } from "styled-components";
import resetCSS from "./resetCSS";
import { Color } from "./colors";

const GlobalStyles = createGlobalStyle`
${resetCSS};

body {
    font-family: "Inter", Sans-Serif;
    font-style: normal;
    font-weight: 400;
    color: ${Color.Primary};
  }
`;

export default GlobalStyles;
