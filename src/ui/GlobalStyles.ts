import { createGlobalStyle } from "styled-components";
import resetCSS from "./resetCSS";
import { Color } from "./colors";
import { BODY1, BODY2, H1, H2, H3, S1 } from "./typography";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
${resetCSS};
${theme};
${H1};
${H2};
${H3};
${S1};
${BODY1};
${BODY2};



body {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  background: ${Color.White};
  color: ${Color.Primary};
  }
`;

export default GlobalStyles;
